import { db } from '../db';
import { AuthData } from './types';

export const logIn = async (data: AuthData) => {
    const { error } = await db.auth.signInWithPassword(data);

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
