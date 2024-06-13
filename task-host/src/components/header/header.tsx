import { Link } from 'react-router-dom';
import { AuthButton } from '../auth-button/auth-button';

export const Header = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <AuthButton />
        </>
    );
};
