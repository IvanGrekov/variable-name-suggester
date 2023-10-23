import { useState, RefObject } from 'react';

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
    buttonRef: RefObject<HTMLButtonElement>;
    value: string;
    areaValue: TAreaFieldValue;
    isDisabled: boolean;
    error: string;
    setValue: (value: string) => void;
    setError: (error: string) => void;
}

export default function SendButton({
    buttonRef,
    value,
    areaValue,
    isDisabled,
    error,
    setValue,
    setError,
}: ISendButtonProps): JSX.Element {
    const [isAnimation, setIsAnimation] = useState(false);

    const onSubmit = useGetSubmit({
        buttonRef,
        value,
        areaValue,
        setValue,
        setError,
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
