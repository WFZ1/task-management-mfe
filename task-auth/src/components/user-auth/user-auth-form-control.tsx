import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { userAuthFormSchema } from './user-auth-form-schema';
import { PropsWithChildren } from 'react';
import { FormFields } from './types';

interface UserAuthFormControlProps extends PropsWithChildren {}

export const UserAuthFormControl = ({ children }: UserAuthFormControlProps) => {
    const form = useForm<FormFields>({
        resolver: zodResolver(userAuthFormSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    return <FormProvider {...form}>{children}</FormProvider>;
};
