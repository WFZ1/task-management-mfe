import { authConfirm } from '@/services/auth';
import { EmailOtpType } from '@supabase/supabase-js';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthConfirmPage = () => {
    const navigate = useNavigate();
    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;

            const searchParams = new URLSearchParams(location.search);
            const token_hash = searchParams.get('token_hash');
            const type = searchParams.get('type') as EmailOtpType;

            if (!token_hash || !type) {
                console.error('Missed required params');
                navigate('/error');
                return;
            }

            authConfirm({ token_hash, type })
                .then(() => navigate('/'))
                .catch((error) => {
                    console.error('Error confirm user login: ', error);
                    navigate('/error');
                });
        }
    }, [navigate]);

    return null;
};
