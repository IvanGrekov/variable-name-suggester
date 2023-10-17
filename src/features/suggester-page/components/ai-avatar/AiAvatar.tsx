import Avatar from 'components/avatar/Avatar';

interface IAiAvatarProps {
    className?: string;
}

export default function AiAvatar({ className }: IAiAvatarProps): JSX.Element {
    return <Avatar name="A I" size="small" className={className} />;
}
