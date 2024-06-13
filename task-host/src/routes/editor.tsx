import { Header } from '@/components/header/header';
import { useNavigate } from 'react-router-dom';
import TaskEditor from 'taskEditor/TaskEditor';

export default function EditorPage() {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <TaskEditor onNavigate={navigate} />
        </>
    );
}
