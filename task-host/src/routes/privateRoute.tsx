import { useAuth } from '@/services/auth/context';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
    const { session } = useAuth();

    if (session === undefined) {
        return 'Loading ...';
    }

    return session ? <Outlet /> : <Navigate to="/login" />;
};
