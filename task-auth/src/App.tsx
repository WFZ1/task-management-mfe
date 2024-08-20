import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { NavigationProvider } from './services/navigation/context';
import { FunctionComponent } from 'react';
import { LogInPage } from './routes/log-in';
import { SignUpPage } from './routes/sign-up';

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
        path: '/log-in',
        element: withNavigationProvider(LogInPage, onNavigate),
    },
    {
        path: '/sign-up',
        element: withNavigationProvider(SignUpPage, onNavigate),
    },
];

const createRouter = (onNavigate: AppProps['onNavigate']) =>
    createMemoryRouter(createRoutes(onNavigate), { initialEntries: ['/log-in', '/sign-up'], initialIndex: 0 });

function App({ onNavigate }: AppProps) {
    const router = createRouter(onNavigate);

    return <RouterProvider router={router} />;
}

export default App;
