import { EUserRole } from 'types/user.types';

export const getIsAdmin = (userRole: EUserRole): boolean => {
    return userRole === EUserRole.ADMIN;
};

export const getIsUser = (userRole: EUserRole): boolean => {
    return userRole === EUserRole.USER;
};
