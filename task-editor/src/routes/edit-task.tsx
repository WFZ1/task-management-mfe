import { Task } from '@/components/edit-task/task';
import { useSearchParams } from 'react-router-dom';

export default function UpdateTaskPage() {
    const [searchParams] = useSearchParams();

    return <Task id={searchParams.get('id')} />;
}
