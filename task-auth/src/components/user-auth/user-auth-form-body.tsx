import { SubmitButton } from '@/components/ui/submit-button';
import { UserAuthFormFields } from './user-auth-form-fields';
import { useFormContext } from 'react-hook-form';
import { FormFields } from './types';

interface UserAuthFormBodyProps {
    buttonText: string;
}

export const UserAuthFormBody = ({ buttonText }: UserAuthFormBodyProps) => {
    const { formState, control } = useFormContext<FormFields>();

    return (
        <>
            <UserAuthFormFields isLoading={formState.isSubmitting} control={control} />
            <SubmitButton isLoading={formState.isSubmitting}>{buttonText}</SubmitButton>
        </>
    );
};
