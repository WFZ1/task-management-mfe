import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateTaskPage from '@/routes/create-task.tsx';
import UpdateTaskPage from '@/routes/edit-task.tsx';

const router = createBrowserRouter([
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
