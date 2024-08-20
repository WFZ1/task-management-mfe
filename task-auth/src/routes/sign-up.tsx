import { SignUp } from '@/components/sign-up/sign-up';
import { useSearchParams } from 'react-router-dom';

export const SignUpPage = () => {
    const [searchParams] = useSearchParams();

    return <SignUp message={searchParams.get('message') ?? undefined} />;
};
