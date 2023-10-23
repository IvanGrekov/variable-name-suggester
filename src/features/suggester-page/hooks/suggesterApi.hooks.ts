import { v4 as uuidv4 } from 'uuid';

import API from 'features/suggester-page/api';
import {
    useSelectAddLoadingSuggesterChatMessage,
    useSelectEditSuggesterChatMessage,
} from 'features/suggester-page/stores/suggester-chat/selectors';
import { TAreaFieldValue } from 'features/suggester-page/types/areaField.types';
import { EUserRole } from 'types/user.types';

type TUSeSendSuggesterRequest = () => (args: {
    areaValue: TAreaFieldValue;
    prompt: string;
    messageId?: string;
    callback?: VoidFunction;
}) => Promise<void>;

export const useSendSuggesterRequest: TUSeSendSuggesterRequest = () => {
    const addLoadingMessage = useSelectAddLoadingSuggesterChatMessage();
    const editMessage = useSelectEditSuggesterChatMessage();

    return async ({ areaValue, messageId, prompt, callback }) => {
        callback?.();

        let adminMessageId = '';

        if (messageId) {
            adminMessageId = messageId;
            editMessage({
                id: adminMessageId,
                text: '',
                isLoading: true,
                isError: false,
            });
        } else {
            adminMessageId = uuidv4();
            addLoadingMessage({
                id: adminMessageId,
                userRole: EUserRole.ADMIN,
            });
        }

        const { data, status } = await API.post('', {
            areaValue,
            prompt,
        });

        if (status === 200) {
            editMessage({
                id: adminMessageId,
                text: data.message.content,
                isLoading: false,
            });
        } else {
            editMessage({
                id: adminMessageId,
                text: '',
                isLoading: false,
                isError: true,
            });
        }
    };
};