import { signUp } from '@/services/auth';
import { AuthData } from '@/services/auth/types';
// TODO: use code with correct router
// import { useNavigate } from '@tanstack/react-router';
import { useNavigate } from 'react-router-dom';

export const useHandleSubmit = () => {
    const navigate = useNavigate();

    const handleSubmit = async (data: AuthData) => {
        try {
            await signUp(data);
            // TODO: use code with correct router
            // navigate({
            //     to: '/sign-up',
            //     search: { message: 'Check email to continue sign in process' },
            // });
            navigate('/sign-up?message=Check email to continue sign in process');
        } catch (error) {
            console.error('Error user sign in: ', error);
            // TODO: use code with correct router
            // navigate({
            //     to: '/sign-up',
            //     search: { message: 'Could not authenticate user' },
            // });
            navigate('/sign-up?message=Could not authenticate user');
        }
    };

    return handleSubmit;
};
