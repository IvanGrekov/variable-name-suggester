import { v4 as uuidv4 } from 'uuid';

import API from 'features/suggester-page/api';
import {
    useSelectAddLoadingSuggesterChatMessage,
    useSelectEditSuggesterChatMessage,
    useSelectIncreaseChatCounter,
} from 'features/suggester-page/stores/suggester-chat/selectors';
import { TAreaFieldValue } from 'features/suggester-page/types/areaField.types';
import {
    getContentMatchesFromChunkValue,
    prettifyResponseText,
} from 'features/suggester-page/utils/suggesterApi.utils';
import { useAddErrorMessageToNotifications } from 'hooks/notifications.hooks';
import { EUserRole } from 'types/user.types';

type TUseHandleSuggesterResponse = () => (args: {
    reader: ReadableStreamDefaultReader<Uint8Array>;
    messageId: string;
}) => void;

const useHandleSuggesterResponse: TUseHandleSuggesterResponse = () => {
    const editMessage = useSelectEditSuggesterChatMessage();

    return async ({ reader, messageId }) => {
        let result = '';
        let isReaderDone = false;

        while (!isReaderDone) {
            const chunk = await reader.read();
            const { value, done } = chunk;

            isReaderDone = done;

            if (!value) {
                editMessage({
                    id: messageId,
                    text: result,
                    isLoading: false,
                });

                return;
            }

            const contentMatches = getContentMatchesFromChunkValue(value);
            for (const [, text] of contentMatches) {
                result += prettifyResponseText(text);

                editMessage({
                    id: messageId,
                    text: result,
                });
            }
        }
    };
};

const useGetAddErrorMessage = (): ((messageId: string) => void) => {
    const editMessage = useSelectEditSuggesterChatMessage();

    return (messageId: string) => {
        editMessage({
            id: messageId,
            text: '',
            isLoading: false,
            isError: true,
        });
    };
};

type TUSeSendSuggesterRequest = () => (args: {
    areaValue: TAreaFieldValue;
    prompt: string;
    messageId?: string;
    callback?: VoidFunction;
}) => Promise<void>;

export const useSendSuggesterRequest: TUSeSendSuggesterRequest = () => {
    const addLoadingMessage = useSelectAddLoadingSuggesterChatMessage();
    const editMessage = useSelectEditSuggesterChatMessage();
    const increaseChatCounter = useSelectIncreaseChatCounter();
    const addErrorMessageToNotifications = useAddErrorMessageToNotifications();

    const addErrorMessage = useGetAddErrorMessage();
    const handleSuggesterResponse = useHandleSuggesterResponse();

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

        try {
            const response = await API({
                areaValue,
                prompt,
            });

            const { ok, body } = response;
            const reader = body?.getReader();

            if (!ok || !reader) {
                addErrorMessage(adminMessageId);

                return;
            }

            handleSuggesterResponse({
                reader,
                messageId: adminMessageId,
            });
            increaseChatCounter();
        } catch (error) {
            addErrorMessageToNotifications({
                message: error.message,
            });
            addErrorMessage(adminMessageId);
        }
    };
};
