import { logIn } from '@/services/auth';
import { AuthData } from '@/services/auth/types';
import { useNavigate } from '@tanstack/react-router';

export const useHandleSubmit = () => {
    const navigate = useNavigate();

    const handleSubmit = async (data: AuthData) => {
        try {
            await logIn(data);
            navigate({ to: '/' });
        } catch (error) {
            console.error('Error user sign in: ', error);
            navigate({
                to: '/log-in',
                search: { message: 'Could not authenticate user' },
            });
        }
    };

    return handleSubmit;
};
