import {combineReducers} from 'redux';

import auth from './Auth/reducers';

const reducers = combineReducers({
  auth,
});

export default reducers;
