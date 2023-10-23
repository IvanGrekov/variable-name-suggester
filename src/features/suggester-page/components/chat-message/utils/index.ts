import { TChat, IChatMessage } from 'features/suggester-page/types/chat.types';
import { EUserRole } from 'types/user.types';

type TGetLastUserCharMessage = (chat: TChat) => IChatMessage | undefined;

export const getLastUserCharMessage: TGetLastUserCharMessage = (chat) => {
    for (let i = chat.length - 1; i >= 0; i--) {
        if (chat[i].userRole === EUserRole.USER) {
            return chat[i];
        }
    }

    return undefined;
};
