import { createSlice } from '@reduxjs/toolkit';
export interface TeamFiltersState {
  teamNames: string[];
}
export interface teamCheck {
  teamfilter: TeamFiltersState;
}
const initialState: TeamFiltersState = {
  teamNames: [],
};
let teamFilterSlice = createSlice({
  name: 'teamfilter',
  initialState,
  reducers: {
    addTeamFilter: (state, action) => {
      const teamName = action.payload;
      if (!state.teamNames.includes(teamName)) {
        state.teamNames.push(teamName);
      }
    },
    removeTeamFilter: (state, action) => {
      const teamName = action.payload;
      const index = state.teamNames.indexOf(teamName);
      if (index !== -1) {
        state.teamNames.splice(index, 1);
      }
    },
    clearTeamFilters: (state) => {
      state.teamNames = [];
    },
  },
});

export default teamFilterSlice.reducer;
export const { addTeamFilter, removeTeamFilter, clearTeamFilters } =
  teamFilterSlice.actions;
