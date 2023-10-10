import { useRef } from 'react';

import Button from 'components/button/Button';
import styles from 'components/tabs/Tab.module.scss';
import {
    useTabIndicatorConnection,
    useTabListener,
} from 'components/tabs/hooks/tab.hooks';
import { ITabProps } from 'components/tabs/types/tab';
import { useTabsContext } from 'contexts/TabsContext';

export default function Tab({ path, label }: ITabProps): JSX.Element | null {
    const tabsContext = useTabsContext();
    const tabElementRef = useRef<HTMLDivElement | null>(null);

    useTabIndicatorConnection({
        tabElementRef,
        path,
        ...(tabsContext || {}),
    });

    useTabListener({ tabElementRef, path });

    return (
        <div ref={tabElementRef} className={styles.tab}>
            <Button
                text={label}
                variant="ghost"
                textVariant="body2"
                className={styles['tab-button']}
            />
        </div>
    );
}
