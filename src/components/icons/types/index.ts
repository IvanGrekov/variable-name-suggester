import { CSSProperties } from 'react';

export enum EIconSizes {
    small = 40,
    medium = 50,
    large = 60,
}

export interface IIconProps {
    size?: number | keyof typeof EIconSizes;
    color?: string;
    className?: string;
    wrapperClassName?: string;
    style?: CSSProperties;
}
