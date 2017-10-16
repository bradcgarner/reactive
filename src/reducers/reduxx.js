import * as actions from '../actions/reduxx';
import { initialState }  from './initialState';

// refer to /reducers/index.js for description of each state property
export default ( state = initialState.reduxx , action ) => {
  switch(action.type) {
    case actions.TOGGLE_REDUX:
      return { ...state, 
        reduxx: !state.reduxx
      }
    case actions.TOGGLE_MAPSTATE:
      return { ...state, 
        mapState: !state.mapState
      }
    case actions.TOGGLE_COMBINE:
      return { ...state, 
        combine: !state.combine
      }
    case actions.TOGGLE_ASYNC:
      return { ...state, 
        async: !state.async
      }
    default:
      return state;
  }
}