import { createMemoryRouter, RouterProvider, useSearchParams } from 'react-router-dom';
import { LogIn } from '@/components/log-in/log-in';
import { SignUp } from '@/components/sign-up/sign-up';
import { NavigationProvider } from './services/navigation/context';
import { FunctionComponent } from 'react';

function LogInPage() {
    const [searchParams] = useSearchParams();

    return <LogIn message={searchParams.get('message') ?? undefined} />;
}

function SignUpPage() {
    const [searchParams] = useSearchParams();

    return <SignUp message={searchParams.get('message') ?? undefined} />;
}

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
