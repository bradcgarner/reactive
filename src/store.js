import reducer from './reducer';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
export default createStore(reducer, applyMiddleware( thunk ));