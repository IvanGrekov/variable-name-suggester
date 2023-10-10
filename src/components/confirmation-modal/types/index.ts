import { IButtonProps } from 'components/button/types';
import { TModalProps } from 'components/modal/types';

export interface IConfirmActionProps {
    confirmText?: string;
    confirmColor?: IButtonProps['color'];
    isLoading?: boolean;
    onConfirm: () => void;
}

export interface ICancelActionProps {
    cancelText?: string;
    onCancel: () => void;
}

export type TConfirmationModalProps = Omit<TModalProps, 'actions'> &
    IConfirmActionProps &
    ICancelActionProps;
