import { signUp } from '@/services/auth';
import { AuthData } from '@/services/auth/types';
import { useNavigation } from '@/services/navigation/context';

export const useHandleSubmit = () => {
    const { navigate } = useNavigation();

    const handleSubmit = async (data: AuthData) => {
        try {
            await signUp(data);
            // TODO: use code with correct router
            // navigate({
            //     to: '/sign-up',
            //     search: { message: 'Check email to continue sign in process' },
            // });
            navigate({ to: '/sign-up?message=Check email to continue sign in process' });
        } catch (error) {
            console.error('Error user sign in: ', error);
            // TODO: use code with correct router
            // navigate({
            //     to: '/sign-up',
            //     search: { message: 'Could not authenticate user' },
            // });
            navigate({ to: '/sign-up?message=Could not authenticate user' });
        }
    };

    return handleSubmit;
};
