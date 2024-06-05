import { createMemoryRouter, RouterProvider, useSearchParams } from 'react-router-dom';
import { LogIn } from '@/components/log-in/log-in';
import { SignUp } from '@/components/sign-up/sign-up';

function LogInPage() {
    const [searchParams] = useSearchParams();

    return <LogIn message={searchParams.get('message') ?? undefined} />;
}

function SignUpPage() {
    const [searchParams] = useSearchParams();

    return <SignUp message={searchParams.get('message') ?? undefined} />;
}

const routes = [
    {
        path: '/log-in',
        element: <LogInPage />,
    },
    {
        path: '/sign-up',
        element: <SignUpPage />,
    },
];

const router = createMemoryRouter(routes, { initialEntries: ['/log-in', '/sign-up'], initialIndex: 0 });

function App() {
    return <RouterProvider router={router} />;
}

export default App;
