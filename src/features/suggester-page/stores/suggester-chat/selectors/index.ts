import { useSuggesterChatStore } from 'features/suggester-page/stores/suggester-chat';
import {
    ISuggesterChatState,
    TAddMessage,
    TRemoveMessage,
    TResetChat,
} from 'features/suggester-page/stores/suggester-chat/types/store.types';

export const useSelectSuggesterChat = (): ISuggesterChatState['chat'] => {
    const chat = useSuggesterChatStore((state) => state.chat);

    return chat;
};

export const useSelectIsSuggesterChatEmpty = (): boolean => {
    const chat = useSuggesterChatStore((state) => state.chat);

    return chat.length === 0;
};

export const useSelectAddSuggesterChatMessage = (): TAddMessage => {
    const addMessage = useSuggesterChatStore((state) => state.addMessage);

    return addMessage;
};

export const useSelectRemoveSuggesterChatMessage = (): TRemoveMessage => {
    const removeMessage = useSuggesterChatStore((state) => state.removeMessage);

    return removeMessage;
};

export const useSelectResetSuggesterChat = (): TResetChat => {
    const resetChat = useSuggesterChatStore((state) => state.resetChat);

    return resetChat;
};
