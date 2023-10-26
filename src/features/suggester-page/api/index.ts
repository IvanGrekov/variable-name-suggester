import { TAreaFieldValue } from 'features/suggester-page/types/areaField.types';

interface IApiArgs {
    areaValue: TAreaFieldValue;
    prompt: string;
}

export default async function API({
    areaValue,
    prompt,
}: IApiArgs): Promise<Response> {
    return await fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            areaValue,
            prompt,
        }),
    });
}
