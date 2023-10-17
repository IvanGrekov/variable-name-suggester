import cx from 'classnames';

import Typography from 'components/typography/Typography';
import styles from 'features/suggester-page/components/chat-empty-state/ChatEmptyState.module.scss';
import { TAreaFieldValue } from 'features/suggester-page/types/areaField';

interface ISuggesterChatEmptyStateProps {
    areaValue: TAreaFieldValue;
    className?: string;
}

export default function SuggesterChatEmptyState({
    areaValue,
    className,
}: ISuggesterChatEmptyStateProps): JSX.Element {
    const description = areaValue.length
        ? 'Ask away to get personalized suggestions!'
        : 'Please select at least one area of interest!';

    return (
        <div className={cx(styles['empty-state'], className)}>
            <Typography
                element="h3"
                variant="subtitle2"
                className={styles.title}
            >
                No messages here...
            </Typography>

            <Typography className={styles.description}>
                {description}
            </Typography>
        </div>
    );
}
