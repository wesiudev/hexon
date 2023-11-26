import { ImageProps } from "@/types";

export function getRandomObjects(array: ImageProps[], count: number) {
  const clone = [...array];
  const shuffledArray = clone.sort(() => Math.random() - 0.5);
  const randomImages = shuffledArray.slice(0, count);
  return randomImages;
}
