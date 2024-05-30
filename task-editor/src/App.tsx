import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './routes/error.tsx';
import CreateTaskPage from '@/routes/create-task.tsx';
import UpdateTaskPage from '@/routes/edit-task.tsx';

const router = createBrowserRouter([
    {
        errorElement: <ErrorPage />,
    },
    {
        path: '/create-task',
        element: <CreateTaskPage />,
    },
    {
        path: '/edit-task',
        element: <UpdateTaskPage />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
