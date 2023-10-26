import { NextRequest } from 'next/server';
import OpenAI from 'openai';

import { getSystemMessage, getUserMessage } from 'utils/api.utils';

const openAi = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY,
});

export async function POST(request: NextRequest): Promise<Response> {
    const body = await request.json();
    const { areaValue, prompt } = body;

    const chatCompletionStream = await openAi.chat.completions.create({
        model: 'gpt-3.5-turbo',
        stream: true,
        temperature: 0.78,
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
    });
    const readableStream = chatCompletionStream.toReadableStream();

    return new Response(readableStream);
}
