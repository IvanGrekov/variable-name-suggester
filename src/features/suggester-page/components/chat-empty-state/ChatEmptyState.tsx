import cx from 'classnames';

import Typography from 'components/typography/Typography';
import styles from 'features/suggester-page/components/chat-empty-state/ChatEmptyState.module.scss';
import { TAreaFieldValue } from 'features/suggester-page/types/areaField.types';

interface ISuggesterChatEmptyStateProps {
    areaValue?: TAreaFieldValue;
    customTitle?: string;
    customDescription?: string;
    action?: JSX.Element;
    className?: string;
}

export default function SuggesterChatEmptyState({
    areaValue,
    customTitle,
    customDescription,
    action,
    className,
}: ISuggesterChatEmptyStateProps): JSX.Element {
    const defaultDescription = areaValue?.length
        ? 'Ask away to get personalized suggestions!'
        : 'Please select at least one area of interest!';
    const description = customDescription ?? defaultDescription;

    return (
        <div className={cx(styles['empty-state'], className)}>
            <Typography
                element="h3"
                variant="subtitle2"
                className={styles.title}
            >
                {customTitle ?? 'No messages here...'}
            </Typography>

            {description && (
                <Typography className={styles.description}>
                    {customDescription ?? description}
                </Typography>
            )}

            {action && <div className={styles['action-wrapper']}>{action}</div>}
        </div>
    );
}
