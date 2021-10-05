import {setToken} from '~/services/AsyncState';

export function signInRequest({email, password}) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {email, password},
  };
}

export function signInSuccess(user) {
  const {accessToken} = user;

  setToken(accessToken);

  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {user},
  };
}

export function signInFailure(error) {
  return {
    type: '@auth/SIGN_IN_FAILURE',
    payload: {error},
  };
}

export function signOut() {
  setToken('');
  return {
    type: '@auth/SIGN_OUT',
  };
}
