import { useCurrentTab } from 'hooks/tabs.hooks';
import { EAppTabs } from 'types/appTabs.types';

export const useIsHelpTab = (): boolean => {
    const currentTab = useCurrentTab();

    return currentTab === EAppTabs.HELP;
};
