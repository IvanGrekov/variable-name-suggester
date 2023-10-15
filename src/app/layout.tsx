import 'styles/globals.scss';
import { ReactNode } from 'react';

import cx from 'classnames';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import styles from 'app/layout.module.scss';
import Providers from 'app/providers';
import Container from 'components/container/Container';
import ErrorBoundary from 'components/error-boundary/ErrorBoundary';
import Header from 'components/header/Header';
import NetworkStatusIndicator from 'components/network-status-indicator/NetworkStatusIndicator';
import Notifications from 'components/notifications/Notifications';
import ScrollTopButton from 'components/scroll-top-button/ScrollTopButton';
import Spacing from 'components/spacing/Spacing';
import Typography from 'components/typography/Typography';
import AppTabs from 'features/app-tabs/components/app-tabs/AppTabs';
import { EAppTitle } from 'types/appTitle.types';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: EAppTitle.MAIN,
    description: "Don't know how to call your variable? Let us help you!",
};

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}): JSX.Element {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ErrorBoundary>
                    <Providers>
                        <Header>
                            <Typography element="h1" variant="subtitle1">
                                {EAppTitle.MAIN}
                            </Typography>
                        </Header>

                        <Container
                            element="main"
                            className={cx(
                                styles.main,
                                styles['header-spacing'],
                            )}
                        >
                            <div className={styles['animated-content']}>
                                <Spacing xs={16} sm={24} md={32} />

                                <AppTabs />

                                <Spacing xs={16} sm={24} md={32} />

                                {children}
                            </div>
                        </Container>

                        <Notifications />

                        <NetworkStatusIndicator />

                        <ScrollTopButton />
                    </Providers>

                    <div id="modal-root" />
                    <div id="drawer-root" />
                    <div id="notifications-root" />
                </ErrorBoundary>
            </body>
        </html>
    );
}
