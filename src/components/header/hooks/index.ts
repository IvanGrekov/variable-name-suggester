import { MOBILE_SIDEBAR_SCREEN_SIZES } from 'constants/mobileSidebar.constants';
import { useWindowSize } from 'hooks/windowSize.hooks';

export const useShouldShowThemeSwitcher = (): boolean => {
    const windowSize = useWindowSize();

    return !MOBILE_SIDEBAR_SCREEN_SIZES.includes(windowSize);
};
