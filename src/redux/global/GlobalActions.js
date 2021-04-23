import AsyncStorage from '@react-native-async-storage/async-storage';
import {slice} from './GlobalReducers';

const {SignIn, GetToken, SignOut, SignUp, SetTheme} = slice.actions;

export const Login = params => async dispatch => {
  try {
    await AsyncStorage.setItem('userToken', params.token);
  } catch (e) {
    console.log('error', e);
  }
  dispatch(SignIn(params));
};

export const GetTokens = token => async dispatch => {
  try {
    await AsyncStorage.getItem('userToken');
  } catch (e) {
    console.log('error', e);
  }
  dispatch(GetToken(token));
};

export const Logout = () => async dispatch => {
  try {
    await AsyncStorage.removeItem('userToken');
  } catch (e) {
    console.log('error', e);
  }
  dispatch(SignOut());
};

export const Register = params => async dispatch => {
  dispatch(SignUp(params));
};

export const IsTheme = () => async dispatch => {
  dispatch(SetTheme());
};
