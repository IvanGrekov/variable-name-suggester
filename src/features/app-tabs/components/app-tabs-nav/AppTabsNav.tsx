import Tab from 'components/tabs/Tab';
import Tabs from 'components/tabs/Tabs';
import { useAppTabsContext } from 'contexts/AppTabsContext';
import { EAppTabs } from 'features/app-tabs/types/appTabs.types';

export default function AppTabsNav(): JSX.Element {
    const { currentTab, setCurrentTab } = useAppTabsContext();

    return (
        <Tabs isDelayed={true}>
            <Tab
                value={EAppTabs.SUGGESTER}
                label="Suggester"
                customCurrentTab={currentTab}
                customClickHandler={(): void => {
                    setCurrentTab(EAppTabs.SUGGESTER);
                }}
            />

            <Tab
                value={EAppTabs.HELP}
                label="Help"
                customCurrentTab={currentTab}
                customClickHandler={(): void => {
                    setCurrentTab(EAppTabs.HELP);
                }}
            />
        </Tabs>
    );
}
