import { PropsWithChildren, createContext, useContext, useState, useEffect } from 'react';
import { Session } from '@supabase/supabase-js';
import { db } from '../db';

interface AuthContextDefaultValue {
    session?: Session | null;
}

const AuthContext = createContext<AuthContextDefaultValue>({
    session: undefined,
});

interface AuthProviderProps extends PropsWithChildren {}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [session, setSession] = useState<Session | null>();

    useEffect(() => {
        db.auth.getSession().then(({ data }) => {
            setSession(data.session);
        });

        const authEventOpts = db.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return authEventOpts.data.subscription.unsubscribe;
    }, []);

    const authValue = { session };

    return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
