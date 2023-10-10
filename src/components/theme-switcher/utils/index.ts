import { ETheme } from 'types/theme.types';

export const getUserTheme = (): ETheme => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return ETheme.DARK;
    }

    return ETheme.LIGHT;
};
