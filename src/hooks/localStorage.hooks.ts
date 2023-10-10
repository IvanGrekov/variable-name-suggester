import { useCallback, useState, Dispatch, SetStateAction } from 'react';

import {
    IUseLocalStorageResult,
    TSetLocalStorageValue,
} from 'types/localStorage.types';
import {
    setLocalStorageValue,
    getLocalStorageValue,
} from 'utils/localStorage.utils';

interface IUseGetSetLocalStorageValueArgs<T> {
    key: string;
    setValue: Dispatch<SetStateAction<T>>;
}

const useGetSetLocalStorageValue = <T>({
    key,
    setValue,
}: IUseGetSetLocalStorageValueArgs<T>): TSetLocalStorageValue<T> => {
    return useCallback(
        (newValue) => {
            setValue((prevValue) => {
                const valueToSave =
                    newValue instanceof Function
                        ? newValue(prevValue)
                        : newValue;

                setLocalStorageValue({
                    key,
                    value: valueToSave,
                });

                return valueToSave;
            });
        },
        [key, setValue],
    );
};

interface IUseLocalStorageArgs<T> {
    key: string;
    initialValue: T;
}

export const useLocalStorage = <T>({
    key,
    initialValue,
}: IUseLocalStorageArgs<T>): IUseLocalStorageResult<T> => {
    const [value, setValue] = useState(() =>
        getLocalStorageValue({ key, initialValue }),
    );

    const setLocalStorageValue = useGetSetLocalStorageValue({
        key,
        setValue,
    });

    return {
        localStorageValue: value,
        setLocalStorageValue,
    };
};
