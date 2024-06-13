import { UserAuthFormField } from '@/components/user-auth/user-auth-form-field';
import { FormField } from '../ui/form';
import { Control } from 'react-hook-form';
import { FormFields } from './types';

interface UserAuthFormFieldsProps {
    control: Control<FormFields>;
    isLoading: boolean;
}

export const UserAuthFormFields = ({ control, isLoading }: UserAuthFormFieldsProps) => {
    return (
        <>
            <div className="grid gap-1">
                <FormField
                    control={control}
                    name={'email'}
                    render={({ field }) => (
                        <UserAuthFormField
                            label="Email"
                            id="email"
                            placeholder="name@example.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            required
                            disabled={isLoading}
                            {...field}
                        />
                    )}
                />
            </div>
            <div className="grid gap-1">
                <FormField
                    control={control}
                    name={'password'}
                    render={({ field }) => (
                        <UserAuthFormField
                            label="Password"
                            id="password"
                            placeholder="******"
                            type="password"
                            required
                            disabled={isLoading}
                            {...field}
                        />
                    )}
                />
            </div>
        </>
    );
};
