import { useSuggesterChatStore } from 'features/suggester-page/stores/suggester-chat';
import {
    ISuggesterChatState,
    TSetIsFullVersion,
    TIncreaseCounter,
    TAddMessage,
    TAddLoadingMessage,
    TEditMessage,
    TRemoveMessage,
    TResetChat,
} from 'features/suggester-page/stores/suggester-chat/types';
import { IChatMessage } from 'features/suggester-page/types/chat.types';

export const useSelectSuggesterChat = (): ISuggesterChatState['chat'] => {
    const chat = useSuggesterChatStore((state) => state.chat);

    return chat;
};

export const useSelectSuggesterChatCounter =
    (): ISuggesterChatState['counter'] => {
        const counter = useSuggesterChatStore((state) => state.counter);

        return counter;
    };

export const useSelectIncreaseChatCounter = (): TIncreaseCounter => {
    const increaseCounter = useSuggesterChatStore(
        (state) => state.increaseCounter,
    );

    return increaseCounter;
};

export const useSelectIsFullSuggesterVersion =
    (): ISuggesterChatState['isFullVersion'] => {
        const isFullVersion = useSuggesterChatStore(
            (state) => state.isFullVersion,
        );

        return isFullVersion;
    };

export const useSelectSetIsFullSuggesterVersion = (): TSetIsFullVersion => {
    const setIsFullVersion = useSuggesterChatStore(
        (state) => state.setIsFullVersion,
    );

    return setIsFullVersion;
};

export const useSelectLastSuggesterChatMessage = ():
    | IChatMessage
    | undefined => {
    const chat = useSuggesterChatStore((state) => state.chat);

    return chat.at(-1);
};

export const useSelectIsSuggesterChatEmpty = (): boolean => {
    const chat = useSuggesterChatStore((state) => state.chat);

    return chat.length === 0;
};

export const useSelectAddSuggesterChatMessage = (): TAddMessage => {
    const addMessage = useSuggesterChatStore((state) => state.addMessage);

    return addMessage;
};

export const useSelectAddLoadingSuggesterChatMessage =
    (): TAddLoadingMessage => {
        const addLoadingMessage = useSuggesterChatStore(
            (state) => state.addLoadingMessage,
        );

        return addLoadingMessage;
    };

export const useSelectEditSuggesterChatMessage = (): TEditMessage => {
    const editMessage = useSuggesterChatStore((state) => state.editMessage);

    return editMessage;
};

export const useSelectRemoveSuggesterChatMessage = (): TRemoveMessage => {
    const removeMessage = useSuggesterChatStore((state) => state.removeMessage);

    return removeMessage;
};

export const useSelectResetSuggesterChat = (): TResetChat => {
    const resetChat = useSuggesterChatStore((state) => state.resetChat);

    return resetChat;
};
