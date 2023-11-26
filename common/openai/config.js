import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_REACT_APP_API_KEY,
});

export const openai = new OpenAIApi(configuration);
