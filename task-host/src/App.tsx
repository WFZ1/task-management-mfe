import ErrorPage from './routes/error.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PrivateRoute } from './routes/privateRoute.tsx';
import { AuthProvider } from './services/auth/context.tsx';
import HomePage from './routes/home.tsx';
import { AuthConfirmPage } from './routes/auth-confirm.tsx';
import LoginPage from './routes/login.tsx';
import EditorPage from './routes/editor.tsx';
import TasksPage from './routes/tasks.tsx';

const router = createBrowserRouter([
    {
        errorElement: <ErrorPage />,
    },
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/auth/confirm',
        element: <AuthConfirmPage />,
    },
    {
        element: <PrivateRoute />,
        children: [
            {
                path: '/editor',
                element: <EditorPage />,
            },
            {
                path: '/tasks',
                element: <TasksPage />,
            },
        ],
    },
]);

function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}

export default App;
