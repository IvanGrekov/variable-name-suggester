import { MutableRefObject, Dispatch, SetStateAction, useEffect } from 'react';

type TUseInitIndicator = (
    indicatorElementRef: MutableRefObject<HTMLDivElement | null>,
    setIndicatorLeftPosition: Dispatch<SetStateAction<number | null>>,
) => void;

export const useInitIndicator: TUseInitIndicator = (
    indicatorElementRef,
    setIndicatorLeftPosition,
) => {
    useEffect(() => {
        const resizeHandler = (): void => {
            const indicatorElementRect =
                indicatorElementRef.current?.getBoundingClientRect();

            if (indicatorElementRect) {
                setIndicatorLeftPosition(indicatorElementRect.left);
            }
        };

        resizeHandler();

        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, [indicatorElementRef, setIndicatorLeftPosition]);
};
