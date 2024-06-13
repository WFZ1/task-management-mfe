import { AuthButton } from '@/components/auth-button/auth-button';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <AuthButton />
            <Link to="editor">Create Task</Link>
            <Link to="tasks">Tasks</Link>
        </main>
    );
}
