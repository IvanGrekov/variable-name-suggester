import { useLayoutEffect } from 'react';

import { getUserTheme } from 'components/theme-switcher/utils';
import { useLocalStorage } from 'hooks/localStorage.hooks';
import { IUseLocalStorageResult } from 'types/localStorage.types';
import { ETheme } from 'types/theme.types';

export const useUserThemeValue = (): IUseLocalStorageResult<ETheme> => {
    const { localStorageValue, setLocalStorageValue } = useLocalStorage({
        key: 'theme',
        initialValue: getUserTheme(),
    });

    useLayoutEffect(() => {
        const root = window.document.documentElement;

        if (localStorageValue === ETheme.DARK) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [localStorageValue]);

    return {
        localStorageValue,
        setLocalStorageValue,
    };
};
