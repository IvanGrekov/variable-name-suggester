import Tab from 'components/tabs/Tab';
import Tabs from 'components/tabs/Tabs';
import { EAppTabs } from 'types/appTabs.types';

export default function AppTabsNav(): JSX.Element {
    return (
        <Tabs isDelayed={true}>
            <Tab path={EAppTabs.SUGGESTER} label="Suggester" />
            <Tab path={EAppTabs.HELP} label="Help" />
        </Tabs>
    );
}
