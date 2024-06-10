import { TasksTable } from '@/components/tasks-table/tasks-table';
import { getTasks } from '@/services/tasks';
import { Task as ITask } from '@/types';
import { useEffect, useState } from 'react';

export const Tasks = () => {
    const [tasks, setTasks] = useState<ITask[] | null | undefined>();

    // TODO: add loading state
    useEffect(() => {
        getTasks()
            .then((data) => setTasks(data))
            .catch((error) => console.error('Error getting tasks: ', error));
    }, []);

    return <TasksTable data={tasks ?? []} />;
};
