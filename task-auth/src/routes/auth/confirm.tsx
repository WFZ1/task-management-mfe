import { authConfirm } from '@/services/auth';
import { createFileRoute, useSearch } from '@tanstack/react-router';
import { useEffect, useRef } from 'react';

export const Route = createFileRoute('/auth/confirm' as never)({
    component: AuthConfirmPage,
});

function AuthConfirmPage() {
    const isMounted = useRef(false);
    const searchParams = useSearch({ from: '/auth/confirm' });

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            authConfirm(searchParams);
        }
    }, [searchParams]);
}
