import { logIn } from '@/services/auth';
import { AuthData } from '@/services/auth/types';
import { useNavigation } from '@/services/navigation/context';

export const useHandleSubmit = () => {
    const { navigate } = useNavigation();

    const handleSubmit = async (data: AuthData) => {
        try {
            await logIn(data);
            navigate({ to: '/', isHost: true });
        } catch (error) {
            console.error('Error user sign in: ', error);
            navigate({ to: '/log-in?message=Could not authenticate user' });
        }
    };

    return handleSubmit;
};
