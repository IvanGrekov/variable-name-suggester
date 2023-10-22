import { useEffect, useRef, RefObject } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { SHORT_ANIMATION_DURATION } from 'constants/animationDuration.constants';
import {
    useSelectAddSuggesterChatMessage,
    useSelectAddLoadingSuggesterChatMessage,
    useSelectEditSuggesterChatMessage,
} from 'features/suggester-page/stores/suggester-chat/selectors';
import { TAreaFieldValue } from 'features/suggester-page/types/areaField.types';
import { EUserRole } from 'types/user.types';

type TUseClearButtonAnimation = (args: {
    isAnimation: boolean;
    setIsAnimation: (isAnimation: boolean) => void;
}) => void;

export const useClearButtonAnimation: TUseClearButtonAnimation = ({
    isAnimation,
    setIsAnimation,
}) => {
    useEffect(() => {
        if (!isAnimation) {
            return;
        }

        const timeout = setTimeout(() => {
            setIsAnimation(false);
        }, SHORT_ANIMATION_DURATION);

        return (): void => {
            clearTimeout(timeout);
        };
    }, [isAnimation, setIsAnimation]);
};

type TUseGetSubmit = (args: {
    value: string;
    areaValue: TAreaFieldValue;
    setOnRetry: (onRetry: VoidFunction) => void;
    setValue: (value: string) => void;
    setError: (error: string) => void;
    setIsAnimation: (isAnimation: boolean) => void;
}) => {
    onSubmit: VoidFunction;
    buttonRef: RefObject<HTMLButtonElement>;
};

export const useGetSubmit: TUseGetSubmit = ({
    value,
    areaValue,
    setValue,
    setError,
    setOnRetry,
    setIsAnimation,
}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const addMessage = useSelectAddSuggesterChatMessage();
    const addLoadingMessage = useSelectAddLoadingSuggesterChatMessage();
    const editMessage = useSelectEditSuggesterChatMessage();

    const onSubmit = async (): Promise<void> => {
        if (!value) {
            setError('Message is empty');

            return;
        }

        const adminMessageId = uuidv4();

        addMessage({ text: value, userRole: EUserRole.USER });

        buttonRef.current?.blur();
        setValue('');
        setIsAnimation(true);

        addLoadingMessage({ id: adminMessageId, userRole: EUserRole.ADMIN });

        setOnRetry(() => {
            return (): void => {
                console.log('retry', value);
            };
        });

        const response = await fetch('http://localhost:3001/api', {
            method: 'POST',
            body: JSON.stringify({ areaValue, prompt: value }),
        });
        const { message } = await response.json();
        const { content } = message;

        editMessage({
            id: adminMessageId,
            text: content,
            isLoading: false,
        });
    };

    return {
        onSubmit,
        buttonRef,
    };
};
