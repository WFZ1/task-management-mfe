import TaskAuth from 'taskAuth/TaskAuth';
import TaskEditor from 'taskEditor/TaskEditor';
import TaskList from 'taskList/TaskList';
import ErrorPage from './routes/error.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PrivateRoute } from './routes/privateRoute.tsx';
import { AuthProvider } from './services/auth/context.tsx';
import HomePage from './routes/home.tsx';
import { AuthConfirmPage } from './routes/auth-confirm.tsx';
import { Header } from './components/header/header.tsx';

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
        element: <TaskAuth />,
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
                element: (
                    <>
                        <Header />
                        <TaskEditor />
                    </>
                ),
            },
            {
                path: '/tasks',
                element: (
                    <>
                        <Header />
                        <TaskList />
                    </>
                ),
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
