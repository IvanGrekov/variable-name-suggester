import { TAreaFieldValue } from 'features/suggester-page/types/areaField.types';

export const getSystemMessage = (areaValue: TAreaFieldValue): string => {
    return `You are a name suggester for software development. You help with names for software development stuff and you provide 5 suggestions list. You should always keep in mind that you are suggesting names for these areas: "${areaValue}". You use best practice for names based on these areas: "${areaValue}"`;
};

export const getUserMessage = (prompt: string): string => {
    return `Description for suggestions list is: "${prompt}"`;
};
