import { combineReducers } from '@reduxjs/toolkit';
import theme, { ThemeState } from './theme';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  theme: theme.reducer,
});

export default rootReducer;
