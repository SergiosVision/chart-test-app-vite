declare global {
    export type ValueOrNull<T> = T | null;

    export type StringOrNull = ValueOrNull<string>;
    export type NumberOrNull = ValueOrNull<number>;
    export type KeyValue<TValue = any> = { [key: string]: TValue };
}

// @ts-ignore
export default {}
