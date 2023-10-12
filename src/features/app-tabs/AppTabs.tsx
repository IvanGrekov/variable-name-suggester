'use client';

import Paper from 'components/paper/Paper';
import styles from 'features/app-tabs/AppTabs.module.scss';
import { useIsHelpTab } from 'features/app-tabs/hooks';
import HelpPage from 'features/help-page/HelpPage';
import SuggesterPage from 'features/suggester-page/SuggesterPage';

export default function AppTabs(): JSX.Element {
    const isHelpTab = useIsHelpTab();

    return (
        <Paper className={styles['tabs-paper']}>
            {isHelpTab ? <HelpPage /> : <SuggesterPage />}
        </Paper>
    );
}
