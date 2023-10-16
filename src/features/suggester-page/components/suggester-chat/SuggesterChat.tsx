import cx from 'classnames';

import Textarea from 'components/textarea/Textarea';
import styles from 'features/suggester-page/components/suggester-chat/SuggesterChat.module.scss';
import { TAreaFieldValue } from 'features/suggester-page/types/areaField';

interface ISuggesterChatProps {
    areaValue: TAreaFieldValue;
}

export default function SuggesterChat({
    areaValue,
}: ISuggesterChatProps): JSX.Element {
    areaValue;

    return (
        <div
            className={cx(styles.chat, {
                [styles['chat--disabled']]: !areaValue.length,
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
