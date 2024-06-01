import { authConfirm } from '@/services/auth';
import { createFileRoute, useSearch } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/confirm' as never)({
    component: AuthConfirmPage,
});

function AuthConfirmPage() {
    const searchParams = useSearch({ from: '/auth/confirm' });

    authConfirm(searchParams);
}
