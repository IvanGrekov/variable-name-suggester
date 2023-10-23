import { TRIAL_COUNT } from 'features/suggester-page/constants/trialGuard.constants';
import {
    useSelectSuggesterChatCounter,
    useSelectIsFullSuggesterVersion,
} from 'features/suggester-page/stores/suggester-chat/selectors';

export const useIsAppAccessExpired = (): boolean => {
    const counter = useSelectSuggesterChatCounter();
    const isFullVersion = useSelectIsFullSuggesterVersion();

    const isCounterExpired = counter >= TRIAL_COUNT;

    if (isCounterExpired) {
        return !isFullVersion;
    }

    return isCounterExpired;
};
