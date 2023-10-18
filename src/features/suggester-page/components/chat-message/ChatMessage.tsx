import cx from 'classnames';

import IconButton from 'components/button/IconButton';
import CloseIcon from 'components/icons/CloseIcon';
import Typography from 'components/typography/Typography';
import AiAvatar from 'features/suggester-page/components/ai-avatar/AiAvatar';
import styles from 'features/suggester-page/components/chat-message/ChatMessage.module.scss';
import { useSelectRemoveSuggesterChatMessage } from 'features/suggester-page/stores/suggester-chat/selectors';
import { IChatMessage } from 'features/suggester-page/types/chat.types';
import { EUserRole } from 'types/user.types';

interface IChatMessageProps extends IChatMessage {
    className?: string;
}

export default function ChatMessage({
    id,
    userRole,
    text,
    className,
}: IChatMessageProps): JSX.Element {
    const removeMessage = useSelectRemoveSuggesterChatMessage();

    const isAdmin = userRole === EUserRole.ADMIN;

    return (
        <div
            className={cx(
                styles.message,
                {
                    [styles['message--admin']]: isAdmin,
                    [styles['message--user']]: !isAdmin,
                },
                className,
            )}
        >
            {isAdmin && <AiAvatar className={styles['avatar']} />}

            <Typography className={styles.text}>{text}</Typography>

            <IconButton
                Icon={CloseIcon}
                iconSize={30}
                title="Remove message"
                onClick={(): void => removeMessage(id)}
                className={styles['remove-button']}
            />
        </div>
    );
}