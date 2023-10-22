import { useRef, useState, useEffect, RefObject } from 'react';

import { IModalBaseProps } from 'components/modal/types';
import { useAppTabsContext } from 'contexts/AppTabsContext';
import { EAppTabs } from 'features/app-tabs/types/appTabs.types';
import { useSelectSuggesterChat } from 'features/suggester-page/stores/suggester-chat/selectors';
import { EUserRole } from 'types/user.types';

const useGetIsLastMessageFromUser = (): boolean => {
    const chat = useSelectSuggesterChat();

    return chat.at(-1)?.userRole === EUserRole.USER;
};

export const useGetResponseModal = (): IModalBaseProps => {
    const isLastMessageFromUser = useGetIsLastMessageFromUser();
    const shouldShowModal = useRef(isLastMessageFromUser);

    const [isOpen, setIsOpen] = useState(false);

    const { currentTab } = useAppTabsContext();

    useEffect(() => {
        const isSuggesterPage = currentTab === EAppTabs.SUGGESTER;

        if (!isSuggesterPage) {
            return;
        }

        if (shouldShowModal.current) {
            shouldShowModal.current = false;
            setIsOpen(true);
        }
    }, [currentTab]);

    return { isOpen, onClose: () => setIsOpen(false) };
};

export const useBottomChatScroll = (
    listRef: RefObject<HTMLDivElement>,
): void => {
    const chat = useSelectSuggesterChat();

    useEffect(() => {
        if (listRef.current) {
            listRef.current.scroll({
                top: listRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [listRef, chat]);
};
