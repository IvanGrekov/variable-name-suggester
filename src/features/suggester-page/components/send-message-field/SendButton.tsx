import { useState } from 'react';

import cx from 'classnames';

import IconButton from 'components/button/IconButton';
import SendIcon from 'components/icons/SendIcon';
import styles from 'features/suggester-page/components/send-message-field/SendMessageField.module.scss';
import {
    useClearButtonAnimation,
    useGetSubmit,
} from 'features/suggester-page/components/send-message-field/hooks/sendButton.hooks';
import { TAreaFieldValue } from 'features/suggester-page/types/areaField.types';

interface ISendButtonProps {
    value: string;
    areaValue: TAreaFieldValue;
    isDisabled: boolean;
    error: string;
    setOnRetry: (onRetry: VoidFunction) => void;
    setValue: (value: string) => void;
    setError: (error: string) => void;
}

export default function SendButton({
    value,
    areaValue,
    isDisabled,
    error,
    setValue,
    setError,
    setOnRetry,
}: ISendButtonProps): JSX.Element {
    const [isAnimation, setIsAnimation] = useState(false);

    const { onSubmit, buttonRef } = useGetSubmit({
        value,
        areaValue,
        setValue,
        setError,
        setOnRetry,
        setIsAnimation,
    });

    useClearButtonAnimation({ isAnimation, setIsAnimation });

    return (
        <IconButton
            ref={buttonRef}
            Icon={SendIcon}
            title="Send"
            isDisabled={!!error || isDisabled}
            onClick={onSubmit}
            className={cx(styles['send-button'], {
                [styles['send-button--disabled']]: error || isDisabled,
                [styles['send-button--animation']]: isAnimation,
            })}
        />
    );
}
