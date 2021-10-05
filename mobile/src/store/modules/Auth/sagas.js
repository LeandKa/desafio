import reactotron from 'reactotron-react-native';
import {all, takeLatest, put, call} from 'redux-saga/effects';
import api from '~/services/api';

import {signInSuccess, signInFailure} from './actions';

export function* signIn({payload}) {
  try {
    const {email, password} = payload;
    const response = yield call(api.post, '/get-session', {email, password});

    yield put(signInSuccess(response.data));
  } catch (error) {
    yield put(signInFailure('Erro de autenticação'));
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
