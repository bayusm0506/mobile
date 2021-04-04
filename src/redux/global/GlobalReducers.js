import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'GLOBAL',
  initialState: {
    signIn: {
      username: '',
      password: '',
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
        signIn: {
          ...state.signIn,
        },
      };
    },
    SignUp: (state, action) => {
      return {
        ...state,
        signUp: {
          ...state.signUp,
        },
      };
    },
  },
});

export default slice.reducer;
