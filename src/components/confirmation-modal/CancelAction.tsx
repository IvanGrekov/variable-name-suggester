import Button from 'components/button/Button';
import { ICancelActionProps } from 'components/confirmation-modal/types';

export default function CancelAction({
    cancelText = 'Cancel',
    onCancel,
}: ICancelActionProps): JSX.Element {
    return <Button text={cancelText} variant="outlined" onClick={onCancel} />;
}
