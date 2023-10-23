import { useState, ChangeEvent } from 'react';

import { useSelectSetIsFullSuggesterVersion } from 'features/suggester-page/stores/suggester-chat/selectors';
import { useAddSuccessMessageToNotifications } from 'hooks/notifications.hooks';

type TUsePasswordField = (onClose: VoidFunction) => {
    value: string;
    error: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: VoidFunction;
};

export const usePasswordField: TUsePasswordField = (onClose) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const setIsFullVersion = useSelectSetIsFullSuggesterVersion();
    const addSuccessMessage = useAddSuccessMessageToNotifications();

    const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value);
    };

    const onSubmit = (): void => {
        const isCorrect =
            value === process.env.NEXT_PUBLIC_FULL_VERSION_KEY_WORD;

        if (isCorrect) {
            setError('');
            setValue('');
            setIsFullVersion(true);
            onClose();
            addSuccessMessage({
                message: 'You have successfully activated the full version',
            });
        } else {
            setError('Incorrect password');
        }
    };

    return {
        value,
        error,
        onChange,
        onSubmit,
    };
};
