import { createSlice } from '@reduxjs/toolkit';
import { fetchPostById } from './postAPI';

export interface PostState {
  post: null;
  error: null;
}

const initialState: PostState = {
  post: null,
  error: null,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // 진행 중
    builder.addCase(fetchPostById.pending, (state) => {
      state.error = null;
    });
    // 처리 완료
    builder.addCase(fetchPostById.fulfilled, (state, { payload: post }) => {
      state.post = post;
      state.error = null;
    });
    // 처리 실패
    builder.addCase(fetchPostById.rejected, (state, { payload: error }) => {
      state.error = null;
    });
  },
});

// export reducer
export default postSlice.reducer;
