import { SCROLL_TOP_BUTTON_VISIBILITY_OFFSET } from 'components/scroll-top-button/constants';

export const getIsScrollTopButtonVisible = (): boolean => {
    return window.pageYOffset > SCROLL_TOP_BUTTON_VISIBILITY_OFFSET;
};

export const scrollToTop = (): void => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
