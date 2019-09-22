import axios from 'axios';
import {
  signUpRequest,
  signUpSuccess,
  signUpError,
  signInRequest,
  signInSuccess,
  signInError,
  signOutSuccess,
  signOutRequest
} from './actions';

import { getToken } from './selectors';

axios.defaults.baseURL = 'http://localhost:4040';

const signUp = credentials => async dispatch => {
  dispatch(signUpRequest());

  try {
    const response = await axios.post('/auth/signup', credentials);

    await dispatch(signUpSuccess(response.data));
  } catch (error) {
    dispatch(signUpError(error));
  }
};

const signIn = credentials => async dispatch => {
  dispatch(signInRequest());

  try {
    const response = await axios.post('/auth/signin', credentials);

    await dispatch(signInSuccess(response.data));
  } catch (error) {
    dispatch(signInError(error));
  }
};

const signOut = () => async (dispatch, getState) => {
  dispatch(signOutRequest());

  try {
    const token = getToken(getState());

    const configs = {
      headers: {
        Authorization: token
      }
    };
    await axios.post('/auth/signout', {}, configs);

    await dispatch(signOutSuccess());
  } catch (error) {
    console.log(error);
  }
};

export { signUp, signIn, signOut };
