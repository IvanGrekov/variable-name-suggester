'use client';

import styles from 'components/app-tabs/AppTabs.module.scss';
import HelpPage from 'components/help-page/HelpPage';
import Paper from 'components/paper/Paper';
import SuggesterPage from 'components/suggester-page/SuggesterPage';
import { useIsHelpTab } from 'hooks/appTabs.hooks';

export default function AppTabs(): JSX.Element {
    const isHelpTab = useIsHelpTab();

    return (
        <Paper className={styles['tabs-paper']}>
            {isHelpTab ? <HelpPage /> : <SuggesterPage />}
        </Paper>
    );
}
