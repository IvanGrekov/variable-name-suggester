import IconWrapper from 'components/icons/IconWrapper';
import { IIconProps, EIconSizes } from 'components/icons/types';

export default function CopyIcon({
    size = EIconSizes.small,
    className,
    wrapperClassName,
}: IIconProps): JSX.Element {
    return (
        <IconWrapper size={size} wrapperClassName={wrapperClassName}>
            <svg
                width="128px"
                height="128px"
                viewBox="0 0 128 128"
                enableBackground="new 0 0 128 128"
                className={className}
            >
                <g>
                    <g>
                        <path
                            d="M112,0H40c-8.836,0-16,7.164-16,16h8c0-4.414,3.59-8,8-8h72c4.414,0,8,3.586,8,8v72c0,4.414-3.586,8-8,8v8
			c8.836,0,16-7.164,16-16V16C128,7.164,120.836,0,112,0z M88,24H16C7.164,24,0,31.164,0,40v72c0,8.836,7.164,16,16,16h72
			c8.836,0,16-7.164,16-16V40C104,31.164,96.836,24,88,24z M96,112c0,4.414-3.586,8-8,8H16c-4.41,0-8-3.586-8-8V40
			c0-4.414,3.59-8,8-8h72c4.414,0,8,3.586,8,8V112z M24,56h56v-8H24V56z M24,72h56v-8H24V72z M24,88h56v-8H24V88z M24,104h32v-8H24
			V104z"
                        />
                    </g>
                </g>
            </svg>
        </IconWrapper>
    );
}
