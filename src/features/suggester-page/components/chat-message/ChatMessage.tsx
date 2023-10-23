import cx from 'classnames';

import IconButton from 'components/button/IconButton';
import CloseIcon from 'components/icons/CloseIcon';
import RepeatIcon from 'components/icons/RepeatIcon';
import Skeleton from 'components/skeleton/Skeleton';
import Typography from 'components/typography/Typography';
import AiAvatar from 'features/suggester-page/components/ai-avatar/AiAvatar';
import styles from 'features/suggester-page/components/chat-message/ChatMessage.module.scss';
import { useOnRetry } from 'features/suggester-page/components/chat-message/hooks';
import { useSelectRemoveSuggesterChatMessage } from 'features/suggester-page/stores/suggester-chat/selectors';
import { TAreaFieldValue } from 'features/suggester-page/types/areaField.types';
import { IChatMessage } from 'features/suggester-page/types/chat.types';
import { getIsAdmin, getIsUser } from 'utils/userRole.utils';

interface IChatMessageProps extends IChatMessage {
    areaValue: TAreaFieldValue;
    className?: string;
}

export default function ChatMessage({
    id,
    isError,
    isLoading,
    userRole,
    text,
    areaValue,
    className,
}: IChatMessageProps): JSX.Element {
    const removeMessage = useSelectRemoveSuggesterChatMessage();
    const onRetry = useOnRetry({ id, areaValue });

    const isAdmin = getIsAdmin(userRole);
    const isUser = getIsUser(userRole);

    const messageContent = isError ? 'Error happened. You can retry' : text;

    return (
        <div
            className={cx(
                styles.message,
                {
                    [styles['message--admin']]: isAdmin,
                    [styles['message--user']]: isUser,
                    [styles['message--error']]: isError,
                },
                className,
            )}
        >
            {isAdmin && <AiAvatar className={styles['avatar']} />}

            {isLoading ? (
                <Skeleton height={24} className={styles['text-skeleton']} />
            ) : (
                <Typography
                    textOverflow="unset"
                    className={cx(styles.text, {
                        [styles['text--error']]: isError,
                    })}
                >
                    {messageContent}
                </Typography>
            )}

            {isError && (
                <IconButton
                    Icon={RepeatIcon}
                    iconSize={30}
                    title="Retry"
                    onClick={onRetry}
                    className={styles['retry-button']}
                />
            )}

            {!isLoading && (
                <IconButton
                    Icon={CloseIcon}
                    iconSize={30}
                    title="Remove message"
                    onClick={(): void => removeMessage(id)}
                    className={styles['remove-button']}
                />
            )}
        </div>
    );
}
