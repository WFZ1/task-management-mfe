import { TaskFormControl } from '@/components/create-task/task-form-control';
import { useNavigation } from '@/services/navigation/context';
import { useEffect } from 'react';

export default function CreateTaskPage() {
    const { navigate } = useNavigation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const taskId = searchParams.get('id');

        if (taskId) {
            navigate({ to: `/edit-task?id=${taskId}` });
        }
    }, [navigate]);

    return <TaskFormControl />;
}
