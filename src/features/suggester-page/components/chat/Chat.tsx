import cx from 'classnames';

import styles from 'features/suggester-page/components/chat/Chat.module.scss';
import ChatMessage from 'features/suggester-page/components/chat-message/ChatMessage';
import SendMessageField from 'features/suggester-page/components/send-message-field/SendMessageField';
import { useSelectSuggesterChat } from 'features/suggester-page/stores/suggester-chat/selectors';
import { TAreaFieldValue } from 'features/suggester-page/types/areaField';

interface IChatProps {
    areaValue: TAreaFieldValue;
}

export default function Chat({ areaValue }: IChatProps): JSX.Element {
    const chat = useSelectSuggesterChat();

    return (
        <div
            className={cx(styles.chat, {
                [styles['chat--disabled']]: !areaValue.length,
            })}
        >
            <div className={styles['message-list']}>
                {chat.map((message) => (
                    <ChatMessage
                        key={message.id}
                        {...message}
                        className={cx(styles.message, {
                            [styles['message--removing']]: message.isRemoving,
                        })}
                    />
                ))}
            </div>

            <SendMessageField className={styles['send-message-field']} />
        </div>
    );
}
