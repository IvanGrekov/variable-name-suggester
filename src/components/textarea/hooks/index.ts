import { useId, useRef, useState, useEffect } from 'react';

import {
    ITextareaHandlersArgs,
    IUseTextareaResult,
} from 'components/textarea/types';
import { getTextareaHandlers } from 'components/textarea/utils';

type TUseTextarea = (
    args: ITextareaHandlersArgs & {
        value?: string | number | readonly string[];
    },
) => IUseTextareaResult;

export const useTextarea: TUseTextarea = ({ value, ...args }) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const id = useId();

    const [isTextareaFilled, setIsTextareaFilled] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (value === '') {
            setIsTextareaFilled(false);
        } else {
            setIsTextareaFilled(Boolean(textareaRef.current?.value));
        }
    }, [textareaRef.current?.value, value]);

    const textareaHandlers = getTextareaHandlers({
        setIsFocused,
        setIsTextareaFilled,
        ...args,
    });

    return {
        textareaRef,
        id,
        isTextareaFilled,
        isFocused: isFocused || isTextareaFilled,
        ...textareaHandlers,
    };
};
