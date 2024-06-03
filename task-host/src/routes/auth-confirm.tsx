import { authConfirm } from '@/services/auth';
import { AuthConfirmQueryParams } from '@/services/auth/types';
import { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const AuthConfirmPage = () => {
    const navigate = useNavigate();
    const isMounted = useRef(false);
    const [searchParams] = useSearchParams() as unknown as [AuthConfirmQueryParams];

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            const { token_hash, type } = searchParams;

            if (!token_hash || !type) {
                console.error('Missed required params');
                navigate('/error');
            }

            authConfirm(searchParams)
                .then(() => navigate('/'))
                .catch(() => navigate('/error'));
        }
    }, [searchParams, navigate]);

    return null;
};
