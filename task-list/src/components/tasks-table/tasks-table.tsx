import { useCallback, useEffect, useMemo, useState } from 'react';
import {
    ColumnDef,
    ColumnFiltersState,
    Row,
    SortingState,
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { columns } from './tasks-columns';
import { DataTable } from '@/components/ui/data-table/data-table';
import { Task } from '@/types';
import { Checkbox } from '@/components/ui/checkbox';
import { DataTableRowActions } from '@/components/ui/data-table/data-table-row-actions';
import { completeTask, deleteTask } from '@/services/tasks';
import { useNavigation } from '@/services/navigation/context';

interface TasksTableProps {
    data: Task[];
}

export function TasksTable({ data }: TasksTableProps) {
    const { navigate } = useNavigation();
    const [tasks, setTasks] = useState<Task[]>([]);

    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = useState<SortingState>([]);

    useEffect(() => setTasks(data), [data]);

    const toggleTaskCompletion = useCallback(
        async (taskId: Task['id'], isCompleted: Task['isCompleted']) => {
            const updatedTasks = tasks.map((task) => {
                if (task.id !== taskId) {
                    return task;
                }

                return { ...task, isCompleted: isCompleted };
            });

            try {
                await completeTask(taskId, isCompleted);
                setTasks(updatedTasks);
            } catch (error) {
                console.error('Error completing task: ', error);
            }
        },
        [tasks]
    );

    const handleTaskDeletion = useCallback(
        async (taskId: Task['id']) => {
            const updatedTasks = tasks.filter((task) => task.id !== taskId);

            try {
                await deleteTask(taskId);
                setTasks(updatedTasks);
            } catch (error) {
                console.error('Error deleting task: ', error);
            }
        },
        [tasks]
    );

    const enhancedColumns: ColumnDef<Task>[] = useMemo(() => {
        return columns.map((column: ColumnDef<Task>) => {
            if (column.id === 'isCompleted') {
                return {
                    ...column,
                    cell: ({ row }: { row: Row<Task> }) => (
                        <Checkbox
                            checked={row.getValue('isCompleted')}
                            onCheckedChange={(value: boolean) => toggleTaskCompletion(row.original.id, value)}
                            aria-label="Mark task as completed / uncompleted"
                            className="translate-y-[2px]"
                        />
                    ),
                };
            } else if (column.id === 'actions') {
                return {
                    ...column,
                    cell: ({ row }: { row: Row<Task> }) => (
                        <DataTableRowActions
                            onDelete={() => handleTaskDeletion(row.original.id)}
                            onEdit={() => navigate({ to: `/editor?id=${row.original.id}`, isHost: true })}
                        />
                    ),
                };
            }

            return column;
        });
    }, [toggleTaskCompletion, handleTaskDeletion, navigate]);

    const table = useReactTable({
        data: tasks,
        columns: enhancedColumns,
        state: {
            sorting,
            columnFilters,
        },
        enableRowSelection: true,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
    });

    return <DataTable table={table} columnsLength={columns.length} />;
}
