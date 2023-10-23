import Button from 'components/button/Button';
import Modal from 'components/modal/Modal';
import { IModalBaseProps } from 'components/modal/types';

export default function GetFullVersionModal({
    isOpen,
    onClose,
}: IModalBaseProps): JSX.Element {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Enter password to get full version."
            actions={
                <>
                    <Button text="Cancel" onClick={onClose} />

                    <Button variant="contained" text="Confirm" />
                </>
            }
        />
    );
}
