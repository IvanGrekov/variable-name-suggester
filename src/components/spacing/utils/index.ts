import { ISpacingProps } from 'components/spacing/types';
import { EScreenSizeNames } from 'types/screenSizes.types';

type TGetSpacingSizeInput = Required<ISpacingProps> & {
    windowSize: EScreenSizeNames;
};

type TGetSpacingSize = (input: TGetSpacingSizeInput) => number;

export const getSpacingSize: TGetSpacingSize = ({
    windowSize,
    xs,
    sm,
    md,
    lg,
    xl,
}) => {
    switch (windowSize) {
        case EScreenSizeNames.XS:
            return xs;

        case EScreenSizeNames.SM:
            return sm;

        case EScreenSizeNames.MD:
            return md;

        case EScreenSizeNames.LG:
            return lg;

        default:
            return xl;
    }
};
