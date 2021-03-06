import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import reducers from './modules/rootReducer';
import sagas from './modules/rootSaga';

const sagaMonitor =
  __DEV__ === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const middlewares = [sagaMiddleware];

const store = createStore(reducers, middlewares);

sagaMiddleware.run(sagas);

export {store};
