import { MAX_MESSAGE_LENGTH } from 'features/suggester-page/components/send-message-field/constants';

export const getIsValueTooLong = (value: string): boolean => {
    return value.length > MAX_MESSAGE_LENGTH;
};
