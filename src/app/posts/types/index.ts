export type ValidationError = {
  status: number;
  message: string | null | undefined;
};

export type PostItem = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  publishAt: Date;
  userId: number;
  username: string;
};
