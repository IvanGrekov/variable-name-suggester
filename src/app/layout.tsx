import 'styles/globals.scss';
import { ReactNode } from 'react';

import cx from 'classnames';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import styles from 'app/layout.module.scss';
import Providers from 'app/providers';
import ErrorBoundary from 'components/error-boundary/ErrorBoundary';
import Header from 'components/header/Header';
import NetworkStatusIndicator from 'components/network-status-indicator/NetworkStatusIndicator';
import Notifications from 'components/notifications/Notifications';
import ScrollTopButton from 'components/scroll-top-button/ScrollTopButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Variable Name Suggester',
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
                        <Header />

                        <main
                            className={cx(
                                styles.main,
                                styles['header-spacing'],
                            )}
                        >
                            {children}
                        </main>

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
