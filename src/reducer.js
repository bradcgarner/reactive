import * as actions from './actions';
import { initialState }  from './initialState';

// refer to /reducers/index.js for description of each state property
export default ( state = initialState , action ) => {
  if (action.type === actions.TOGGLE) {
    console.log('return true');
    console.log('state',state);
    console.log('action',action);
    return Object.assign({}, state, action )
  } else {
    console.log('return false');
    return state;
  }
}