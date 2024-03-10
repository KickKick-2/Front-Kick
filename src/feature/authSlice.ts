import { createSlice } from '@reduxjs/toolkit';

export interface InitialState {
  username:string;
  token:string;
  isAuthenticated: boolean;
}

export interface autoCheck {
  auth: InitialState;
}

const initialState: InitialState = {
  username: '',
  token: '',
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state: InitialState, action) => {
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logOutAction: (state) => {
      state.username = '';
      state.token = '';
      state.isAuthenticated = false;
    },
  },
});

export default authSlice.reducer;
export const { setUser, logOutAction } = authSlice.actions;
