import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  user: null;
  checkError: null;
}

const initialState: UserState = {
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
