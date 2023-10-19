import cx from 'classnames';

import styles from 'components/skeleton/Skeleton.module.scss';

interface ISkeletonProps {
    height?: number | string;
    className?: string;
}

export default function Skeleton({
    height = 24,
    className,
}: ISkeletonProps): JSX.Element {
    return (
        <div className={cx(styles.skeleton, className)} style={{ height }} />
    );
}
