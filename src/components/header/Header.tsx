'use client';

import { PropsWithChildren } from 'react';

import cx from 'classnames';

import styles from 'components/header/Header.module.scss';
import PageLoadingIndicator from 'components/page-loading-indicator/PageLoadingIndicator';
import ThemeSwitcher from 'components/theme-switcher/ThemeSwitcher';
import { useIsHeaderFixed } from 'hooks/header.hooks';

interface IHeaderProps extends PropsWithChildren {
    className?: string;
    isSidebarLayout?: boolean;
}

export default function Header({
    className,
    isSidebarLayout,
    children,
}: IHeaderProps): JSX.Element {
    const { isFixed } = useIsHeaderFixed();

    return (
        <header
            className={cx(
                styles.header,
                {
                    [styles['header--fixed']]: isFixed,
                    [styles['sidebar-layout']]: isSidebarLayout,
                },
                className,
            )}
        >
            <PageLoadingIndicator className={styles.loading} />

            <div className={styles['content-wrapper']}>
                <div className={styles.content}>
                    <ThemeSwitcher tooltipPosition="left" />

                    {children}
                </div>
            </div>
        </header>
    );
}
