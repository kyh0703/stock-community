import { combineReducers, configureStore } from '@reduxjs/toolkit';
import theme, { ThemeState } from './theme';

const rootReducer = combineReducers({
  theme: theme.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {}

export default rootReducer;
