import axios from 'axios';
import {
  signUpRequest,
  signUpSuccess,
  signUpError,
  signInRequest,
  signInSuccess,
  signInError,
  signOutSuccess,
  signOutRequest,
  refreshUserRequest,
  refreshUserSuccess
} from './actions';

import { getToken } from './selectors';

axios.defaults.baseURL = 'http://localhost:4040';

const setAuthHeader = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common['Authorization'] = null;
};

const signUp = credentials => async dispatch => {
  dispatch(signUpRequest());

  try {
    const response = await axios.post('/auth/signup', credentials);

    setAuthHeader(response.data.token);

    await dispatch(signUpSuccess(response.data));
  } catch (error) {
    dispatch(signUpError(error));
  }
};

const signIn = credentials => async dispatch => {
  dispatch(signInRequest());

  try {
    const response = await axios.post('/auth/signin', credentials);

    setAuthHeader(response.data.token);

    await dispatch(signInSuccess(response.data));
  } catch (error) {
    dispatch(signInError(error));
  }
};

const signOut = () => async (dispatch, getState) => {
  dispatch(signOutRequest());

  try {
    await axios.post('/auth/signout');

    clearAuthHeader();

    await dispatch(signOutSuccess());
  } catch (error) {
    console.log(error);
  }
};

const refreshCurrentUser = () => async (dispatch, getState) => {
  dispatch(refreshUserRequest());
  try {
    const token = getToken(getState());

    if (!token) return;

    setAuthHeader(token);

    const { data } = await axios.get('/auth/current');

    setAuthHeader(token);

    await dispatch(refreshUserSuccess(data));
  } catch (error) {
    clearAuthHeader();
    console.log(error);
  }
};
export { signUp, signIn, signOut, refreshCurrentUser };
