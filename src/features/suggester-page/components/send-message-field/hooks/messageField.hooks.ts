import { useSelectLastSuggesterChatMessage } from 'features/suggester-page/stores/suggester-chat/selectors';

export const useIsFieldDisabled = (): boolean => {
    const lastMessage = useSelectLastSuggesterChatMessage();

    if (!lastMessage) {
        return false;
    }

    const { isLoading, isRemoving } = lastMessage;

    return Boolean(isLoading || isRemoving);
};
