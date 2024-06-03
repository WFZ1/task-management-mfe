import { User } from '@supabase/supabase-js';
import { db } from '../db';

export const getUser = async (): Promise<User | null> => {
    const { data, error } = await db.auth.getUser();

    if (error) {
        throw error;
    }

    return data.user;
};
