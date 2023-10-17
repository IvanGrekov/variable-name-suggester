import { v4 as uuidv4 } from 'uuid';

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
