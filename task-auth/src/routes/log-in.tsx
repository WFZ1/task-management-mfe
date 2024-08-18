import { createFileRoute, useSearch } from '@tanstack/react-router';
import { LogIn } from '@/components/log-in/log-in';

interface SearchParams {
    message?: string;
}

export const Route = createFileRoute('/log-in' as never)({
    component: LogInPage,
});

function LogInPage() {
    const { message } = useSearch({ from: '/log-in' }) as SearchParams;

    return <LogIn message={message} />;
}
