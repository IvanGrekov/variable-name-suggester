import { useState, useEffect } from 'react';

import { SCREEN_SIZE_NUMBERS } from 'constants/screenSizes.constants';
import { EScreenSizeNames } from 'types/screenSizes.types';
import { getWindowWidth } from 'utils/windowSize.utils';

export const useWindowSize = (): EScreenSizeNames => {
    const [screenSize, setScreenSize] = useState(getWindowWidth());

    useEffect(() => {
        const listener = (): void => {
            setScreenSize(getWindowWidth());
        };

        window.addEventListener('resize', listener);

        return (): void => {
            window.removeEventListener('resize', listener);
        };
    }, []);

    for (const screenSizeKey of Object.keys(EScreenSizeNames)) {
        const key = screenSizeKey as keyof typeof EScreenSizeNames;
        if (screenSize <= SCREEN_SIZE_NUMBERS[key]) {
            return EScreenSizeNames[key];
        }
    }

    return EScreenSizeNames.XL;
};
