import { useEffect, useState } from 'react';

import cx from 'classnames';

import Textarea from 'components/textarea/Textarea';
import SendButton from 'features/suggester-page/components/send-message-field/SendButton';
import styles from 'features/suggester-page/components/send-message-field/SendMessageField.module.scss';
import TextAreaCounter from 'features/suggester-page/components/send-message-field/TextAreaCounter';
import { MAX_MESSAGE_LENGTH } from 'features/suggester-page/components/send-message-field/constants';
import { getIsValueTooLong } from 'features/suggester-page/components/send-message-field/utils';

interface ISendMessageFieldProps {
    className?: string;
}

export default function SendMessageField({
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

    return (
        <div className={cx(styles.area, className)}>
            <Textarea
                value={value}
                disableResize={true}
                placeholder="Type your message here..."
                rows={3}
                isFullWidth={true}
                className={styles['text-area']}
                placeholderClassName={styles['text-area-placeholder']}
                labelClassName={styles['text-area-label']}
                onChange={(e): void => setValue(e.target.value)}
            />

            <TextAreaCounter valueLength={value.length} error={error} />

            <SendButton
                value={value}
                error={error}
                setValue={setValue}
                setError={setError}
            />
        </div>
    );
}
