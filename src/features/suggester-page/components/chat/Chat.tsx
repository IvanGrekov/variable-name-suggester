import { useRef, useState, useEffect } from 'react';

import cx from 'classnames';

import styles from 'features/suggester-page/components/chat/Chat.module.scss';
import ChatMessage from 'features/suggester-page/components/chat-message/ChatMessage';
import SendMessageField from 'features/suggester-page/components/send-message-field/SendMessageField';
import { useSelectSuggesterChat } from 'features/suggester-page/stores/suggester-chat/selectors';
import { TAreaFieldValue } from 'features/suggester-page/types/areaField';
import { getIsAdmin, getIsUser } from 'utils/userRole.utils';

interface IChatProps {
    areaValue: TAreaFieldValue;
}

export default function Chat({ areaValue }: IChatProps): JSX.Element {
    const listRef = useRef<HTMLDivElement>(null);

    const [onRetry, setOnRetry] = useState<VoidFunction | undefined>(undefined);

    const chat = useSelectSuggesterChat();

    useEffect(() => {
        if (listRef.current) {
            listRef.current.scroll({
                top: listRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [chat]);

    return (
        <div
            className={cx(styles.chat, {
                [styles['chat--disabled']]: !areaValue.length,
            })}
        >
            <div ref={listRef} className={styles['message-list']}>
                {chat.map((message) => {
                    const { id, isRemoving, isLoading, userRole } = message;

                    return (
                        <ChatMessage
                            key={id}
                            {...message}
                            onRetry={onRetry}
                            className={cx(styles.message, {
                                [styles['message--removing']]: isRemoving,
                                [styles['message--loading']]: isLoading,
                                [styles['message--admin']]:
                                    getIsAdmin(userRole),
                                [styles['message--user']]: getIsUser(userRole),
                            })}
                        />
                    );
                })}
            </div>

            <SendMessageField
                setOnRetry={setOnRetry}
                className={styles['send-message-field']}
            />
        </div>
    );
}
