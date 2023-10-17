export enum EAvatarSizes {
    small = 50,
    medium = 60,
    large = 100,
}

export interface IAvatarProps {
    name: string;
    image?: string;
    size?: keyof typeof EAvatarSizes;
    className?: string;
    onClick?: VoidFunction;
}
