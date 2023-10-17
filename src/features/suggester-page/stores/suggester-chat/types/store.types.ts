import { IChatMessage } from 'features/suggester-page/stores/suggester-chat/types/chat.types';
import { EUserRole } from 'types/user.types';

export interface ISuggesterChatState {
    chat: IChatMessage[];
}

export type TAddMessage = (args: { text: string; userRole: EUserRole }) => void;
export type TRemoveMessage = (messageId: string) => void;
export type TResetChat = () => void;

interface ISuggesterChatActions {
    addMessage: TAddMessage;
    removeMessage: TRemoveMessage;
    resetChat: TResetChat;
}

export type TSuggesterChatStore = ISuggesterChatState & ISuggesterChatActions;
