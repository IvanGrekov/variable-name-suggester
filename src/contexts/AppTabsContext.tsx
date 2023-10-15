'use client';

import { createContext, PropsWithChildren, useMemo, useContext } from 'react';

export interface IAppTabsContextValue {
    currentTab: string;
    setCurrentTab: (tab: string) => void;
}

const AppTabsContext = createContext<IAppTabsContextValue | null>(null);

type IAppTabsContextProviderProps = PropsWithChildren & IAppTabsContextValue;

export default function AppTabsContextProvider({
    children,
    currentTab,
    setCurrentTab,
}: IAppTabsContextProviderProps): JSX.Element {
    const value = useMemo(
        () => ({
            currentTab,
            setCurrentTab,
        }),
        [currentTab, setCurrentTab],
    );

    return (
        <AppTabsContext.Provider value={value}>
            {children}
        </AppTabsContext.Provider>
    );
}

export const useAppTabsContext = (): IAppTabsContextValue => {
    const context = useContext(AppTabsContext);

    if (!context) {
        throw new Error(
            'useAppTabsContext must be used within a AppTabsContextProvider',
        );
    }

    return context;
};
