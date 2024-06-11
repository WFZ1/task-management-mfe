import { PropsWithChildren, createContext, useContext, useState, useEffect } from 'react';
import { authInit } from '.';
import { Session } from '@supabase/supabase-js';

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
        let unsubscribe;

        authInit().then(({ getAuthSession, authUnsubscribe }) => {
            setSession(getAuthSession());
            unsubscribe = authUnsubscribe;
        });

        return unsubscribe;
    }, []);

    const authValue = { session };

    return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
