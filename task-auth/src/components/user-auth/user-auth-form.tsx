import { PropsWithChildren } from 'react';
import { Form } from '@/components/ui/form';
import { FieldValues, useFormContext } from 'react-hook-form';

interface UserAuthFormProps extends PropsWithChildren {
    onSubmit(values: FieldValues): void;
}

export function UserAuthForm({ children, onSubmit }: UserAuthFormProps) {
    const form = useFormContext();

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
        </Form>
    );
}
