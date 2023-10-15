'use client';

import {
    createContext,
    useState,
    useMemo,
    useContext,
    PropsWithChildren,
    Dispatch,
    SetStateAction,
} from 'react';

interface IConfirmNavigationContextValue {
    shouldConfirmNavigation: boolean;
    setShouldConfirmNavigation: Dispatch<SetStateAction<boolean>>;
}

export const ConfirmNavigationContext =
    createContext<IConfirmNavigationContextValue | null>(null);

export default function ConfirmNavigationProvider({
    children,
}: PropsWithChildren): JSX.Element {
    const [shouldConfirmNavigation, setShouldConfirmNavigation] =
        useState(false);

    const value = useMemo(
        () => ({
            shouldConfirmNavigation,
            setShouldConfirmNavigation,
        }),
        [shouldConfirmNavigation],
    );

    return (
        <ConfirmNavigationContext.Provider value={value}>
            {children}
        </ConfirmNavigationContext.Provider>
    );
}

export const useConfirmNavigationContext =
    (): IConfirmNavigationContextValue => {
        const context = useContext(ConfirmNavigationContext);

        if (!context) {
            throw new Error(
                'useConfirmNavigationContext must be used within a ConfirmNavigationProvider',
            );
        }

        return context;
    };
