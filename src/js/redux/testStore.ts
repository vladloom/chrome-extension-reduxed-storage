import { createSlice } from '@reduxjs/toolkit';

export interface TestStoreState {
  value: number; // whether the countdown is enabled at all
}

const initialState: TestStoreState = {
  value: 0,
};

const slice = createSlice({
  name: 'testReducer',
  initialState,
  reducers: {
    setRandomValue(
      state: TestStoreState,
    ) {
      state.value = Math.floor(Math.random() * 10000);
    },
  },
});

export const { setRandomValue } = slice.actions;
export default slice;
