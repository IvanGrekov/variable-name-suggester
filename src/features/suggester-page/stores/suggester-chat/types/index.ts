import { IChatMessage } from 'features/suggester-page/types/chat.types';
import { EUserRole } from 'types/user.types';

export interface ISuggesterChatState {
    chat: IChatMessage[];
    counter: number;
    isFullVersion: boolean;
}

export type TAddMessage = (args: { text: string; userRole: EUserRole }) => void;
export type TAddLoadingMessage = (args: {
    id: string;
    userRole: EUserRole;
}) => void;
export type TRemoveMessage = (messageId: string) => void;
export type TEditMessage = (
    args: Partial<IChatMessage> & {
        id: string;
    },
) => void;
export type TResetChat = () => void;
export type TSetIsFullVersion = (value: boolean) => void;

interface ISuggesterChatActions {
    addMessage: TAddMessage;
    addLoadingMessage: TAddLoadingMessage;
    removeMessage: TRemoveMessage;
    editMessage: TEditMessage;
    resetChat: TResetChat;
    setIsFullVersion: TSetIsFullVersion;
}

export type TSuggesterChatStore = ISuggesterChatState & ISuggesterChatActions;
