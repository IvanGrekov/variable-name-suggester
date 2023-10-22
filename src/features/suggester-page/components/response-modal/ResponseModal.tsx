import Button from 'components/button/Button';
import Modal from 'components/modal/Modal';
import { IModalBaseProps } from 'components/modal/types';

export default function ResponseModal(
    modalBaseProps: IModalBaseProps,
): JSX.Element {
    return (
        <Modal
            {...modalBaseProps}
            title="Your last message without AI response. Do you want to get it?"
            actions={
                <>
                    <Button
                        text="Cancel"
                        color="red"
                        onClick={modalBaseProps.onClose}
                    />

                    <Button variant="contained" text="Get Response" />
                </>
            }
        />
    );
}
