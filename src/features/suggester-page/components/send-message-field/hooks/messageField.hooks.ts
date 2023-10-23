import { useIsAppAccessExpired } from 'features/suggester-page/hooks/trialGuard.hooks';
import { useSelectLastSuggesterChatMessage } from 'features/suggester-page/stores/suggester-chat/selectors';

export const useIsFieldDisabled = (): boolean => {
    const isAppAccessExpired = useIsAppAccessExpired();
    const lastMessage = useSelectLastSuggesterChatMessage();

    if (isAppAccessExpired) {
        return true;
    }

    if (!lastMessage) {
        return false;
    }

    const { isLoading, isRemoving } = lastMessage;

    return Boolean(isLoading || isRemoving);
};
