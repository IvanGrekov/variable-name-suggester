import { useState, useEffect } from 'react';

import {
    getIsScrollTopButtonVisible,
    scrollToTop,
} from 'components/scroll-top-button/utils';

type TUseScrollTopButton = () => {
    isVisible: boolean;
    onClick: VoidFunction;
};

export const useScrollTopButton: TUseScrollTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(getIsScrollTopButtonVisible());

        const onScroll = (): void => {
            setIsVisible(getIsScrollTopButtonVisible());
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return {
        isVisible,
        onClick: scrollToTop,
    };
};
