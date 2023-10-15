'use client';

import {
    createContext,
    useContext,
    useState,
    useCallback,
    useMemo,
    PropsWithChildren,
    Dispatch,
    SetStateAction,
} from 'react';

import {
    DEFAULT_NOTIFICATIONS,
    MAX_NOTIFICATIONS,
    DEFAULT_NOTIFICATION_PRIORITY,
} from 'constants/notifications.constants';
import { TNotifications, TAddNotification } from 'types/notifications.types';

interface INotificationsContextValue {
    notifications: TNotifications;
    addNotification: TAddNotification;
    setNotifications: Dispatch<SetStateAction<TNotifications>>;
}

const NotificationsContext = createContext<INotificationsContextValue | null>(
    null,
);

export default function NotificationsProvider({
    children,
}: PropsWithChildren): JSX.Element {
    const value = useInitNotifications();

    return (
        <NotificationsContext.Provider value={value}>
            {children}
        </NotificationsContext.Provider>
    );
}

export const useNotificationsContext = (): INotificationsContextValue => {
    const context = useContext(NotificationsContext);

    if (!context) {
        throw new Error(
            'useNotificationsContext must be used within a NotificationsProvider',
        );
    }

    return context;
};

type TUseInitNotifications = () => INotificationsContextValue;

export const useInitNotifications: TUseInitNotifications = () => {
    const [notifications, setNotifications] = useState(DEFAULT_NOTIFICATIONS);

    const addNotification = useCallback<TAddNotification>(
        ({ priority = DEFAULT_NOTIFICATION_PRIORITY, ...newNotification }) => {
            setNotifications((prevNotifications) => {
                const slicedPrevNotifications =
                    prevNotifications.length === MAX_NOTIFICATIONS
                        ? [...prevNotifications.slice(1, MAX_NOTIFICATIONS)]
                        : prevNotifications;

                return [
                    ...slicedPrevNotifications,
                    { ...newNotification, priority },
                ];
            });
        },
        [],
    );

    return useMemo(
        () => ({ notifications, addNotification, setNotifications }),
        [notifications, addNotification, setNotifications],
    );
};
