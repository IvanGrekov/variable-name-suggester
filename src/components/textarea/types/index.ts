import {
    TextareaHTMLAttributes,
    FocusEventHandler,
    ChangeEventHandler,
    MouseEventHandler,
    RefObject,
} from 'react';

import { TTextFieldBaseProps } from 'types/textField.types';

export type TTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
    TTextFieldBaseProps & {
        disableResize?: boolean;
    };

export interface ITextareaHandlers {
    onTextareaFocus: FocusEventHandler<HTMLTextAreaElement>;
    onTextareaBlur: FocusEventHandler<HTMLTextAreaElement>;
    onTextareaClick?: MouseEventHandler<HTMLTextAreaElement>;
    onTextareaChange: ChangeEventHandler<HTMLTextAreaElement>;
}

export interface ITextareaHandlersArgs {
    onFocus?: ITextareaHandlers['onTextareaFocus'];
    onBlur?: ITextareaHandlers['onTextareaBlur'];
    onClick?: ITextareaHandlers['onTextareaClick'];
    onChange?: ITextareaHandlers['onTextareaChange'];
}

export interface IUseTextareaResult extends ITextareaHandlers {
    textareaRef: RefObject<HTMLTextAreaElement>;
    id: string;
    isFocused: boolean;
    isTextareaFilled: boolean;
}
