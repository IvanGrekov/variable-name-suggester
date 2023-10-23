import { getLastUserCharMessage } from 'features/suggester-page/components/chat-message/utils';
import { useSendSuggesterRequest } from 'features/suggester-page/hooks/suggesterApi.hooks';
import { useSelectSuggesterChat } from 'features/suggester-page/stores/suggester-chat/selectors';
import { TAreaFieldValue } from 'features/suggester-page/types/areaField.types';
import { useAddErrorMessageToNotifications } from 'hooks/notifications.hooks';

type TUseOnRetry = (args: {
    id: string;
    areaValue: TAreaFieldValue;
}) => VoidFunction;

export const useOnRetry: TUseOnRetry = ({ id, areaValue }) => {
    const chat = useSelectSuggesterChat();
    const sendSuggesterRequest = useSendSuggesterRequest();
    const addErrorMessageToNotifications = useAddErrorMessageToNotifications();

    return () => {
        const lastUserMessage = getLastUserCharMessage(chat);
        const { text } = lastUserMessage || {};

        if (!text) {
            addErrorMessageToNotifications({
                message: 'There is no any prompt from you to send',
            });

            return;
        }

        sendSuggesterRequest({
            messageId: id,
            areaValue,
            prompt: text,
        });
    };
};
