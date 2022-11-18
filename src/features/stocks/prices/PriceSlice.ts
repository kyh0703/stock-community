import { createSlice } from '@reduxjs/toolkit';

interface StocksPrices {}

export interface StockState {
  user: null;
  checkError: null;
}

const initialState: StockState = {
  user: null,
  checkError: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

// export reducer
export default userSlice.reducer;
