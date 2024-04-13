import { BioData, prefillIntialMessage } from '@/constants/prompts';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Set the runtime to edge for best performance
export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages, biodata } = await req.json();


  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        role: "user",
        content: prefillIntialMessage(biodata as BioData)
      },
      {
        role: "system",
        content: `you are a health AI named PhinaGreen. 
        Whenever you are asked your name, your reply must be short and tell them that you are PhinaGreen.
      I would give you some of my data and you are to perform the task I ask you to.
      Remember you are dealing with health data, so your response would be scored based on accuracy and relevance.
      
      If you can't reply to any message/task due to any law, rules or regulations or simply because it deviates too much from your purpose as a health ai, you are to reply with the message enclosed in the tag (without the tag)
      <>
      I'm sorry but I can't help you with the task you are requesting as it goes against my policies.
      </>
      
      at least, you should be able to generate their BMO, suggest exercises, suggest diet plans, provide continental recipes, provide nutritional counselling, predict how much it would cost them to purchase a particular healthy meal.`
      },
      ...messages
    ],
    temperature: 1,
    max_tokens: 200
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}