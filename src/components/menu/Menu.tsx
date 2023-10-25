import { forwardRef, Ref } from 'react';

import FocusTrap from 'focus-trap-react';

import IconButton from 'components/button/IconButton';
import MoreIcon from 'components/icons/MoreIcon';
import styles from 'components/menu/Menu.module.scss';
import MenuActions from 'components/menu/MenuActions';
import { useMenu } from 'components/menu/hooks';
import { IMenuProps } from 'components/menu/types';
import Tooltip from 'components/tooltip/Tooltip';
import { useBodyScrollLock } from 'hooks/scroll.hooks';

function Menu(
    {
        children,
        OpenMenuElement,
        hideTooltip,
        tooltipPosition,
        tooltipClassName,
        actionsClassName,
        actionsActiveClassName,
        style,
    }: IMenuProps,
    ref: Ref<HTMLDivElement>,
): JSX.Element {
    const { isOpen, onDeactivate, onClick, OpenMenuElementWithOnClick } =
        useMenu(OpenMenuElement);

    useBodyScrollLock(isOpen);

    return (
        <FocusTrap
            active={isOpen}
            focusTrapOptions={{
                clickOutsideDeactivates: true,
                onDeactivate,
            }}
        >
            <div
                ref={ref}
                className={styles.menu}
                style={style}
                onClick={onDeactivate}
            >
                {hideTooltip ? (
                    <>
                        {OpenMenuElementWithOnClick || (
                            <IconButton Icon={MoreIcon} onClick={onClick} />
                        )}
                    </>
                ) : (
                    <Tooltip
                        text="Open Menu"
                        open={!isOpen}
                        position={tooltipPosition}
                        className={tooltipClassName}
                    >
                        {OpenMenuElementWithOnClick || (
                            <IconButton Icon={MoreIcon} onClick={onClick} />
                        )}
                    </Tooltip>
                )}

                {!!OpenMenuElementWithOnClick && (
                    <button
                        onClick={onClick}
                        className={styles['button-placeholder']}
                    />
                )}

                <MenuActions
                    isOpen={isOpen}
                    className={actionsClassName}
                    activeClassName={actionsActiveClassName}
                >
                    {children}
                </MenuActions>
            </div>
        </FocusTrap>
    );
}

export default forwardRef(Menu);

export { default as MenuActionItem } from 'components/menu/MenuActionItem';
