'use client';

import cx from 'classnames';

import Paper from 'components/paper/Paper';
import Spacing from 'components/spacing/Spacing';
import AppTabsContextProvider from 'contexts/AppTabsContext';
import styles from 'features/app-tabs/components/app-tabs/AppTabs.module.scss';
import { useGetAppTabsContextValue } from 'features/app-tabs/components/app-tabs/hooks';
import AppTabsNav from 'features/app-tabs/components/app-tabs-nav/AppTabsNav';
import { EAppTabs } from 'features/app-tabs/types/appTabs.types';
import HelpPage from 'features/help-page/components/help-page/HelpPage';
import SuggesterPage from 'features/suggester-page/components/suggester-page/SuggesterPage';

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
                <div
                    className={cx(styles['tabs-content'], {
                        [styles['tabs-content--shifted']]: isHelpTab,
                    })}
                >
                    <SuggesterPage />

                    <HelpPage />
                </div>
            </Paper>
        </AppTabsContextProvider>
    );
}
