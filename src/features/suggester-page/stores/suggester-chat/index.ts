import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';

import { BASE_TRANSITION_DURATION } from 'constants/animationDuration.constants';
import {
    ISuggesterChatState,
    TSuggesterChatStore,
} from 'features/suggester-page/stores/suggester-chat/types';
import {
    createChatMessage,
    initializeMessageRemoving,
    filterMessages,
    mergeStates,
} from 'features/suggester-page/stores/suggester-chat/utils';
import { EUserRole } from 'types/user.types';

const initialSuggesterChatState: ISuggesterChatState = {
    chat: [],
    counter: 0,
    isFullVersion: false,
};

export const useSuggesterChatStore = create<TSuggesterChatStore>()(
    devtools(
        persist(
            (set, get) => ({
                ...initialSuggesterChatState,

                addMessage: (args): void => {
                    const newMessage = createChatMessage(args);
                    const newChat = [...get().chat, newMessage];
                    let newCounter = get().counter;

                    if (newMessage.userRole === EUserRole.USER) {
                        newCounter += 1;
                    }

                    set({
                        chat: newChat,
                        counter: newCounter,
                    });
                },

                addLoadingMessage: ({ id, userRole }): void => {
                    const newChat = [
                        ...get().chat,
                        {
                            id,
                            userRole,
                            text: '',
                            isLoading: true,
                        },
                    ];

                    set({
                        chat: newChat,
                    });
                },

                editMessage: ({ id, ...newMessage }): void => {
                    const newChat = get().chat.map((message) =>
                        message.id === id
                            ? { ...message, ...newMessage }
                            : message,
                    );

                    set({
                        chat: newChat,
                    });
                },

                removeMessage: (messageId): void => {
                    const messages = get().chat;

                    const chat = initializeMessageRemoving({
                        messages,
                        messageId,
                    });

                    setTimeout(() => {
                        set({
                            chat: filterMessages({
                                messages,
                                messageId,
                            }),
                        });
                    }, BASE_TRANSITION_DURATION);

                    set({
                        chat,
                    });
                },

                resetChat: (): void => {
                    set({
                        chat: initialSuggesterChatState.chat,
                    });
                },

                setIsFullVersion: (value): void => {
                    set({
                        isFullVersion: value,
                    });
                },
            }),
            {
                name: 'suggester-chat',
                storage: createJSONStorage(() => localStorage),
                merge(prevStore, store) {
                    return mergeStates({
                        prevStore,
                        store,
                    });
                },
            },
        ),
    ),
);
