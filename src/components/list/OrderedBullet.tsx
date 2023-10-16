import styles from 'components/list/OrderedBullet.module.scss';
import Typography from 'components/typography/Typography';
import { TTypographyVariants } from 'components/typography/types';

export interface IOrderedBulletProps {
    index: string;
    variant?: TTypographyVariants;
}

export default function OrderedBullet({
    index,
    variant = 'body1',
}: IOrderedBulletProps): JSX.Element {
    return (
        <div className={styles.bullet}>
            <Typography variant={variant}>{index}</Typography>
        </div>
    );
}
