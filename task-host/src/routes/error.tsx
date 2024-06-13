import { useRouteError } from 'react-router-dom';

interface Error {
    statusText: string;
    message: string;
}

export default function ErrorPage() {
    const error = useRouteError() as Error;

    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            {Boolean(error.statusText || error.message) && (
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            )}
        </div>
    );
}
