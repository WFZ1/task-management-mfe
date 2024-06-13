import { db } from '../db';
import { AuthConfirmQueryParams } from './types';

export const signOut = async () => {
    const { error } = await db.auth.signOut();

    if (error) {
        throw error;
    }
};

export const authConfirm = async ({ token_hash, type }: AuthConfirmQueryParams) => {
    const { error } = await db.auth.verifyOtp({
        type,
        token_hash,
    });

    if (error) {
        throw error;
    }
};
