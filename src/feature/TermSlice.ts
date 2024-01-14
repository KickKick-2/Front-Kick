import { createSlice } from '@reduxjs/toolkit';
export interface InitialState {
  isAllChecked: boolean;
}
const initialState: InitialState = {
  isAllChecked: false,
};

let termSlice = createSlice({
  name: 'term',
  initialState,
  reducers: {
    isChecked: (state: InitialState) => {
      state.isAllChecked = true;
    },
    isNotChecked: (state) => {
      state.isAllChecked = false;
    },
  },
});

export const { isChecked, isNotChecked } = termSlice.actions;
export default termSlice.reducer;
