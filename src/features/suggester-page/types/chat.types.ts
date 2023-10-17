import { EUserRole } from 'types/user.types';

export interface IChatMessage {
    id: string;
    text: string;
    userRole: EUserRole;
    isLoading?: boolean;
}

export type TChat = IChatMessage[];
