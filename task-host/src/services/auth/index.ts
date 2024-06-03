import { Session, Subscription } from '@supabase/supabase-js';
import { db } from '../db';

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
