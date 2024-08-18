import { createFileRoute, useSearch } from '@tanstack/react-router';
import { SignUp } from '@/components/sign-up/sign-up';

interface SearchParams {
    message?: string;
}

export const Route = createFileRoute('/sign-up' as never)({
    component: SignUpPage,
});

function SignUpPage() {
    const { message } = useSearch({ from: '/sign-up' }) as SearchParams;

    return <SignUp message={message} />;
}
