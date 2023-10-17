import { IChatMessage } from 'features/suggester-page/stores/suggester-chat/types/chat.types';
import { EUserRole } from 'types/user.types';

export interface ISuggesterChatState {
    chat: IChatMessage[];
}

export type TAddMessage = (args: { text: string; userRole: EUserRole }) => void;
export type TAddLoadingMessage = (args: { userRole: EUserRole }) => void;
export type TRemoveMessage = (messageId: string) => void;
export type TEditMessage = (
    args: Partial<IChatMessage> & {
        id: string;
    },
) => void;
export type TResetChat = () => void;

interface ISuggesterChatActions {
    addMessage: TAddMessage;
    addLoadingMessage: TAddLoadingMessage;
    removeMessage: TRemoveMessage;
    editMessage: TEditMessage;
    resetChat: TResetChat;
}

export type TSuggesterChatStore = ISuggesterChatState & ISuggesterChatActions;
