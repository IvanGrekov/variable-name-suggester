'use client';

import cx from 'classnames';

import InputContainer from 'components/input-container/InputContainer';
import HelperIcon from 'components/text-field/HelperIcon';
import PasswordIcon from 'components/text-field/PasswordIcon';
import styles from 'components/text-field/TextField.module.scss';
import { useTextField } from 'components/text-field/hooks';
import { TTextFieldProps } from 'components/text-field/types';
import { getInputMode } from 'components/text-field/utils';
import TextFieldLabel from 'components/text-field-label/TextFieldLabel';
import TextFieldPlaceholder from 'components/text-field-placeholder/TextFieldPlaceholder';
import TextFieldWrapper from 'components/text-field-wrapper/TextFieldWrapper';

export default function TextField({
    type = 'text',
    error,
    required,
    disabled,
    label,
    placeholder = label || 'Enter value',
    shouldHidePlaceholder,
    inputMode,
    placeholderVariant,
    Icon,
    iconSize,
    isFullWidth,
    containerClassName,
    textFieldWrapperClassName,
    labelClassName,
    placeholderClassName,
    errorClassName,
    className,
    onFocus,
    onBlur,
    onChange,
    onClick,
    ...rest
}: TTextFieldProps): JSX.Element {
    const {
        inputRef,
        id,
        inputType,
        isFocused,
        isInputFilled,
        isValueVisible,
        setIsValueVisible,
        onInputFocus,
        onInputBlur,
        onInputClick,
        onInputChange,
    } = useTextField({
        type,
        onFocus,
        onBlur,
        onClick,
        onChange,
    });

    const isPasswordInput = type === 'password';

    return (
        <InputContainer
            error={error}
            disabled={disabled}
            isFullWidth={isFullWidth}
            className={containerClassName}
            errorClassName={errorClassName}
        >
            <TextFieldWrapper
                disabled={disabled}
                isFullWidth={isFullWidth}
                className={textFieldWrapperClassName}
            >
                <input
                    ref={inputRef}
                    id={id}
                    type={inputType}
                    disabled={disabled}
                    autoComplete="off"
                    pattern={type === 'number' ? '[0-9]*' : undefined}
                    inputMode={getInputMode({ type, inputMode })}
                    className={cx(
                        styles.input,
                        {
                            [styles['input--filled']]: isInputFilled,
                            [styles['input--error']]: error,
                            [styles['input--disabled']]: disabled,
                            [styles['input--password']]: isPasswordInput,
                            [styles['input--with-icon']]: !!Icon,
                            [styles['input--full-width']]: isFullWidth,
                        },
                        className,
                    )}
                    {...rest}
                    onFocus={onInputFocus}
                    onBlur={onInputBlur}
                    onClick={onInputClick}
                    onChange={onInputChange}
                />

                <TextFieldLabel
                    htmlFor={id}
                    label={label}
                    required={required}
                    disabled={disabled}
                    isFocused={isFocused}
                    error={error}
                    className={labelClassName}
                />

                {!shouldHidePlaceholder && (
                    <TextFieldPlaceholder
                        htmlFor={id}
                        placeholder={placeholder}
                        required={required}
                        disabled={disabled}
                        isFieldFilled={isInputFilled}
                        error={error}
                        variant={placeholderVariant}
                        className={cx(placeholderClassName, {
                            [styles['placeholder--limited']]: isPasswordInput,
                        })}
                    />
                )}

                <HelperIcon
                    id={id}
                    error={error}
                    disabled={disabled}
                    Icon={Icon}
                    iconSize={iconSize}
                />

                <PasswordIcon
                    type={type}
                    isValueVisible={isValueVisible}
                    error={error}
                    disabled={disabled}
                    setIsValueVisible={setIsValueVisible}
                />
            </TextFieldWrapper>
        </InputContainer>
    );
}
