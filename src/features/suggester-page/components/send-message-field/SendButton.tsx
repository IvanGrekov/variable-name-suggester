import { useRef, useState, useEffect } from 'react';

import cx from 'classnames';

import IconButton from 'components/button/IconButton';
import SendIcon from 'components/icons/SendIcon';
import { SHORT_ANIMATION_DURATION } from 'constants/animationDuration.constants';
import styles from 'features/suggester-page/components/send-message-field/SendMessageField.module.scss';
import { useSelectAddSuggesterChatMessage } from 'features/suggester-page/stores/suggester-chat/selectors';
import { TAreaFieldValue } from 'features/suggester-page/types/areaField.types';
import { EUserRole } from 'types/user.types';

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
    setOnRetry,
    setValue,
    setError,
}: ISendButtonProps): JSX.Element {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isAnimation, setIsAnimation] = useState(false);

    const addSuggesterChatMessage = useSelectAddSuggesterChatMessage();

    useEffect(() => {
        if (isAnimation) {
            const timeout = setTimeout(() => {
                setIsAnimation(false);
            }, SHORT_ANIMATION_DURATION);

            return (): void => {
                clearTimeout(timeout);
            };
        }
    }, [isAnimation]);

    const onClick = (): void => {
        if (!value) {
            setError('Message is empty');
        } else {
            addSuggesterChatMessage({ text: value, userRole: EUserRole.USER });
            setValue('');
            setIsAnimation(true);
            setOnRetry(() => {
                return (): void => {
                    console.log('retry', value);
                };
            });
            buttonRef.current?.blur();

            fetch('http://localhost:3001/api', {
                method: 'POST',
                body: JSON.stringify({ areaValue, prompt: value }),
            });
        }
    };

    return (
        <IconButton
            ref={buttonRef}
            Icon={SendIcon}
            title="Send"
            isDisabled={!!error || isDisabled}
            onClick={onClick}
            className={cx(styles['send-button'], {
                [styles['send-button--disabled']]: error || isDisabled,
                [styles['send-button--animation']]: isAnimation,
            })}
        />
    );
}
