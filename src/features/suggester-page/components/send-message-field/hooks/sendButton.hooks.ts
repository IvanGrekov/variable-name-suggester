import { useEffect, RefObject } from 'react';

import { SHORT_ANIMATION_DURATION } from 'constants/animationDuration.constants';
import { useSendSuggesterRequest } from 'features/suggester-page/hooks/suggesterApi.hooks';
import { useSelectAddSuggesterChatMessage } from 'features/suggester-page/stores/suggester-chat/selectors';
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
    buttonRef: RefObject<HTMLButtonElement>;
    value: string;
    areaValue: TAreaFieldValue;
    setValue: (value: string) => void;
    setError: (error: string) => void;
    setIsAnimation: (isAnimation: boolean) => void;
}) => VoidFunction;

export const useGetSubmit: TUseGetSubmit = ({
    buttonRef,
    value,
    areaValue,
    setValue,
    setError,
    setIsAnimation,
}) => {
    const addMessage = useSelectAddSuggesterChatMessage();
    const sendSuggesterRequest = useSendSuggesterRequest();

    const callback = (): void => {
        buttonRef.current?.blur();
        setValue('');
        setIsAnimation(true);
    };

    return () => {
        if (!value) {
            setError('Message is empty');

            return;
        }

        addMessage({ text: value, userRole: EUserRole.USER });
        sendSuggesterRequest({ areaValue, prompt: value, callback });
    };
};
