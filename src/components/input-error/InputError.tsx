import { IErrorProps } from 'components/input-error/types';
import Typography from 'components/typography/Typography';

export default function InputError({
    error,
    disabled,
    className,
}: IErrorProps): JSX.Element | null {
    if (!error || disabled) {
        return null;
    }

    return (
        <Typography element="p" variant="caption" className={className}>
            {error}
        </Typography>
    );
}
