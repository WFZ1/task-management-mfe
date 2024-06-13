import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import CreateTaskPage from '@/routes/create-task.tsx';
import UpdateTaskPage from '@/routes/edit-task.tsx';
import { NavigationProvider } from './services/navigation/context';
import { FunctionComponent } from 'react';

interface AppProps {
    onNavigate?(path: string): void;
}

const withNavigationProvider = (Component: FunctionComponent, onNavigate: AppProps['onNavigate']) => {
    return (
        <NavigationProvider onNavigate={onNavigate}>
            <Component />
        </NavigationProvider>
    );
};

const createRoutes = (onNavigate: AppProps['onNavigate']) => [
    {
        path: '/create-task',
        element: withNavigationProvider(CreateTaskPage, onNavigate),
    },
    {
        path: '/edit-task',
        element: withNavigationProvider(UpdateTaskPage, onNavigate),
    },
];
const createRouter = (onNavigate: AppProps['onNavigate']) =>
    createMemoryRouter(createRoutes(onNavigate), { initialEntries: ['/create-task', '/edit-task'], initialIndex: 0 });

function App({ onNavigate }: AppProps) {
    const router = createRouter(onNavigate);

    return <RouterProvider router={router} />;
}

export default App;
