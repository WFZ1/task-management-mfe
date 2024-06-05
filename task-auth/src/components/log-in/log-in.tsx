import UserAuth from '@/components/user-auth/user-auth';
import { UserAuthPersonQuote } from '@/components/user-auth/user-auth-person-quote';
import { UserAuthLink } from '@/components/user-auth/user-auth-link';
import { useHandleSubmit } from './log-in-controller';

interface LogInProps {
    message?: string;
}

export const LogIn = ({ message }: LogInProps) => {
    const handleSubmit = useHandleSubmit();

    return (
        // TODO: investigate why 'hidden' class works differently from host app
        <div className="container relative h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <UserAuthLink href="/sign-up" className="absolute right-4 top-4 md:right-8 md:top-8">
                Sign Up
            </UserAuthLink>
            {/* TODO: investigate why 'hidden' class works differently from host app */}
            <div className="relative h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                <UserAuthPersonQuote
                    corporation="Acme Inc"
                    quote="This app has saved me countless hours of work and helped me deliver stunning results
                            to my clients faster than ever before."
                    author="Unknown Person"
                />
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <UserAuth
                        title="Log in to an account"
                        description="Please enter your email and password below"
                        message={message}
                        buttonText="Log in"
                        onSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
};
