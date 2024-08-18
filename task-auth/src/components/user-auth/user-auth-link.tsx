import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';
// TODO: use code with correct router
// import { Link } from '@tanstack/react-router';
import { Link } from 'react-router-dom';

interface UserAuthLinkProps extends PropsWithChildren {
    href: string;
    className?: string;
}

export const UserAuthLink = ({ href, className, children }: UserAuthLinkProps) => {
    return (
        <Link to={href} className={cn(buttonVariants({ variant: 'ghost' }), className)}>
            {children}
        </Link>
    );
};
