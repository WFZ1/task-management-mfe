import { Input } from '@/components/ui/input';
import { InputHTMLAttributes } from 'react';
import { FormMessage, FormItem, FormLabel, FormControl } from '../ui/form';

interface UserAuthFormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const UserAuthFormField = ({ label, ...inputProps }: UserAuthFormFieldProps) => {
    return (
        <FormItem>
            <FormLabel className="sr-only" htmlFor={inputProps.id}>
                {label}
            </FormLabel>
            <FormControl>
                <Input {...inputProps} />
            </FormControl>
            <FormMessage />
        </FormItem>
    );
};
