import cx from 'classnames';

import Button from 'components/button/Button';
import IconButton from 'components/button/IconButton';
import CloseIcon from 'components/icons/CloseIcon';
import CopyIcon from 'components/icons/CopyIcon';
import MoreIcon from 'components/icons/MoreIcon';
import RepeatIcon from 'components/icons/RepeatIcon';
import Menu from 'components/menu/Menu';
import styles from 'features/suggester-page/components/chat-message/ChatMessage.module.scss';
import {
    useShouldAddMessageMenu,
    useIsLastMessage,
    useMenuZIndex,
} from 'features/suggester-page/components/chat-message/hooks';

interface IMessageMenuProps {
    id: string;
    text: string;
    isUser: boolean;
    isLoading?: boolean;
    isError?: boolean;
    onRetry: VoidFunction;
    onRemove: VoidFunction;
}

export default function MessageMenu({
    id,
    text,
    isUser,
    isLoading,
    isError,
    onRetry,
    onRemove,
}: IMessageMenuProps): JSX.Element | null {
    const shouldAddMessageMenu = useShouldAddMessageMenu();

    const isLastMessage = useIsLastMessage(id);

    const { menuRef, zIndex } = useMenuZIndex();

    if (!shouldAddMessageMenu || isLoading) {
        return null;
    }

    const onCopy = (): void => {
        navigator.clipboard.writeText(text);
    };

    return (
        <Menu
            ref={menuRef}
            OpenMenuElement={
                <IconButton
                    Icon={MoreIcon}
                    iconSize={25}
                    className={styles['open-menu-button']}
                />
            }
            hideTooltip={true}
            actionsClassName={cx(styles['menu-actions'], {
                [styles['menu-actions--last']]: isLastMessage,
                [styles['menu-actions--user']]: isUser,
            })}
            style={{ zIndex }}
        >
            {isError ? (
                <Button
                    text="Retry"
                    textVariant="body2"
                    Icon={RepeatIcon}
                    iconSize={28}
                    onClick={onRetry}
                    className={cx(
                        styles['button-action'],
                        styles['retry-button-action'],
                    )}
                />
            ) : null}

            <Button
                text="Copy"
                textVariant="body2"
                Icon={CopyIcon}
                iconSize={24}
                onClick={onCopy}
                className={cx(
                    styles['button-action'],
                    styles['copy-button-action'],
                )}
            />

            <Button
                text="Remove"
                textVariant="body2"
                Icon={CloseIcon}
                iconSize={25}
                onClick={onRemove}
                className={cx(styles['button-action'])}
            />
        </Menu>
    );
}
