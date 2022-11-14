import axios from 'axios';
import storage from './storage';
import Header from '../components/common/Header';

const REFRESH_URL = '/api/users/refresh';

const client = axios.create({
  headers: { 'Content-Type': 'application/json' },
});

client.interceptors.request.use((config) => {
  if (!config.headers) return config;
  let token: string | null = null;

  if (config.url === REFRESH_URL) {
    token = storage.getItem('refresh_token');
  } else {
    token = storage.getItem('access_token');
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

client.interceptors.response.use(
  (res) => res,
  async (err) => {
    const {
      config,
      response: { status },
    } = err;

    if (config.url === REFRESH_URL || status !== 401 || config.sent) {
      return Promise.reject(err);
    }

    config.sent = true;
    const accessToken = await getRefreshToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return axios(config);
  },
);

const getRefreshToken = async (): Promise<string | void> => {
  try {
    const {
      data: { accessToken, refreshToken },
    } = await axios.get<{ accessToken: string; refreshToken: string | null }>(
      REFRESH_URL,
    );
    storage.setItem('access_token', accessToken);
    if (refreshToken !== null) {
      storage.setItem('refresh_token', refreshToken);
    }
    return accessToken;
  } catch (e) {
    storage.removeItem('access_token');
    storage.removeItem('refresh_token');
  }
};

export default client;
