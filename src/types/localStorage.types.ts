export type TSetLocalStorageValue<T> = (
    newValue: T | ((prevValue: T) => T),
) => void;

export interface IUseLocalStorageResult<T> {
    localStorageValue: T;
    setLocalStorageValue: TSetLocalStorageValue<T>;
}
