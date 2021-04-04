import AsyncStorage from '@react-native-async-storage/async-storage';
import {slice} from './GlobalReducers';

const {SignIn, SignUp} = slice.actions;

export const Login = params => async dispatch => {
  dispatch(SignIn(params));
};

export const Register = params => async dispatch => {
  dispatch(SignUp(params));
};
