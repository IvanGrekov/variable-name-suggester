import cx from 'classnames';

import IconButton from 'components/button/IconButton';
import styles from 'components/checkbox/Checkbox.module.scss';
import { useCheckbox } from 'components/checkbox/hooks';
import { TCheckboxProps } from 'components/checkbox/types';
import { getIcon } from 'components/checkbox/utils';
import InputContainer from 'components/input-container/InputContainer';
import InputLabelRequiredMark from 'components/input-label-required-mark/InputLabelRequiredMark';
import Typography from 'components/typography/Typography';
import {
    INPUT_LABEL_TYPOGRAPHY_VARIANT,
    INPUT_ICON_SIZE,
} from 'constants/input.constants';

export default function Checkbox({
    label,
    typographyVariant = INPUT_LABEL_TYPOGRAPHY_VARIANT,
    error,
    required,
    disabled,
    className,
    containerClassName,
    errorClassName,
    labelClassName,
    onFocus,
    onBlur,
    onChange,
    ...rest
}: TCheckboxProps): JSX.Element {
    const {
        inputRef,
        labelRef,
        buttonRef,
        isChecked,
        isActive,
        onLabelMouseEnter,
        onLabelMouseLeave,
        onInputFocus,
        onInputBlur,
        onInputChange,
        onButtonClick,
    } = useCheckbox({
        onFocus,
        onBlur,
        onChange,
    });

    return (
        <InputContainer
            error={error}
            disabled={disabled}
            className={cx(styles.container, containerClassName)}
            errorClassName={errorClassName}
        >
            <label
                ref={labelRef}
                onMouseEnter={onLabelMouseEnter}
                onMouseLeave={onLabelMouseLeave}
                tabIndex={disabled ? -1 : 0}
                className={cx(
                    styles.label,
                    {
                        [styles['label--error']]: error,
                        [styles['label--disabled']]: disabled,
                    },
                    labelClassName,
                )}
            >
                <input
                    ref={inputRef}
                    type="checkbox"
                    disabled={disabled}
                    className={cx(styles.input)}
                    {...rest}
                    onChange={onInputChange}
                    onFocus={onInputFocus}
                    onBlur={onInputBlur}
                />

                <IconButton
                    ref={buttonRef}
                    Icon={getIcon(isChecked)}
                    isActive={isActive}
                    isDisabled={disabled}
                    iconSize={INPUT_ICON_SIZE}
                    tabIndex={-1}
                    className={cx(styles.checkbox, className)}
                    onClick={onButtonClick}
                />

                <div className={styles['title-wrapper']}>
                    <Typography variant={typographyVariant}>{label}</Typography>

                    <InputLabelRequiredMark
                        required={required}
                        disabled={disabled}
                    />
                </div>
            </label>
        </InputContainer>
    );
}
