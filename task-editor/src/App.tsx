import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import CreateTaskPage from '@/routes/create-task.tsx';
import UpdateTaskPage from '@/routes/edit-task.tsx';

const routes = [
    {
        path: '/create-task',
        element: <CreateTaskPage />,
    },
    {
        path: '/edit-task',
        element: <UpdateTaskPage />,
    },
];
const router = createMemoryRouter(routes, { initialEntries: ['/create-task', '/edit-task'], initialIndex: 0 });

function App() {
    return <RouterProvider router={router} />;
}

export default App;
