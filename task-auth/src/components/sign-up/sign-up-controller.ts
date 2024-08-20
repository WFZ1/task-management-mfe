import { signUp } from '@/services/auth';
import { AuthData } from '@/services/auth/types';
import { useNavigation } from '@/services/navigation/context';

export const useHandleSubmit = () => {
    const { navigate } = useNavigation();

    const handleSubmit = async (data: AuthData) => {
        try {
            await signUp(data);
            navigate({ to: '/sign-up?message=Check email to continue sign in process' });
        } catch (error) {
            console.error('Error user sign in: ', error);
            navigate({ to: '/sign-up?message=Could not authenticate user' });
        }
    };

    return handleSubmit;
};
