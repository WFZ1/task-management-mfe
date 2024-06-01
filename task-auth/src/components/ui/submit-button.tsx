import { ReactNode, type ComponentProps } from 'react';
import { Button } from './button';
import { Spinner } from './spinner';

type SubmitButtonProps = ComponentProps<'button'> & {
    isLoading: boolean;
    spin?: ReactNode;
};

export const SubmitButton = ({ children, spin = <Spinner />, isLoading, ...props }: SubmitButtonProps) => {
    return (
        <Button {...props} type="submit" aria-disabled={isLoading}>
            {isLoading && spin}
            {children}
        </Button>
    );
};
