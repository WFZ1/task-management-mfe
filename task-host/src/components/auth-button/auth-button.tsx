import { Link } from 'react-router-dom';
import { useHandleSignOut, useHandleUser } from './auth-button-controller';
import { Button } from '../ui/button';

export const AuthButton = () => {
    const user = useHandleUser();
    const handleSignOut = useHandleSignOut();

    if (!user) {
        return (
            <Link to="/login" className="py-2 px-3 flex rounded-md no-underline bg-secondary">
                Log in
            </Link>
        );
    }

    return (
        <div className="flex items-center gap-4">
            Hey, {user?.email}!
            <Button onClick={handleSignOut} className="py-2 px-4 rounded-md no-underline bg-secondary">
                Log out
            </Button>
        </div>
    );
};
