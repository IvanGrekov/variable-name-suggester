import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';

import {
    ISuggesterChatState,
    TSuggesterChatStore,
} from 'features/suggester-page/stores/suggester-chat/types/store.types';
import { createChatMessage } from 'features/suggester-page/stores/suggester-chat/utils';

const initialSuggesterChatState: ISuggesterChatState = {
    chat: [],
};

export const useSuggesterChatStore = create<TSuggesterChatStore>()(
    devtools(
        persist(
            (set, get) => ({
                ...initialSuggesterChatState,

                addMessage: (args): void => {
                    const newMessage = createChatMessage(args);
                    const newChat = [...get().chat, newMessage];

                    set({
                        chat: newChat,
                    });
                },

                removeMessage: (messageId): void => {
                    const newChat = get().chat.filter(
                        ({ id }) => id !== messageId,
                    );

                    set({
                        chat: newChat,
                    });
                },

                resetChat: (): void => {
                    set(initialSuggesterChatState);
                },
            }),
            {
                name: 'suggester-chat',
                storage: createJSONStorage(() => localStorage),
            },
        ),
    ),
);