import { applyMiddleware, createStore as reduxCreateStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';

const createStore = () =>
  reduxCreateStore(rootReducer, initialState, applyMiddleware(thunk));
export default createStore;
