import { arrayOfRandomPrompts } from "./utilAssets/randomPrompts";

export function getRandomPrompt(prompt: string) {
  const randomIndex = Math.floor(Math.random() * arrayOfRandomPrompts.length);
  const randomPrompt = arrayOfRandomPrompts[randomIndex];

  randomPrompt === prompt && getRandomPrompt(prompt);

  return randomPrompt;
}
