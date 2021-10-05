import {all} from 'redux-saga/effects';

import auth from './Auth/sagas';

export default function* rootSaga() {
  yield all([auth]);
}
