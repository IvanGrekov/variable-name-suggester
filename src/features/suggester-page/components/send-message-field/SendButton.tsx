import IconButton from 'components/button/IconButton';
import SendIcon from 'components/icons/SendIcon';
import styles from 'features/suggester-page/components/send-message-field/SendMessageField.module.scss';
import { useSelectAddSuggesterChatMessage } from 'features/suggester-page/stores/suggester-chat/selectors';
import { EUserRole } from 'types/user.types';

interface ISendButtonProps {
    value: string;
    error: string;
    setValue: (value: string) => void;
    setError: (error: string) => void;
}

export default function SendButton({
    value,
    error,
    setValue,
    setError,
}: ISendButtonProps): JSX.Element {
    const addSuggesterChatMessage = useSelectAddSuggesterChatMessage();

    const onClick = (): void => {
        if (!value) {
            setError('Message is empty');
        } else {
            addSuggesterChatMessage({ text: value, userRole: EUserRole.USER });
            setValue('');
        }
    };

    return (
        <IconButton
            Icon={SendIcon}
            title="Send"
            isDisabled={!!error}
            onClick={onClick}
            className={styles['send-button']}
        />
    );
}
