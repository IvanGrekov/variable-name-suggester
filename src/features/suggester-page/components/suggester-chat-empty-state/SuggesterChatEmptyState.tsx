import cx from 'classnames';

import Typography from 'components/typography/Typography';
import styles from 'features/suggester-page/components/suggester-chat-empty-state/SuggesterChatEmptyState.module.scss';

interface ISuggesterChatEmptyStateProps {
    className?: string;
}

export default function SuggesterChatEmptyState({
    className,
}: ISuggesterChatEmptyStateProps): JSX.Element {
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
                Feel free to start a chat for personalized tips!
            </Typography>
        </div>
    );
}
