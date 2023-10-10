import { useSearchParams } from 'next/navigation';

import { TAB_PARAM_NAME } from 'constants/tabs.constants';

export const useCurrentTab = (): string => {
    const searchParams = useSearchParams();
    const currentTab = searchParams.get(TAB_PARAM_NAME) || '';

    return currentTab;
};
