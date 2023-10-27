type TGetContentMatchesFromChunkValue = (
    value: Uint8Array,
) => IterableIterator<RegExpMatchArray>;

export const getContentMatchesFromChunkValue: TGetContentMatchesFromChunkValue =
    (value) => {
        const decoder = new TextDecoder('utf-8');
        const decodedValue = decoder.decode(value);
        const regex = /"content":"([^"]*)"/g;

        return decodedValue.matchAll(regex);
    };

export const prettifyResponseText = (text: string): string => {
    return text.replaceAll('\\n', '<br />').replaceAll('\\', '<br />');
};
