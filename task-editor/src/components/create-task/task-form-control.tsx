import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TaskForm } from '@/components/task-form/task-form';
import { format } from 'date-fns';
import { TaskFields } from '@/types';
import { DATE_FORMAT } from '@/constants';
import { taskFormSchema } from '@/components/task-form/task-form-schema';
import { createTask } from '@/services/tasks';

export const TaskFormControl = () => {
    const form = useForm<TaskFields>({
        resolver: zodResolver(taskFormSchema),
        defaultValues: {
            title: '',
            description: '',
        },
    });

    const handleSubmit = async (values: TaskFields) => {
        const formattedValues = {
            ...values,
            deadline: format(values.deadline, DATE_FORMAT),
        };

        await createTask(formattedValues);
        // TODO: redirect to 'tasks'
    };

    return <TaskForm form={form} onSubmit={handleSubmit} />;
};
