export type UserData = {
  id: number;
  email: string;
  username: string;
  password: string;
};

export type AuthData = {
  tokenType: string;
  accessToken: string;
  accessExpire: number;
  refreshToken: string;
  refreshExpire: number;
};

export type ValidationError = {
  status: number;
  message: string | null | undefined;
};
