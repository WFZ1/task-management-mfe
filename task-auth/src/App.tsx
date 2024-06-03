import { RouterProvider, createRouter, createMemoryHistory } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

const memoryHistory = createMemoryHistory({
    initialEntries: ['/log-in', '/sign-up'],
});

const router = createRouter({ routeTree, history: memoryHistory });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

function App() {
    return <RouterProvider router={router} />;
}

export default App;
