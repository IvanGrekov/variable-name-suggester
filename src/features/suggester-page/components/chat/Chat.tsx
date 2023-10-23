import { useRef } from 'react';

import cx from 'classnames';

import styles from 'features/suggester-page/components/chat/Chat.module.scss';
import {
    useBottomChatScroll,
    useGetResponseModal,
} from 'features/suggester-page/components/chat/hooks';
import ChatMessage from 'features/suggester-page/components/chat-message/ChatMessage';
import ResponseModal from 'features/suggester-page/components/response-modal/ResponseModal';
import SendMessageField from 'features/suggester-page/components/send-message-field/SendMessageField';
import { useSelectSuggesterChat } from 'features/suggester-page/stores/suggester-chat/selectors';
import { TAreaFieldValue } from 'features/suggester-page/types/areaField.types';
import { getIsAdmin, getIsUser } from 'utils/userRole.utils';

interface IChatProps {
    areaValue: TAreaFieldValue;
}

export default function Chat({ areaValue }: IChatProps): JSX.Element {
    const listRef = useRef<HTMLDivElement>(null);

    const chat = useSelectSuggesterChat();

    useBottomChatScroll(listRef);

    const responseModalProps = useGetResponseModal();

    return (
        <>
            <div
                className={cx(styles.chat, {
                    [styles['chat--disabled']]: !areaValue.length,
                })}
            >
                <div ref={listRef} className={styles['message-list']}>
                    {chat.map((message) => {
                        const { id, isRemoving, isLoading, userRole } = message;

                        return (
                            <ChatMessage
                                key={id}
                                {...message}
                                areaValue={areaValue}
                                className={cx(styles.message, {
                                    [styles['message--removing']]: isRemoving,
                                    [styles['message--loading']]: isLoading,
                                    [styles['message--admin']]:
                                        getIsAdmin(userRole),
                                    [styles['message--user']]:
                                        getIsUser(userRole),
                                })}
                            />
                        );
                    })}
                </div>

                <SendMessageField
                    areaValue={areaValue}
                    className={styles['send-message-field']}
                />
            </div>

            <ResponseModal {...responseModalProps} areaValue={areaValue} />
        </>
    );
}
