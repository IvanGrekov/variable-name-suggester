import { RefObject } from 'react';

export const scrollToListBottom = (
    listRef: RefObject<HTMLDivElement>,
): void => {
    if (listRef.current) {
        listRef.current.scroll({
            top: listRef.current.scrollHeight,
            behavior: 'smooth',
        });
    }
};
