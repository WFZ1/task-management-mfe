import { useNavigate } from 'react-router-dom';
import TaskAuth from 'taskAuth/TaskAuth';

export default function LoginPage() {
    const navigate = useNavigate();

    return <TaskAuth onNavigate={navigate} />;
}
