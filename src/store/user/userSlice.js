import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;  state.error = false;
      // console.log(state.currentUser,'action')
    //   state.firebaseToken = action.payload.idToken
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      // state.loginErrorType = action.payload;
    },
    
    signupStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    signupSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    signupFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    setUser: (state, action) => {
      state.user = { ...action.payload };
    },    logout: (state) => {
      state.currentUser = null;
    },
  }
})

export const { setUser, logout, signupStart, signupSuccess, signupFailure, loginFailure , loginSuccess , loginStart } = userSlice.actions

export default userSlice.reducer