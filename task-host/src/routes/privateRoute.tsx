import { useAuth } from '@/services/auth/context';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
    const { isAuth } = useAuth();

    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};
