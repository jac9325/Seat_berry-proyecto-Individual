import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login } from '../api';

const initialState = {};

// create async thunk function
export const loginUserAsync = createAsyncThunk('login', async (user) => {
  const response = await login(user);
  return response;
});

export const LogoutAsync = createAsyncThunk('logout', async (user) => {
  const response = false;
  return response;
});
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        const { token } = action.payload;
        state.token = token;
        state.loggued = true;
        localStorage.setItem('stateLogged', true);
        state.log = localStorage.getItem('stateLogged');
        localStorage.setItem('infoUser', JSON.stringify(action.payload));
      })
      .addCase(LogoutAsync.fulfilled, (state, action) => {
        state.loggued = false;
      });
  },
});

export const selectUserLoggued = (state) => state.user.loggued;
export const selectUserLog = (state) => state.user.log;
export default userSlice.reducer;
