import { MutableRefObject, Dispatch, SetStateAction, useEffect } from 'react';

type TUseInitIndicator = (args: {
    isDelayed?: boolean;
    indicatorElementRef: MutableRefObject<HTMLDivElement | null>;
    setIndicatorLeftPosition: Dispatch<SetStateAction<number | null>>;
}) => void;

export const useInitIndicator: TUseInitIndicator = ({
    isDelayed,
    indicatorElementRef,
    setIndicatorLeftPosition,
}) => {
    useEffect(() => {
        const resizeHandler = (): void => {
            const indicatorElementRect =
                indicatorElementRef.current?.getBoundingClientRect();

            if (indicatorElementRect) {
                setIndicatorLeftPosition(indicatorElementRect.left);
            }
        };

        const timeoutId = setTimeout(resizeHandler, isDelayed ? 1250 : 0);

        window.addEventListener('resize', resizeHandler);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', resizeHandler);
        };
    }, [isDelayed, indicatorElementRef, setIndicatorLeftPosition]);
};
