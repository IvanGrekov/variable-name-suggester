import Button from 'components/button/Button';
import Modal from 'components/modal/Modal';
import { IModalBaseProps } from 'components/modal/types';
import TextField from 'components/text-field/TextField';
import { usePasswordField } from 'features/suggester-page/components/get-full-version-modal/hooks';

export default function GetFullVersionModal({
    isOpen,
    onClose,
}: IModalBaseProps): JSX.Element {
    const { value, error, onChange, onSubmit } = usePasswordField(onClose);

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Enter password to get full version."
            actions={
                <>
                    <Button text="Cancel" onClick={onClose} />

                    <Button
                        variant="contained"
                        text="Confirm"
                        onClick={onSubmit}
                    />
                </>
            }
        >
            <TextField
                value={value}
                error={error}
                type="password"
                placeholder="Enter password"
                label="Password"
                isFullWidth={true}
                onChange={onChange}
                onKeyDown={(e): void => {
                    if (e.key === 'Enter') {
                        onSubmit();
                    }
                }}
            />
        </Modal>
    );
}
