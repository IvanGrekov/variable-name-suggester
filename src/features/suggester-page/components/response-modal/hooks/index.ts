import { useSendSuggesterRequest } from 'features/suggester-page/hooks/suggesterApi.hooks';
import { useSelectLastSuggesterChatMessage } from 'features/suggester-page/stores/suggester-chat/selectors';
import { TAreaFieldValue } from 'features/suggester-page/types/areaField.types';
import { useAddErrorMessageToNotifications } from 'hooks/notifications.hooks';

type TUseGetSubmit = (args: {
    areaValue: TAreaFieldValue;
    onClose: VoidFunction;
}) => VoidFunction;

export const useGetSubmit: TUseGetSubmit = ({ areaValue, onClose }) => {
    const lastChatMessage = useSelectLastSuggesterChatMessage();
    const sendSuggesterRequest = useSendSuggesterRequest();
    const addErrorMessageToNotifications = useAddErrorMessageToNotifications();

    return () => {
        const prompt = lastChatMessage?.text;

        if (!prompt) {
            onClose();
            addErrorMessageToNotifications({
                message: 'There is no any prompt from you to send',
            });

            return;
        }

        sendSuggesterRequest({
            areaValue,
            prompt,
            callback: onClose,
        });
    };
};
