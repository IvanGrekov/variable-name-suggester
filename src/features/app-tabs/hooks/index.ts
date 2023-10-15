import { useState } from 'react';

import { usePathname } from 'next/navigation';

import { TAB_PARAM_NAME } from 'constants/tabs.constants';
import { IAppTabsContextValue } from 'contexts/AppTabsContext';
import { useGetStringifiedSearchParams } from 'hooks/searchParams.hooks';
import { useCurrentTab } from 'hooks/tabs.hooks';

export const useGetAppTabsContextValue = (): IAppTabsContextValue => {
    const pathname = usePathname();
    const getStringifiedSearchParams = useGetStringifiedSearchParams();

    const currentSearchParamTab = useCurrentTab();
    const [currentTab, set] = useState(currentSearchParamTab);

    const setCurrentTab = (tab: string): void => {
        const newSearchParams = getStringifiedSearchParams(TAB_PARAM_NAME, tab);
        const newLocation = `${pathname}${newSearchParams}`;

        window.history.pushState(null, '', newLocation);
        set(tab);
    };

    return {
        currentTab,
        setCurrentTab,
    };
};
