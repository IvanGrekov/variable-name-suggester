import { ReactElement } from 'react';

import OrderedBullet, {
    IOrderedBulletProps,
} from 'components/list/OrderedBullet';
import styles from 'components/list/OrderedList.module.scss';
import { IListItemProps } from 'components/list/types/listItem.types';

type TChildElement = ReactElement<IListItemProps>;

interface IOrderedListProps {
    children: TChildElement | TChildElement[];
    bulletTypographyVariant?: IOrderedBulletProps['variant'];
}

export default function OrderedList({
    children,
    bulletTypographyVariant,
}: IOrderedListProps): JSX.Element {
    const isArrayOfElements = Array.isArray(children);

    return (
        <ol className={styles.list}>
            {isArrayOfElements ? (
                children.map((child, index) => {
                    return (
                        <li key={index} className={styles.item}>
                            <OrderedBullet
                                index={`${index + 1}`}
                                variant={bulletTypographyVariant}
                            />
                            {child}
                        </li>
                    );
                })
            ) : (
                <li className={styles.item}>
                    <OrderedBullet
                        index="1"
                        variant={bulletTypographyVariant}
                    />
                    {children}
                </li>
            )}
        </ol>
    );
}
