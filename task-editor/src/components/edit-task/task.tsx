import { getTask } from '@/services/tasks';
import { TaskFormControl } from './task-form-control';
import { useEffect, useState } from 'react';
import { Task as ITask } from '@/types';

interface TaskProps {
    id: string | null;
}

export const Task = ({ id }: TaskProps) => {
    const [task, setTask] = useState<ITask | null | undefined>();

    // TODO: add loading state
    useEffect(() => {
        if (id) {
            getTask(id)
                .then((data) => setTask(data))
                .catch((error) => console.error('Error getting task: ', error));
        }
    }, [id]);

    if (!id) {
        return <div>Task id was not provided</div>;
    }

    if (!task) {
        return <div>Task not found</div>;
    }

    return <TaskFormControl task={task} />;
};
