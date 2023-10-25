import { ReactElement, CSSProperties } from 'react';

import { IButtonProps } from 'components/button/types';
import { IDividerProps } from 'components/divider/types';
import { ISpacingProps } from 'components/spacing/types';
import { TTooltipPosition } from 'components/tooltip/types';

export type TMenuActionItemProps = Pick<
    IButtonProps,
    'text' | 'onClick' | 'Icon' | 'title'
>;

type TElement = ReactElement<
    TMenuActionItemProps | IDividerProps | ISpacingProps
> | null;

export interface IMenuProps {
    children: TElement | Array<TElement>;
    OpenMenuElement?: JSX.Element;
    hideTooltip?: boolean;
    tooltipPosition?: TTooltipPosition;
    tooltipClassName?: string;
    actionsClassName?: string;
    actionsActiveClassName?: string;
    style?: CSSProperties;
}
