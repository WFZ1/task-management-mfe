import { SignInWithPasswordCredentials } from '@supabase/supabase-js';
import { db } from '../db';
import { AuthConfirmQueryParams, AuthData } from './types';

export const logIn = async (data: AuthData) => {
    const { error } = await db.auth.signInWithPassword(data as unknown as SignInWithPasswordCredentials);

    if (error) {
        throw error;
    }
};

export const signUp = async (data: AuthData) => {
    const { error } = await db.auth.signUp(data);

    if (error) {
        throw error;
    }
};

export const authConfirm = async ({ token_hash, type }: AuthConfirmQueryParams) => {
    if (token_hash && type) {
        const { error } = await db.auth.verifyOtp({
            type,
            token_hash,
        });

        if (!error) {
            location.replace('/');
            return;
        }
    }

    location.replace('/error');
};
