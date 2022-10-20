import { createSlice } from '@reduxjs/toolkit';

export interface WriteState {}

const initialState: WriteState = {};

const writeSlice = createSlice({
  name: 'write',
  initialState,
  reducers: {},
  extraReducers: {},
});
