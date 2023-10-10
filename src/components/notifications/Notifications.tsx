'use client';

import NotificationsContent from 'components/notifications/NotificationsContent';
import { useCreatePortal } from 'hooks/portal.hooks';

export default function Notifications(): JSX.Element | null {
    const createPortal = useCreatePortal({
        selector: '#notifications-root',
        content: <NotificationsContent />,
    });

    return createPortal();
}
