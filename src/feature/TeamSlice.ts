import { createSlice } from '@reduxjs/toolkit';
export interface InitialState {
  teamName: string;
  teamGrade: string;
  teamImg: string;
  location: string;
  teamStadium: string;
  totalMatching: string;
}
const initialState: InitialState = {
  teamName: '',
  teamGrade: '',
  teamImg: '',
  location: '',
  teamStadium: '',
  totalMatching: '',
};
let teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    register: (state: InitialState, action) => {
      state.teamName = action.payload.teamName;
      state.teamGrade = action.payload.teamGrade;
      state.teamImg = action.payload.teamImg;
      state.location = action.payload.location;
      state.teamStadium = action.payload.teamStadium;
      state.totalMatching = action.payload.totalMatching;
    },
    deleteAction: (state) => {
      state.teamName = '';
      state.teamGrade = '';
      state.location = '';
      state.teamStadium = '';
      state.totalMatching = '';
    },
  },
});

export default teamSlice.reducer;
export const { register, deleteAction } = teamSlice.actions;
