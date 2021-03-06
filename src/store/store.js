import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducers from '../reducers/RootReducer';

const store = createStore(
  RootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
export default store;