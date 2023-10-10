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
        const indicatorElementRect =
            indicatorElementRef.current?.getBoundingClientRect();

        if (indicatorElementRect) {
            setIndicatorLeftPosition(indicatorElementRect.left);
        }
    }, [indicatorElementRef, setIndicatorLeftPosition]);
};
