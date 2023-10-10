'use client';

import { NotificationsProvider } from 'contexts/NotificationsContext';
import { PageLoadingProvider } from 'contexts/PageLoadingContext';

export default function Providers({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <PageLoadingProvider>
            <NotificationsProvider>{children}</NotificationsProvider>
        </PageLoadingProvider>
    );
}
