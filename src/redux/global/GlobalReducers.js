import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'GLOBAL',
  initialState: {
    isLoading: false,
    isTheme: false,
    signIn: {
      username: '',
      password: '',
      token: '',
    },
    signUp: {
      username: '',
      password: '',
      email: '',
    },
  },
  reducers: {
    SignIn: (state, action) => {
      return {
        ...state,
        isLoading: false,
        signIn: {
          ...state.signIn,
          username: action.payload.username,
          password: action.payload.password,
          token: action.payload.token,
        },
      };
    },
    SignOut: (state, action) => {
      return {
        ...state,
        isLoading: false,
        signIn: {
          ...state.signIn,
          username: '',
          password: '',
          token: '',
        },
      };
    },
    SignUp: (state, action) => {
      return {
        ...state,
        isLoading: false,
        signUp: {
          ...state.signUp,
          username: '',
          password: '',
          email: '',
        },
      };
    },
    SetTheme: (state, action) => {
      return {
        ...state,
        isTheme: !state.isTheme,
      };
    },
  },
});

export default slice.reducer;
