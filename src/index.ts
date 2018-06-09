export interface RefHolderInterface<T> {
    (value?: T): void;
    ref: T;
}

export const refHolder = <T = any>(): RefHolderInterface<T> => {
    let reference: Element;

    function RefHolder(ref: Element) {
        reference = ref;
    }

    Object.defineProperty(RefHolder, 'ref', {
        get: () => reference,
        enumerable: true,
        configurable: true
    });

    return RefHolder as any;
};
