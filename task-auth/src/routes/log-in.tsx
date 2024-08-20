import { LogIn } from '@/components/log-in/log-in';
import { useSearchParams } from 'react-router-dom';

export const LogInPage = () => {
    const [searchParams] = useSearchParams();

    return <LogIn message={searchParams.get('message') ?? undefined} />;
};
