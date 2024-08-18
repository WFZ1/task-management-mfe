import { signOut } from '@/services/auth';
import { getUser } from '@/services/user';
import { User } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useHandleSignOut = () => {
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            await signOut();
            navigate('/login');
        } catch (error) {
            console.error('Error user sign out: ', error);
        }
    };

    return handleSubmit;
};

export const useHandleUser = () => {
    const [user, setUser] = useState<User | null>();

    useEffect(() => {
        getUser()
            .then(setUser)
            .catch((error) => console.error('Error getting user: ', error));
    }, []);

    return user;
};
