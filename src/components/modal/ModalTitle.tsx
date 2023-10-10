import styles from 'components/modal/Modal.module.scss';
import { TModalProps } from 'components/modal/types';
import Typography from 'components/typography/Typography';

export default function ModalTitle({
    title,
}: Pick<TModalProps, 'title'>): JSX.Element | null {
    if (!title) {
        return null;
    }

    return (
        <Typography variant="subtitle1" className={styles.title}>
            {title}
        </Typography>
    );
}
