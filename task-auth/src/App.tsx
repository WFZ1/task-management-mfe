// Due to errors tanstack-router when running task-auth mfe from host mfe.
// Temporary solution is to use react-router.

// import { RouterProvider, createRouter, createMemoryHistory } from '@tanstack/react-router';
// import { routeTree } from './routeTree.gen';

// const memoryHistory = createMemoryHistory({
//     initialEntries: ['/log-in', '/sign-up'],
// });

// const router = createRouter({ routeTree, history: memoryHistory });

// declare module '@tanstack/react-router' {
//     interface Register {
//         router: typeof router;
//     }
// }

// function App() {
//     return <RouterProvider router={router} />;
// }

// export default App;

import AppReactRouter from './AppReactRouter.tsx';

function App() {
    return <AppReactRouter />;
}

export default App;
