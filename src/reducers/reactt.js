import * as actions from '../actions/reactt';
import { initialState }  from './initialState';

// refer to /reducers/index.js for description of each state property
export default ( state = initialState.reactt , action ) => {
  switch(action.type) {
    case actions.TOGGLE_REACT:
      return { ...state, 
        reactt: !state.reactt
      };
    case actions.TOGGLE_CLASS:
      return { ...state, 
        classs: !state.classs
      }
    case actions.TOGGLE_STATE:
      return { ...state, 
        stateful: !state.stateful
      }
    case actions.TOGGLE_PROPS:
      return { ...state, 
        propss: !state.propss
      }
    case actions.TOGGLE_CALLBACK:
      return { ...state, 
        callback: !state.callback
      }
    case actions.TOGGLE_LINKS:
      return { ...state, 
        links: !state.links
      }
    case actions.TOGGLE_ROUTES:
      return { ...state, 
        routes: !state.routes
      }
    default:
      return state;
  }
}