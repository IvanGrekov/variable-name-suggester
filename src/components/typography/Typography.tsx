import { CSSProperties } from 'react';

import cx from 'classnames';

import styles from 'components/typography/Typography.module.scss';
import {
    TTypographyElements,
    TTypographyVariants,
} from 'components/typography/types';

interface ITypographyProps {
    children: string;
    element?: TTypographyElements;
    variant?: TTypographyVariants;
    lineClamp?: number | 'none';
    textOverflow?: 'ellipsis' | 'clip' | 'unset' | 'initial' | 'inherit';
    style?: CSSProperties;
    className?: string;
}

export default function Typography({
    children,
    element = 'p',
    variant = 'body1',
    lineClamp = 'none',
    textOverflow = 'ellipsis',
    style = {},
    className,
}: ITypographyProps): JSX.Element {
    const Element = element;

    return (
        <Element
            className={cx(
                styles.typography,
                styles[`typography--${variant}`],
                {
                    [styles[`typography--line-clamp`]]: lineClamp !== 'none',
                },
                className,
            )}
            style={{
                WebkitLineClamp: lineClamp,
                textOverflow,
                ...style,
            }}
            dangerouslySetInnerHTML={{ __html: children }}
        />
    );
}
