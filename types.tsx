export type ImageProps = {
  src: string;
  prompt: string;
  author: string;
  isPublic: boolean;
  likes: number;
  comments: [];
  creationTime: number;
};

export type ImagesArray = {
  userImages: ImageProps[];
};

export type AccountHistoryItem = {
  creationTime: number;
  action: string;
};
