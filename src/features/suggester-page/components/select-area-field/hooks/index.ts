import { useState } from 'react';

import {
    useSelectResetSuggesterChat,
    useSelectAddSuggesterChatMessage,
} from 'features/suggester-page/stores/suggester-chat/selectors';
import { TAreaFieldValue } from 'features/suggester-page/types/areaField';
import { useLocalStorage } from 'hooks/localStorage.hooks';
import { EUserRole } from 'types/user.types';

type TUseUpdateSuggesterChat = () => (args: {
    value: string | null;
    newValueLength?: number;
    exist?: boolean;
}) => void;

const useUpdateSuggesterChat: TUseUpdateSuggesterChat = () => {
    const resetChat = useSelectResetSuggesterChat();
    const addMessage = useSelectAddSuggesterChatMessage();

    return ({ value, newValueLength = 0, exist }) => {
        if (value === null) {
            resetChat();

            return;
        }

        if (newValueLength === 0) {
            resetChat();
        } else if (exist) {
            addMessage({
                text: `Got it, you've removed ${value} from your interests. Anything else you're curious about?`,
                userRole: EUserRole.ADMIN,
            });
        } else if (newValueLength === 1) {
            addMessage({
                text: `Awesome, you're interested in ${value} 🎉 Feel free to ask questions!`,
                userRole: EUserRole.ADMIN,
            });
        } else {
            addMessage({
                text: `Great, you've added ${value} to your interests 🎉 Got any questions about it?`,
                userRole: EUserRole.ADMIN,
            });
        }
    };
};

type TUseAreaValueState = () => {
    areaValue: TAreaFieldValue;
    setAreaValue: (value: string | null) => void;
};

export const useAreaValueState: TUseAreaValueState = () => {
    const { localStorageValue, setLocalStorageValue } =
        useLocalStorage<TAreaFieldValue>({
            key: 'area',
            initialValue: [],
        });

    const [areaValue, setAreaValue] =
        useState<TAreaFieldValue>(localStorageValue);

    const updateSuggesterChat = useUpdateSuggesterChat();

    const onChangeArea = (value: string | null): void => {
        if (value === null) {
            const newValue: TAreaFieldValue = [];

            setLocalStorageValue(newValue);
            setAreaValue(newValue);
            updateSuggesterChat({ value });

            return;
        }

        setAreaValue((prevValue) => {
            let newValue: TAreaFieldValue = [];
            const exist = prevValue.some((item) => item === value);

            if (!exist) {
                newValue = [...prevValue, value];
            } else {
                newValue = prevValue.filter((item) => item !== value);
            }

            updateSuggesterChat({
                value,
                newValueLength: newValue.length,
                exist,
            });
            setLocalStorageValue(newValue);

            return newValue;
        });
    };

    return {
        areaValue,
        setAreaValue: onChangeArea,
    };
};
