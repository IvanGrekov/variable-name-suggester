import { NextRequest } from 'next/server';
import OpenAI from 'openai';

import { getSystemMessage, getUserMessage } from 'utils/api.utils';

const openAi = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY,
});

export async function POST(request: NextRequest): Promise<Response> {
    const body = await request.json();
    const { areaValue, prompt } = body;

    const completion = await openAi.chat.completions.create({
        messages: [
            {
                role: 'system',
                content: getSystemMessage(areaValue),
            },
            {
                role: 'user',
                content: getUserMessage(prompt),
            },
        ],
        model: 'gpt-3.5-turbo',
    });
    const answer = completion.choices[0];

    return Response.json(answer, { status: 200 });
}
