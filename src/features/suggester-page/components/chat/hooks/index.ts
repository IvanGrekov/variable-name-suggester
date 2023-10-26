import { useRef, useState, useEffect, RefObject } from 'react';

import { IModalBaseProps } from 'components/modal/types';
import { useAppTabsContext } from 'contexts/AppTabsContext';
import { EAppTabs } from 'features/app-tabs/types/appTabs.types';
import { scrollToListBottom } from 'features/suggester-page/components/chat/utils';
import {
    useSelectSuggesterChat,
    useSelectLastSuggesterChatMessage,
} from 'features/suggester-page/stores/suggester-chat/selectors';
import { EUserRole } from 'types/user.types';

export const useBottomChatScroll = (
    listRef: RefObject<HTMLDivElement>,
): VoidFunction => {
    const chat = useSelectSuggesterChat();
    const currentLength = useRef(chat.length);

    useEffect(() => {
        scrollToListBottom(listRef);
    }, [listRef]);

    useEffect(() => {
        const newLength = chat.length;

        if (newLength > currentLength.current) {
            scrollToListBottom(listRef);
        }

        currentLength.current = chat.length;
    }, [listRef, chat]);

    return () => scrollToListBottom(listRef);
};

const useGetIsLastMessageFromUser = (): boolean => {
    const lastMessage = useSelectLastSuggesterChatMessage();

    const isFromUser = lastMessage?.userRole === EUserRole.USER;
    const isTextEmpty = !lastMessage?.text;

    return Boolean(isFromUser && !isTextEmpty);
};

export const useResponseModal = (): IModalBaseProps => {
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
