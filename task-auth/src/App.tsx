// import { useEffect, useState } from 'react';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
// import { authInit, authUnsubscribe, getAuthSession } from './services/auth';
// import { Session } from '@supabase/supabase-js';

const router = createRouter({
    routeTree,
    context: {
        isAuth: undefined,
    },
});

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

function App() {
    // TODO: move auth logic to hook
    // const [session, setSession] = useState<Session | null>(null);

    // useEffect(() => {
    //     authInit();
    //     setSession(getAuthSession());

    //     return authUnsubscribe;
    // }, []);

    // const authContext = { isAuth: Boolean(session) };

    return <RouterProvider router={router} /*context={authContext}*/ />;
}

export default App;
