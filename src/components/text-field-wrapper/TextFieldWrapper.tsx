import cx from 'classnames';

import styles from 'components/text-field-wrapper/TextFieldWrapper.module.scss';
import { TInputContainerProps } from 'types/input.types';

type TTextFieldWrapperProps = Pick<
    TInputContainerProps,
    'children' | 'disabled' | 'isFullWidth' | 'className'
>;

export default function TextFieldWrapper({
    children,
    disabled,
    isFullWidth,
    className,
}: TTextFieldWrapperProps): JSX.Element {
    return (
        <div
            className={cx(
                styles.wrapper,
                {
                    [styles['wrapper--disabled']]: disabled,
                    [styles['wrapper--full-width']]: isFullWidth,
                },
                className,
            )}
        >
            {children}
        </div>
    );
}
