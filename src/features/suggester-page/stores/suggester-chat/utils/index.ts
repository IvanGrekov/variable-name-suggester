import { v4 as uuidv4 } from 'uuid';

import { TSuggesterChatStore } from 'features/suggester-page/stores/suggester-chat/types';
import { IChatMessage } from 'features/suggester-page/types/chat.types';
import { EUserRole } from 'types/user.types';

type TCreateChatMessage = (args: {
    text: string;
    userRole: EUserRole;
}) => IChatMessage;

export const createChatMessage: TCreateChatMessage = ({ text, userRole }) => {
    return {
        id: uuidv4(),
        text,
        userRole,
    };
};

type TMergeStates = (args: {
    prevStore: unknown;
    store: TSuggesterChatStore;
}) => TSuggesterChatStore;

export const mergeStates: TMergeStates = ({ prevStore, store }) => {
    if (!prevStore) {
        return store;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const prevChat = prevStore.chat || [];
    const currentChat = store.chat;
    const chat = [...prevChat, ...currentChat].filter(
        ({ isRemoving, isLoading }) => !isRemoving && !isLoading,
    );

    return {
        ...store,
        ...prevStore,
        chat,
    };
};

type TFilterMessages = (args: {
    messages: IChatMessage[];
    messageId: string;
}) => IChatMessage[];

export const filterMessages: TFilterMessages = ({ messages, messageId }) => {
    return messages.filter(({ id }) => id !== messageId);
};

export const initializeMessageRemoving: TFilterMessages = ({
    messages,
    messageId,
}) => {
    return messages.map((message) => {
        if (message.id === messageId) {
            return {
                ...message,
                isRemoving: true,
            };
        }

        return message;
    });
};
