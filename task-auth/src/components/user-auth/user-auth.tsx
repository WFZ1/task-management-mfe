import { UserAuthFormBody } from '@/components/user-auth/user-auth-form-body';
import { UserAuthForm } from './user-auth-form';
import { UserAuthAlert } from './user-auth-alert';
import { UserAuthHeader } from './user-auth-header';
import { UserAuthFormControl } from './user-auth-form-control';
import { FormFields } from './types';

interface UserAuthProps {
    title: string;
    description: string;
    message?: string;
    buttonText: string;
    onSubmit(values: FormFields): void;
}

export default function UserAuth({ title, description, message, buttonText, onSubmit }: UserAuthProps) {
    return (
        <>
            <div className="flex flex-col space-y-2 text-center">
                <UserAuthHeader title={title} description={description} />
            </div>
            <div className={'grid gap-6'}>
                <UserAuthFormControl>
                    <UserAuthForm onSubmit={onSubmit}>
                        <div className="grid gap-2">
                            <UserAuthFormBody buttonText={buttonText} />
                        </div>
                    </UserAuthForm>
                </UserAuthFormControl>
            </div>
            <UserAuthAlert message={message} />
        </>
    );
}
