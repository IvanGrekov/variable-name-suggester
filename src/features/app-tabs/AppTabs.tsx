'use client';

import Paper from 'components/paper/Paper';
import Spacing from 'components/spacing/Spacing';
import AppTabsContextProvider from 'contexts/AppTabsContext';
import styles from 'features/app-tabs/AppTabs.module.scss';
import AppTabsNav from 'features/app-tabs/AppTabsNav';
import { useGetAppTabsContextValue } from 'features/app-tabs/hooks';
import { EAppTabs } from 'features/app-tabs/types';
import HelpPage from 'features/help-page/HelpPage';
import SuggesterPage from 'features/suggester-page/SuggesterPage';

export default function AppTabs(): JSX.Element {
    const { currentTab, setCurrentTab } = useGetAppTabsContextValue();

    const isHelpTab = currentTab === EAppTabs.HELP;

    return (
        <AppTabsContextProvider
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
        >
            <AppTabsNav />

            <Spacing xs={16} />

            <Paper className={styles['tabs-paper']}>
                {isHelpTab ? <HelpPage /> : <SuggesterPage />}
            </Paper>
        </AppTabsContextProvider>
    );
}
