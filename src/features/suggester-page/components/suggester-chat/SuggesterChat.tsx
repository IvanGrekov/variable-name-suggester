import cx from 'classnames';

// import Textarea from 'components/textarea/Textarea';
import styles from 'features/suggester-page/components/suggester-chat/SuggesterChat.module.scss';
import { useSelectSuggesterChat } from 'features/suggester-page/stores/suggester-chat/selectors';

export default function SuggesterChat(): JSX.Element {
    const chat = useSelectSuggesterChat();

    return (
        <div
            className={cx(styles.chat, {
                [styles['chat--disabled']]: !chat.length,
            })}
        >
            {chat.map(({ id, text, userRole }) => (
                <div key={id}>{`${userRole}: ${text}`}</div>
            ))}
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
