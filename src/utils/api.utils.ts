import { TAreaFieldValue } from 'features/suggester-page/types/areaField.types';

export const getSystemMessage = (areaValue: TAreaFieldValue): string => {
    return `You are a variable name suggester. I need help with variable names in the following area: ${areaValue}. I will provide you a description and you will give me a 5 suggestions list for variable name`;
};

export const getUserMessage = (prompt: string): string => {
    return `My prompt is: ${prompt}`;
};
