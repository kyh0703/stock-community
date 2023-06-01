import axios, { AxiosRequestConfig } from 'axios';

import { API_URI, REFRESH_API_URL } from '@/config';
import storage from '@/lib/storage';

const client = axios.create({
  baseURL: API_URI,
});

function authRequestInterceptor(config: AxiosRequestConfig) {
  if (!config.headers) return config;
  let token: string | null = null;

  if (config.url === REFRESH_API_URL) {
    token = storage.getItem('refresh_token');
  } else {
    token = storage.getItem('access_token');
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  config.headers.Accept = 'application/json';
  return config;
}

client.interceptors.request.use(authRequestInterceptor);
client.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    // const {
    //   config,
    //   response: { status },
    // } = error;

    // if (config.url === REFRESH_URL || status !== 401 || config.sent) {
    //   return Promise.reject(err);
    // }

    // config.sent = true;
    // const accessToken = await getRefreshToken();
    // if (accessToken) {
    //   config.headers.Authorization = `Bearer ${accessToken}`;
    // }

    const message = error.response?.data?.message || error.message;
    return Promise.reject(error);
  },
);

// const getRefreshToken = async (): Promise<string | void> => {
//   try {
//     const {
//       data: { accessToken, refreshToken },
//     } = await axios.get<{ accessToken: string; refreshToken: string | null }>(
//       REFRESH_URL,
//     );
//     storage.setItem('access_token', accessToken);
//     if (refreshToken !== null) {
//       storage.setItem('refresh_token', refreshToken);
//     }
//     return accessToken;
//   } catch (e) {
//     storage.removeItem('access_token');
//     storage.removeItem('refresh_token');
//   }
// };

export default client;
