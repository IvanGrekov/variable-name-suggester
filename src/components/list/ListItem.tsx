import { IListItemProps } from 'components/list/types/listItem.types';
import Typography from 'components/typography/Typography';

export default function ListItem({
    value,
    variant = 'body1',
}: IListItemProps): JSX.Element {
    return <Typography variant={variant}>{value}</Typography>;
}
