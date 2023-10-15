'use client';

import { useRef } from 'react';

import Button from 'components/button/Button';
import styles from 'components/tabs/Tab.module.scss';
import {
    useTabIndicatorConnection,
    useTabClickListener,
} from 'components/tabs/hooks/tab.hooks';
import { ITabProps } from 'components/tabs/types/tab';

export default function Tab({
    value,
    label,
    customCurrentTab,
    customClickHandler,
}: ITabProps): JSX.Element | null {
    const tabElementRef = useRef<HTMLDivElement | null>(null);

    useTabIndicatorConnection({
        tabElementRef,
        value,
        customCurrentTab,
    });

    const defaultClickHandler = useTabClickListener(value);
    const onClick = customClickHandler || defaultClickHandler;

    return (
        <div ref={tabElementRef} className={styles.tab}>
            <Button
                text={label}
                variant="ghost"
                textVariant="body2"
                className={styles['tab-button']}
                onClick={onClick}
            />
        </div>
    );
}
