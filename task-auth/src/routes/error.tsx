import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/error' as never)({
    component: ErrorPage,
});

function ErrorPage() {
    return <p>Sorry, something went wrong</p>;
}
