import cx from 'classnames';

import styles from 'features/suggester-page/components/chat/Chat.module.scss';
import ChatMessage from 'features/suggester-page/components/chat-message/ChatMessage';
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
            {chat.map((message) => (
                <ChatMessage
                    key={message.id}
                    {...message}
                    className={styles.message}
                />
            ))}
        </div>
    );
}
