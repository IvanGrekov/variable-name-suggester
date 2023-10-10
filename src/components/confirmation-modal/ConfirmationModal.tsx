import CancelAction from 'components/confirmation-modal/CancelAction';
import ConfirmAction from 'components/confirmation-modal/ConfirmAction';
import { TConfirmationModalProps } from 'components/confirmation-modal/types';
import Modal from 'components/modal/Modal';

export default function ConfirmationModal({
    title = 'Confirm Action',
    confirmText,
    cancelText,
    confirmColor,
    isLoading,
    onConfirm,
    onCancel,
    ...rest
}: TConfirmationModalProps): JSX.Element {
    return (
        <Modal
            {...rest}
            title={title}
            actions={
                <>
                    <ConfirmAction
                        confirmText={confirmText}
                        confirmColor={confirmColor}
                        isLoading={isLoading}
                        onConfirm={onConfirm}
                    />
                    <CancelAction cancelText={cancelText} onCancel={onCancel} />
                </>
            }
        />
    );
}
