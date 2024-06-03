import { Session, Subscription } from '@supabase/supabase-js';
import { db } from '../db';
import { AuthConfirmQueryParams } from './types';

let authSession: Session | null;
let authSubscription: Subscription;

const getAuthSession = () => authSession;
const authUnsubscribe = () => authSubscription.unsubscribe();

export const authInit = async () => {
    const { data } = await db.auth.getSession();
    authSession = data.session;

    const authEventOpts = db.auth.onAuthStateChange((_event, session) => {
        authSession = session;
    });

    authSubscription = authEventOpts.data.subscription;

    return { getAuthSession, authUnsubscribe };
};

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
