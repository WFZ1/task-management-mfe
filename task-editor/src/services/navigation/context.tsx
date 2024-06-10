import { PropsWithChildren, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

interface NavigateParams<T> {
    to: T;
    isHost?: boolean;
}

interface NavigationContextDefaultValue {
    navigate(params: NavigateParams<unknown>): void;
}

const NavigationContext = createContext<NavigationContextDefaultValue>({
    navigate: () => undefined,
});

interface NavigationProviderProps extends PropsWithChildren {
    onNavigate?(path: string): void;
}

export const NavigationProvider = ({ onNavigate, children }: NavigationProviderProps) => {
    const navigate = useNavigate();

    const handleNavigate = <T extends string | Record<string, never>>({ to, isHost = false }: NavigateParams<T>) =>
        isHost ? onNavigate?.(to as string) : navigate(to);

    const navigationValue = { navigate: handleNavigate };

    return <NavigationContext.Provider value={navigationValue}>{children}</NavigationContext.Provider>;
};

export const useNavigation = () => useContext(NavigationContext);
