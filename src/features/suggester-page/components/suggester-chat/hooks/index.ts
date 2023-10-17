import { useEffect } from 'react';

import { useSelectResetSuggesterChat } from 'features/suggester-page/stores/suggester-chat/selectors';
import { TAreaFieldValue } from 'features/suggester-page/types/areaField';

export const useResetSuggesterChat = (areaValue: TAreaFieldValue): void => {
    const resetChat = useSelectResetSuggesterChat();

    useEffect(() => {
        if (areaValue.length === 0) {
            resetChat();
        }
    }, [areaValue, resetChat]);
};
