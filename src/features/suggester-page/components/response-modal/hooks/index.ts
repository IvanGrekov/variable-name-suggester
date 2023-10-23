import { useSendSuggesterRequest } from 'features/suggester-page/hooks/suggesterApi.hooks';
import { useSelectLastSuggesterChatMessage } from 'features/suggester-page/stores/suggester-chat/selectors';
import { TAreaFieldValue } from 'features/suggester-page/types/areaField.types';

type TUseGetSubmit = (args: {
    areaValue: TAreaFieldValue;
    onClose: VoidFunction;
}) => VoidFunction;

export const useGetSubmit: TUseGetSubmit = ({ areaValue, onClose }) => {
    const lastChatMessage = useSelectLastSuggesterChatMessage();
    const sendSuggesterRequest = useSendSuggesterRequest();

    return () => {
        const prompt = lastChatMessage?.text;

        if (!prompt) {
            onClose();

            return;
        }

        sendSuggesterRequest({
            areaValue,
            prompt,
            callback: onClose,
        });
    };
};
