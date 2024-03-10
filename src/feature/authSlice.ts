import { createSlice } from '@reduxjs/toolkit';

export interface InitialState {
  email:string;
  passwords:string;
  username:string;
  token:string;
  isAuthenticated: boolean;
}

export interface autoCheck {
  auth: InitialState;
}

const initialState: InitialState = {
  email:'',
  passwords:'',
  username: '',
  token: '',
  isAuthenticated: false,
  // isAuthenticated: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state: InitialState, action) => {
      state.email = action.payload.email;
      state.passwords = action.payload.passwords;
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    logOutAction: (state) => {
      state.email = '';
      state.passwords = '';
      state.username = '';
      state.token = '';
      state.isAuthenticated = false;
    },
  },
});

export default authSlice.reducer;
export const { setUser, logOutAction } = authSlice.actions;
