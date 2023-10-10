import { PropsWithChildren } from 'react';

import { IErrorProps } from 'components/input-error/types';

export type TBaseInputContainerProps = Pick<IErrorProps, 'error'> & {
    errorClassName?: IErrorProps['className'];
};

export type TInputContainerProps = PropsWithChildren &
    TBaseInputContainerProps &
    Pick<IErrorProps, 'disabled'> & {
        className?: string;
    };
