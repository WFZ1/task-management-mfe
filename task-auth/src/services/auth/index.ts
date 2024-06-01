import { Session, SignInWithPasswordCredentials, Subscription } from '@supabase/supabase-js';
import { db } from '../db';
import { AuthConfirmQueryParams, AuthData } from './types';

let authSession: Session | null;
let authSubscription: Subscription;

export const authInit = () => {
    db.auth.getSession().then(({ data }) => {
        authSession = data.session;
    });

    const authEventOpts = db.auth.onAuthStateChange((_event, session) => {
        authSession = session;
    });

    authSubscription = authEventOpts.data.subscription;
};

export const getAuthSession = () => authSession;

export const authUnsubscribe = () => authSubscription.unsubscribe();

export const logIn = async (data: AuthData) => {
    const { error } = await db.auth.signInWithPassword(data as unknown as SignInWithPasswordCredentials);

    if (error) {
        throw error;
    }
};

export const signUp = async (data: AuthData) => {
    const { error } = await db.auth.signUp({
        ...data,
        options: {
            emailRedirectTo: `${origin}/auth/confirm`,
        },
    });

    if (error) {
        throw error;
    }
};

export const signOut = async () => {
    const { error } = await db.auth.signOut();

    if (error) {
        throw error;
    }

    // redirect('/log-in');
};

export const authConfirm = async ({ token_hash, type }: AuthConfirmQueryParams) => {
    if (token_hash && type) {
        const { error } = await db.auth.verifyOtp({
            type,
            token_hash,
        });

        if (!error) {
            location.replace('/');
        }
    }

    location.replace('/error');
};
