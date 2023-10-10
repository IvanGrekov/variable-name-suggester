'use client';

import cx from 'classnames';

import styles from 'components/page-loading-indicator/PageLoadingIndicator.module.scss';
import Skeleton from 'components/skeleton/Skeleton';
import { usePageLoading } from 'contexts/PageLoadingContext';

interface IPageLoadingIndicatorProps {
    className?: string;
}

const LOADING_INDICATOR_HEIGHT = 8;

export default function PageLoadingIndicator({
    className,
}: IPageLoadingIndicatorProps): JSX.Element {
    const { isLoading } = usePageLoading();

    return (
        <Skeleton
            height={LOADING_INDICATOR_HEIGHT}
            className={cx(
                styles.indicator,
                {
                    [styles['indicator--visible']]: isLoading,
                },
                className,
            )}
        />
    );
}
