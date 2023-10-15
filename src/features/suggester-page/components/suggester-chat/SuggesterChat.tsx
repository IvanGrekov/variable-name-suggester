import cx from 'classnames';

import Textarea from 'components/textarea/Textarea';
import styles from 'features/suggester-page/components/suggester-chat/SuggesterChat.module.scss';

interface ISuggesterChatProps {
    areaValue: string;
}

export default function SuggesterChat({
    areaValue,
}: ISuggesterChatProps): JSX.Element {
    areaValue;

    return (
        <div
            className={cx(styles.chat, {
                [styles['chat--disabled']]: !areaValue,
            })}
        >
            <Textarea
                placeholder="Description about variable..."
                label="Description"
                isFullWidth={true}
                disableResize={true}
                rows={7}
            />
        </div>
    );
}
