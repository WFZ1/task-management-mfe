import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TaskForm } from '@/components/task-form/task-form';
import { format } from 'date-fns';
import { Task, TaskFields } from '@/types';
import { DATE_FORMAT } from '@/constants';
import { taskFormSchema } from '@/components/task-form/task-form-schema';
import { updateTask } from '@/services/tasks';

interface TaskFormControlProps {
    task: Task;
}

export const TaskFormControl = ({ task }: TaskFormControlProps) => {
    const form = useForm<TaskFields>({
        resolver: zodResolver(taskFormSchema),
        defaultValues: {
            title: task.title,
            description: task.description,
            deadline: new Date(task.deadline),
            priority: task.priority,
        },
    });

    const handleSubmit = async (values: TaskFields) => {
        const formattedValues = {
            ...values,
            deadline: format(values.deadline, DATE_FORMAT),
        };

        await updateTask(task.id, formattedValues);
        // TODO: redirect to 'tasks'
    };

    return <TaskForm form={form} onSubmit={handleSubmit} />;
};
