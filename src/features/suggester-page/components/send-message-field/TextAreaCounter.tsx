import cx from 'classnames';

import Typography from 'components/typography/Typography';
import styles from 'features/suggester-page/components/send-message-field/SendMessageField.module.scss';
import { MAX_MESSAGE_LENGTH } from 'features/suggester-page/components/send-message-field/constants';

interface ITextAreaCounterProps {
    valueLength: number;
    error: string;
}

export default function TextAreaCounter({
    valueLength,
    error,
}: ITextAreaCounterProps): JSX.Element {
    return (
        <Typography
            variant="body2"
            className={cx(styles['text-area-counter'], {
                [styles['text-area-counter--error']]: error,
            })}
        >
            {`${valueLength}/${MAX_MESSAGE_LENGTH}`}
        </Typography>
    );
}
