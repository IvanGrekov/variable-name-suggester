import cx from 'classnames';

import IconButton from 'components/button/IconButton';
import CloseIcon from 'components/icons/CloseIcon';
import RepeatIcon from 'components/icons/RepeatIcon';
import Skeleton from 'components/skeleton/Skeleton';
import Typography from 'components/typography/Typography';
import AiAvatar from 'features/suggester-page/components/ai-avatar/AiAvatar';
import styles from 'features/suggester-page/components/chat-message/ChatMessage.module.scss';
import MessageMenu from 'features/suggester-page/components/chat-message/MessageMenu';
import { useOnRetry } from 'features/suggester-page/components/chat-message/hooks';
import { useSelectRemoveSuggesterChatMessage } from 'features/suggester-page/stores/suggester-chat/selectors';
import { TAreaFieldValue } from 'features/suggester-page/types/areaField.types';
import { IChatMessage } from 'features/suggester-page/types/chat.types';
import { getIsAdmin, getIsUser } from 'utils/userRole.utils';

export interface IChatMessageProps extends IChatMessage {
    areaValue: TAreaFieldValue;
    className?: string;
}

export default function ChatMessage({
    id,
    userRole,
    text,
    areaValue,
    isError,
    isLoading,
    className,
}: IChatMessageProps): JSX.Element {
    const removeMessage = useSelectRemoveSuggesterChatMessage();
    const onRetry = useOnRetry({ id, areaValue });
    const onRemove = (): void => removeMessage(id);

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
                    title="Retry"
                    Icon={RepeatIcon}
                    iconSize={30}
                    onClick={onRetry}
                    className={styles['retry-button']}
                    iconWrapperClassName={styles['retry-button__icon-wrapper']}
                />
            )}

            {!isLoading && (
                <IconButton
                    title="Remove message"
                    Icon={CloseIcon}
                    iconSize={30}
                    onClick={onRemove}
                    className={styles['remove-button']}
                />
            )}

            <MessageMenu
                id={id}
                text={text}
                isUser={isUser}
                isLoading={isLoading}
                isError={isError}
                onRetry={onRetry}
                onRemove={onRemove}
            />
        </div>
    );
}
