import IconWrapper from 'components/icons/IconWrapper';
import { IIconProps, EIconSizes } from 'components/icons/types';

export default function RepeatIcon({
    size = EIconSizes.small,
    className,
    wrapperClassName,
}: IIconProps): JSX.Element {
    return (
        <IconWrapper size={size} className={wrapperClassName}>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={className}
            >
                <path d="M20 16.586l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L18 16.586V6h-8a1 1 0 1 1 0-2h9a1 1 0 0 1 1 1v11.586zM4 7.414L2.707 8.707a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L6 7.414V18h8a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1V7.414z" />
            </svg>
        </IconWrapper>
    );
}
