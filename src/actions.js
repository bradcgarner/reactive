const deepAssign = require('deep-assign');

// refer to /reducers/index.js for description of each state property

const dependencies = {
  
  // in all cases, when the parent turns off, all its children turn off
  // true = when parent turns on, child automatically turns on.
  // false = child is turned on separately from parent
  // toggle = directly toggled by user in menu
  // variable = affected by combination of conditions, toggled in variable condition object
  reactt: {            // toggle
    classs: {          // toggle
      stateful: false  // toggle on tier 2
    },
    stateful: false,   // toggle
    propss: false,     // toggle
    callback: false,   // toggle
    function: false,   // toggle
    links: {           // toggle
      arrC1Link: true,
      arrC2Link: true,
    },
    routes: {          // toggle
      arrC1Route: true,
      arrC1Router: true,
      arrC2Route: true,
      arrC2Router: true,
    },
    arrIndexHTML: true, // always
    arrIndexDOM: true,  // always
    arrIndexC1: true,   // always
    arrC1Exp: false,    // variable
    arrC2Exp: false,    // variable
    reduxx: {           // toggle
      mapState: false,  // toggle
      combine: {        // toggle
        namedKey: true,                // always        
        arrReducerCombine: true,       // always
        arrReducerExportCombine: true, // always
        arrReducerNamed1: true,        // always
        arrReducerNamed2: true,        // always
      },
      async: {                   // toggle
        arrStoreThunk: true,     // always
        arrStoreMiddleWare: true,// always
        arrActionsDispatch: true,// always (dispatch async)
        arrActionsAsync: true,   // always 
        
      },
      switchh: false,            // toggle
      form: {                    // toggle
        arrC1Form: true,         // always
        arrActionsSubmit: true,  // always
      },
      compose: {                 // toggle
        arrC1Compose: true,      // toggle
      },  
      arrIndexStore: true,       // always
      arrIndexProvider: true,    // always
      arrIndexProviderOut: true, // always
      arrStoreMiddleWare: false, // invoked by middleware (now just thunk)
      arrStoreReducer: true,     // always
      arrStoreCreate: true,      // always
      arrStoreExport: true,      // always
      arrC1Connect: true,        // always
      arrC2Connect: true,        // always (change later)
      arrReducerExport: true,    // always
      arrActionsExport: true,    // always 
      arrActionsReducer: true,   // always
      arrActionsC1: true,        // always
      arrActionsC2: true,        // always (change later)
    }
  }
};

// arrC1Exp: false,
// arrC2Exp: false,  
// arrActionsExport


export const TOGGLE = 'TOGGLE';

export const toggle = (arg, state) => {
  // argument must be a property of state that is boolean
  const action = deepAssign({}, state, {type: TOGGLE} );
  console.log (arg, action);
  // reverse arg
  console.log('before: ',action[arg], state[arg]);
  action[arg] = !state[arg];
  console.log('after: ',action[arg], state[arg]);

  return action;
}