'use client';

import { createContext, PropsWithChildren, useContext } from 'react';

export interface ITabsContextValue {
    indicatorElement: HTMLDivElement | null;
    initialIndicatorLeftPosition: number;
}

type TTabsContextValue = null | ITabsContextValue;

const TabsContext = createContext<TTabsContextValue>(null);

interface ITabContextProviderProps extends PropsWithChildren {
    value: ITabsContextValue;
}

export default function TabsContextProvider({
    children,
    value,
}: ITabContextProviderProps): JSX.Element {
    return (
        <TabsContext.Provider value={value}>{children}</TabsContext.Provider>
    );
}

export const useTabsContext = (): TTabsContextValue => {
    return useContext(TabsContext);
};
