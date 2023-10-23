import Button from 'components/button/Button';
import Modal from 'components/modal/Modal';
import { IModalBaseProps } from 'components/modal/types';
import { useGetSubmit } from 'features/suggester-page/components/response-modal/hooks';
import { TAreaFieldValue } from 'features/suggester-page/types/areaField.types';

interface IResponseModal extends IModalBaseProps {
    areaValue: TAreaFieldValue;
}

export default function ResponseModal({
    areaValue,
    isOpen,
    onClose,
}: IResponseModal): JSX.Element {
    const onSubmit = useGetSubmit({ areaValue, onClose });

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Your last message without AI response. Do you want to get it?"
            actions={
                <>
                    <Button text="Cancel" color="red" onClick={onClose} />

                    <Button
                        variant="contained"
                        text="Get Response"
                        onClick={onSubmit}
                    />
                </>
            }
        />
    );
}
