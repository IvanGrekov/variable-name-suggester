import cx from 'classnames';

// import Textarea from 'components/textarea/Textarea';
import styles from 'features/suggester-page/components/suggester-chat/SuggesterChat.module.scss';
import { useResetSuggesterChat } from 'features/suggester-page/components/suggester-chat/hooks';
import SuggesterChatEmptyState from 'features/suggester-page/components/suggester-chat-empty-state/SuggesterChatEmptyState';
import { useSelectIsSuggesterChatEmpty } from 'features/suggester-page/stores/suggester-chat/selectors';
import { TAreaFieldValue } from 'features/suggester-page/types/areaField';

interface ISuggesterChatProps {
    areaValue: TAreaFieldValue;
}

export default function SuggesterChat({
    areaValue,
}: ISuggesterChatProps): JSX.Element {
    const isChatEmpty = useSelectIsSuggesterChatEmpty();

    useResetSuggesterChat(areaValue);

    return (
        <div
            className={cx(styles.chat, {
                [styles['chat--disabled']]: !areaValue.length,
            })}
        >
            {isChatEmpty ? (
                <SuggesterChatEmptyState className={styles['empty-state']} />
            ) : (
                <></>
            )}
            {/* <Textarea
                placeholder="Description about variable..."
                label="Description"
                isFullWidth={true}
                disableResize={true}
                rows={7}
            /> */}
        </div>
    );
}
