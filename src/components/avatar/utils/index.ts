import { IAvatarProps } from 'components/avatar/types';
import { TTypographyVariants } from 'components/typography/types';

export const getTypographyVariant = (
    sise: IAvatarProps['size'],
): TTypographyVariants => {
    switch (sise) {
        case 'small':
            return 'subtitle2';
        case 'large':
            return 'h6';
        default:
            return 'subtitle1';
    }
};
