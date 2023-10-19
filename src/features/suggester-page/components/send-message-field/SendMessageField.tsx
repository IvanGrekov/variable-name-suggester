import { useEffect, useState } from 'react';

import cx from 'classnames';

import Textarea from 'components/textarea/Textarea';
import SendButton from 'features/suggester-page/components/send-message-field/SendButton';
import styles from 'features/suggester-page/components/send-message-field/SendMessageField.module.scss';
import TextAreaCounter from 'features/suggester-page/components/send-message-field/TextAreaCounter';
import { MAX_MESSAGE_LENGTH } from 'features/suggester-page/components/send-message-field/constants';
import { useIsFieldDisabled } from 'features/suggester-page/components/send-message-field/hooks';
import { getIsValueTooLong } from 'features/suggester-page/components/send-message-field/utils';

interface ISendMessageFieldProps {
    setOnRetry: (onRetry: VoidFunction) => void;
    className?: string;
}

export default function SendMessageField({
    setOnRetry,
    className,
}: ISendMessageFieldProps): JSX.Element {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (getIsValueTooLong(value)) {
            setError(`Max length is ${MAX_MESSAGE_LENGTH} characters`);
        } else {
            setError('');
        }
    }, [value]);

    const isDisabled = useIsFieldDisabled();

    return (
        <div className={cx(styles.area, className)}>
            <Textarea
                value={value}
                disableResize={true}
                placeholder="Type your message here..."
                rows={3}
                isFullWidth={true}
                disabled={isDisabled}
                className={styles['text-area']}
                placeholderClassName={cx(styles['text-area-placeholder'], {
                    [styles['text-area-placeholder--disabled']]: isDisabled,
                })}
                labelClassName={styles['text-area-label']}
                onChange={(e): void => setValue(e.target.value)}
            />

            <TextAreaCounter
                valueLength={value.length}
                isDisabled={isDisabled}
                error={error}
            />

            <SendButton
                value={value}
                isDisabled={isDisabled}
                error={error}
                setOnRetry={setOnRetry}
                setValue={setValue}
                setError={setError}
            />
        </div>
    );
}
