import { PropsWithChildren } from 'react';

import cx from 'classnames';

import styles from 'components/icons/IconWrapper.module.scss';
import { IIconProps, EIconSizes } from 'components/icons/types';

export default function IconWrapper({
    size = EIconSizes.small,
    className,
    children,
}: IIconProps & PropsWithChildren): JSX.Element {
    const formattedSize = typeof size === 'number' ? size : EIconSizes[size];

    return (
        <div
            className={cx(styles.wrapper, className)}
            style={{
                width: formattedSize,
                height: formattedSize,
            }}
        >
            {children}
        </div>
    );
}
