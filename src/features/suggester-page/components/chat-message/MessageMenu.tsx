import cx from 'classnames';

import Button from 'components/button/Button';
import IconButton from 'components/button/IconButton';
import CloseIcon from 'components/icons/CloseIcon';
import MoreIcon from 'components/icons/MoreIcon';
import RepeatIcon from 'components/icons/RepeatIcon';
import Menu from 'components/menu/Menu';
import styles from 'features/suggester-page/components/chat-message/ChatMessage.module.scss';
import {
    useShouldAddMessageMenu,
    useIsFirstMessage,
    useIsLastMessage,
} from 'features/suggester-page/components/chat-message/hooks';

interface IMessageMenuProps {
    id: string;
    isAdmin: boolean;
    isUser: boolean;
    isLoading?: boolean;
    isError?: boolean;
    onRetry: VoidFunction;
    onRemove: VoidFunction;
}

export default function MessageMenu({
    id,
    isAdmin,
    isUser,
    isLoading,
    isError,
    onRetry,
    onRemove,
}: IMessageMenuProps): JSX.Element | null {
    const shouldAddMessageMenu = useShouldAddMessageMenu();

    const isFirstMessage = useIsFirstMessage(id);
    const isLastMessage = useIsLastMessage(id);

    if (!shouldAddMessageMenu || isLoading) {
        return null;
    }

    return (
        <Menu
            OpenMenuElement={
                <IconButton
                    Icon={MoreIcon}
                    iconSize={25}
                    className={styles['open-menu-button']}
                />
            }
            hideTooltip={true}
            actionsClassName={cx(styles['menu-actions'], {
                [styles['menu-actions--first']]: isFirstMessage,
                [styles['menu-actions--last']]: isLastMessage,
                [styles['menu-actions--admin']]: isAdmin,
                [styles['menu-actions--user']]: isUser,
            })}
            actionsActiveClassName={styles['menu-actions--active']}
        >
            {isError ? (
                <Button
                    text="Retry"
                    textVariant="body2"
                    Icon={RepeatIcon}
                    iconSize={28}
                    onClick={onRetry}
                    className={styles['retry-button-action']}
                />
            ) : null}

            <Button
                text="Remove"
                textVariant="body2"
                Icon={CloseIcon}
                iconSize={20}
                onClick={onRemove}
                className={styles['remove-button-action']}
            />
        </Menu>
    );
}
