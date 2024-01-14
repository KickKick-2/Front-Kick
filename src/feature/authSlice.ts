import { createSlice } from '@reduxjs/toolkit';

export interface InitialState {
  id: string;
  email: string;
  name: string;
  token: string;
  profileImg: string;
  isAuthenticated: boolean;
}

export interface autoCheck {
  auth: InitialState;
}

const initialState: InitialState = {
  id: '',
  email: '',
  name: '',
  token: '',
  profileImg: '',
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state: InitialState, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.profileImg = action.payload.profileImg;
      state.isAuthenticated = true;
    },
    logOutAction: (state) => {
      state.id = '';
      state.email = '';
      state.name = '';
      state.token = '';
      state.profileImg = '';
      state.isAuthenticated = false;
    },
  },
});

export default authSlice.reducer;
export const { setUser, logOutAction } = authSlice.actions;
