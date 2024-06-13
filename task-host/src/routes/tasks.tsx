import { Header } from '@/components/header/header';
import { useNavigate } from 'react-router-dom';
import TaskList from 'taskList/TaskList';

export default function TasksPage() {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <TaskList onNavigate={navigate} />
        </>
    );
}
