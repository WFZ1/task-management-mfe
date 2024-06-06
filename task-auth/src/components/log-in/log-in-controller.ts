import { logIn } from '@/services/auth';
import { AuthData } from '@/services/auth/types';
// TODO: use code with correct router
// import { useNavigate } from '@tanstack/react-router';
import { useNavigate } from 'react-router-dom';

export const useHandleSubmit = () => {
    const navigate = useNavigate();

    const handleSubmit = async (data: AuthData) => {
        try {
            await logIn(data);
            // TODO: use code with correct router (use router from host app)
            // navigate({ to: '/' });
            navigate('/');
        } catch (error) {
            console.error('Error user sign in: ', error);
            // TODO: use code with correct router
            // navigate({
            //     to: '/log-in',
            //     search: { message: 'Could not authenticate user' },
            // });
            navigate('/log-in?message=Could not authenticate user');
        }
    };

    return handleSubmit;
};
