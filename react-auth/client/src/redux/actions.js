export const actionTypes = {
  SIGN_UP_REQUEST: 'session/SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS: 'session/SIGN_UP_SUCCESS',
  SIGN_UP_ERROR: 'session/SIGN_UP_ERROR',

  SIGN_OUT_REQUEST: 'session/SIGN_OUT_REQUEST',
  SIGN_OUT_SUCCESS: 'session/SIGN_OUT_SUCCESS',

  SIGN_IN_REQUEST: 'session/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: 'session/SIGN_IN_SUCCESS',
  SIGN_IN_ERROR: 'session/SIGN_IN_ERROR'
};

export const signUpRequest = () => ({
  type: actionTypes.SIGN_UP_REQUEST
});

export const signUpSuccess = response => ({
  type: actionTypes.SIGN_UP_SUCCESS,
  payload: response
});

export const signUpError = error => ({
  type: actionTypes.SIGN_UP_ERROR,
  payload: error
});

export const signInRequest = () => ({
  type: actionTypes.SIGN_IN_REQUEST
});

export const signInSuccess = response => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload: response
});

export const signInError = error => ({
  type: actionTypes.SIGN_IN_ERROR,
  payload: error
});

export const signOutRequest = () => ({
  type: actionTypes.SIGN_OUT_REQUEST
});

export const signOutSuccess = () => ({
  type: actionTypes.SIGN_OUT_SUCCESS
});
