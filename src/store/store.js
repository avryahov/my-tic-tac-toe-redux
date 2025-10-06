import { legacy_createStore as createStore } from 'redux';
import gameReducer from './reducer';

const store = createStore(
  gameReducer,
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
);

export default store;