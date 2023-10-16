import { useState } from 'react';

import { TAreaFieldValue } from 'features/suggester-page/types/areaField';
import { useLocalStorage } from 'hooks/localStorage.hooks';

type TUseAreaValueState = () => {
    areaValue: TAreaFieldValue;
    setAreaValue: (value: string | null) => void;
};

export const useAreaValueState: TUseAreaValueState = () => {
    const { localStorageValue, setLocalStorageValue } =
        useLocalStorage<TAreaFieldValue>({
            key: 'area',
            initialValue: [],
        });

    const [areaValue, setAreaValue] =
        useState<TAreaFieldValue>(localStorageValue);

    const onChangeArea = (value: string | null): void => {
        if (value === null) {
            const newValue: TAreaFieldValue = [];

            setLocalStorageValue(newValue);
            setAreaValue(newValue);

            return;
        }

        setAreaValue((prevValue) => {
            let newValue: TAreaFieldValue = [];
            const exist = prevValue.some((item) => item === value);

            if (!exist) {
                newValue = [...prevValue, value];
            } else {
                newValue = prevValue.filter((item) => item !== value);
            }

            setLocalStorageValue(newValue);

            return newValue;
        });
    };

    return {
        areaValue,
        setAreaValue: onChangeArea,
    };
};
