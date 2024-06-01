import { signUp } from '@/services/auth';
import { AuthData } from '@/services/auth/types';
import { useNavigate } from '@tanstack/react-router';

export const useHandleSubmit = () => {
    const navigate = useNavigate();

    const handleSubmit = async (data: AuthData) => {
        try {
            await signUp(data);
            navigate({
                to: '/sign-up',
                search: { message: 'Check email to continue sign in process' },
            });
        } catch (error) {
            console.error('Error user sign in: ', error);
            navigate({
                to: '/sign-up',
                search: { message: 'Could not authenticate user' },
            });
        }
    };

    return handleSubmit;
};
