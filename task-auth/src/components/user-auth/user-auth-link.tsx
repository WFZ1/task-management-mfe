// import { buttonVariants } from '@/components/ui/button';
// import { cn } from '@/lib/utils';

// TODO: use code with correct router
// import { Link } from '@tanstack/react-router';

import { PropsWithChildren } from 'react';

interface UserAuthLinkProps extends PropsWithChildren {
    href: string;
    className?: string;
}

export const UserAuthLink = ({ /*href, className,*/ children }: UserAuthLinkProps) => {
    return <>{children}</>;
    // TODO: use code with correct router
    // <Link to={href} className={cn(buttonVariants({ variant: 'ghost' }), className)}>
    //     {children}
    // </Link>
};
