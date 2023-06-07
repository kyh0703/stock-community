import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import AuthReducer from '@/app/auth/reducer/auth.slice';
import ThemeReducer from '@/app/theme/reducer/theme.slice';

const store = configureStore({
  reducer: {
    theme: ThemeReducer,
    auth: AuthReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
