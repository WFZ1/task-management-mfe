import { logIn } from '@/services/auth';
import { AuthData } from '@/services/auth/types';
// TODO: use code with correct router
// import { useNavigate } from '@tanstack/react-router';

export const useHandleSubmit = () => {
    // TODO: use code with correct router
    // const navigate = useNavigate();

    const handleSubmit = async (data: AuthData) => {
        try {
            await logIn(data);
            // TODO: use code with correct router
            // TODO: redirect to '/' (check that code on line below works)
            // navigate({ to: '/' });
        } catch (error) {
            console.error('Error user sign in: ', error);
            // TODO: use code with correct router
            // navigate({
            //     to: '/log-in',
            //     search: { message: 'Could not authenticate user' },
            // });
        }
    };

    return handleSubmit;
};
