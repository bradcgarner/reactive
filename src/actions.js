const deepAssign = require('deep-assign');

// refer to /reducers/index.js for description of each state property

const DEPENDENCIES = {
  
  // in all cases, when the parent turns off, all its children turn off
  // true = when parent turns on, child automatically turns on.
  // false = child is turned on separately from parent
  // toggle = directly toggled by user in menu
  // variable = affected by combination of conditions, toggled in variable condition object
  // always name arrows starting with 'arr' (used in calc and for ease of use)
  // arrows are NEVER objects; always boolean in dependencies; always numbers in state.
  reactt: {            // toggle
    arrReact: true,
    classs: {          // toggle
      stateful: false, // toggle on tier 2
      arrC1Class: true,
      arrC1Constructor: false,
    },
    stateful: {        // toggle
      arrC1Stateful: true,   
      arrC1Constructor: true,      
    },
    propss: {          // toggle
      arrC1Props: true,
      arrC2Props: true,
    },     // toggle
    callback: {        // toggle
      arrC1Callback: true,
      arrC2Callback: true,
    },
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
      arrRedux: true,
      mapState: {       // toggle
        arrC1MapState: true,
      },  
      combine: {        // toggle
        arrReducerCombine: true,       // always
        arrReducerExportCombine: true, // always
        arrReducerNamed1: true,        // always
        arrReducerNamed2: true,        // always
      },
      async: {                   // toggle
        arrC1Async: true,        // always
        arrStoreThunk: true,     // always
        arrStoreMiddleWare: true,// always
        arrActionsDispatch: true,// always (dispatch async)
        arrActionsAsync: true,   // always 
      },
      switchh: {                 // toggle
        arrReducerSwitch: true,
      },
      form: {                    // toggle
        arrC1Form: true,         // always
        arrActionsSubmit: true,  // always
        arrReducerForm: true,    // always
      },
      compose: {                 // toggle
        arrC1Compose: true,      // toggle
        arrC2Compose: true,      // toggle
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

// arrC1Exp: false, turn off when Redux is on
// arrC2Exp: false, turn off when Redux is off
// arrActionsExport
// arrC1Callback turn off when Redux is on

const flippedOff = -1;
const off = 0;
const on = 1;
const max = 9;

const findDependencies = (prop) => {
  // get dependencies (if any) of the prop that was just toggled, then flatten that into an array in a separate variable
    // recursively loop through the tree.  When we find the prop, return it.
    // If the prop is boolean (rare), we return the boolean.
    // usually the prop is an object; we return the whole object.
    // We end up with a pointer to the global DEPENDENCIES object
  let depPointer;

  const findDependenciesLoop = (prop, dependencies) => {
    // console.log('')
    // console.log('find deps', prop, 'in', dependencies)
    if ( typeof dependencies[prop] === 'object') {
      // console.log('found dep, returning', dependencies[prop])
      depPointer = dependencies[prop];
    } else if ( typeof dependencies === 'object' ) {
      // console.log('keep searching for dep in object',dependencies)
      for ( let key in dependencies ) {
        if ( typeof dependencies[key] === 'object')
        // console.log('key:',key,'find prop', prop, 'in', dependencies[key])
        findDependenciesLoop(prop, dependencies[key])          
      }
    } else {
      // console.log(prop, 'not found')
    }
  }
  findDependenciesLoop(prop, DEPENDENCIES);
  return depPointer;
}

const removeDependentProps = (dependenciesPointer, allProps) => {
  const remainingPropsObj = Object.assign({}, allProps);
  for (let property in dependenciesPointer) {
    delete remainingPropsObj[property];          
  }
  return remainingPropsObj;
}

const listLayerNumsRemaining = (dependenciesPointer, remainingPropsObj) => {
  let layerNumsRemaining = [];
  
  const loopLayerNumsRemaining = (dependenciesPointer, remainingPropsOb) => {
    for (let dep in dependenciesPointer){
      if ( typeof dependenciesPointer[dep] === 'object') {
        return loopLayerNumsRemaining (dependenciesPointer[dep], remainingPropsOb);
      } else if ( typeof remainingPropsObj[dep] === 'number' ) {
        if ( !layerNumsRemaining.includes(remainingPropsObj[dep]) ) {
          return layerNumsRemaining.push(remainingPropsObj[dep]);
        }
      }
    }
  };

  if (layerNumsRemaining.length > 0 ) {
    layerNumsRemaining.sort((a,b)=>a-b);
  }

  loopLayerNumsRemaining (dependenciesPointer, remainingPropsObj);
  return layerNumsRemaining;
}

const decrementProps = (layerNumsRemainingArr, remainingPropsObj) => {
  const updatedProps = Object.assign({}, remainingPropsObj);
  // layerNumsRemainingArr should have no duplicates
    // start at highest number and go backwards
    // new number should be index + 1
    // e.g. old array [ 1, 3, 5, 6, 8 ]
    // i =              0  1  2  3  4
    // newNum =         1  2  3  4  5
  if ( layerNumsRemainingArr.length ) {
    for (let i=layerNumsRemainingArr.length-1 ; i>=0 ; i--) {
      let newNum = i+1;
      for(let prop in remainingPropsObj) {
        if ( remainingPropsObj[prop] === layerNumsRemainingArr[i] ) {
          remainingPropsObj[prop] = newNum ;
        }
      }
    }
  }
  return updatedProps;
}

const incrementStack = (prop, action, turnOn, dependenciesPointer) => {
  // increment the stack; if turning on, increment existing; if turning off, decrement existing (only affects numeric properties)
    // if turning on, increment everything already on
    // this might increment what we are about to turn off, but that's ok
    // if turning off, decrement what remains. This is the complex part...
    // when turning off, first determine whether an entire layer is turned off.
    // e.g., if we have 3 layers at level 2, and we turn off 2 of those 3, we have 1 layer remaining at stack 2.
    // therefore, we do not decrement that layer.
  const allProps = Object.assign({},action);
  let updatedProps;
  if ( turnOn ) {
    updatedProps = allProps;
    // console.log('turn on');
    for (let prop in allProps) {
      // console.log('prop in allProps', prop, allProps);
      // console.log('typeof',typeof allProps[prop] )
      if ( typeof allProps[prop] === 'number' && allProps[prop] >= on && allProps[prop] < max) {
        allProps[prop]++
        // console.log(allProps[prop]);
      }
    } 
  } else {  // if turning off, 
    // console.log('decrement')
    // create an object with only props to remain; used for tracking in this function
    const remainingPropsObj = removeDependentProps(dependenciesPointer, allProps)
    // list all layers that are at least partially removed
    // array might have duplicates, e.g. [1,1,2,4,5,5,5,7,2,3,1]
    // const layerNumsRemovedArr = listLayersFullyRemoved(dependenciesPointer, remainingPropsObj);
    // whittle this list by layers completely removed
    const layerNumsRemainingArr = listLayerNumsRemaining(dependenciesPointer, remainingPropsObj);
    updatedProps = decrementProps(layerNumsRemainingArr, remainingPropsObj);
  }
  return updatedProps;
}

const toggleDependencies = (action, turnOn, dependenciesPointer) => {
  // toggleDependencies includes adding arrows to stack as #on, and removing as #flippedOff
  // toggleDependencies handles text as simple on/off
  let newAction = Object.assign({}, action);

  const flipOn = (dependency, newAction) => {
    // console.log('');
    // console.log('flip on {}', dependency);
    // console.log('newAction{...}',newAction);
    
    for (let key in dependency) {                         // only one key
      // console.log('let key in dependency', key, '(', typeof dependency[key], ')')
      // console.log('typeof dependency[key]', typeof dependency[key])
      // console.log('dependency[key]', dependency[key])
      
      // console.log('dependency[key]', dependency[key])
      // console.log('default on', defaultOn);

      if (typeof dependency[key] === 'object') {
        // console.log('turn off object', key)
        newAction[key] = false;                        // match default
      } else if (typeof newAction[key] === 'boolean') {          
          newAction[key] = dependency[key];                        // match default
          // console.log('newAction[key] boolean on', key, newAction[key])
      } else if (typeof newAction[key] === 'number') {   
        if ( newAction[key] < on && dependency[key] ) {        // turn on only if default is on
          newAction[key] = on;                          // on is a global variable set to 1
          // console.log('newAction[key] number on', key, newAction[key])
        }
      } 
    }
  };

  const flipOff = (dependency, newAction) => {
    // console.log('');    
    // console.log('flip off', dependency);
    // console.log('newAction',newAction);
    for (let key in dependency) {
      // console.log('let key in dependency', key)
      // console.log('typeof newAction[key]', typeof newAction[key])
      // console.log('newAction[key] before', newAction[key])
      // console.log('dependency[key] before', dependency[key])
      
      if (typeof newAction[key] === 'boolean') {          
        newAction[key] = false;                        // always turn off
        // console.log('newAction[key] boolean off', key, newAction[key])
      } else if (typeof newAction[key] === 'number') { // number dependencies always flip off
        if ( newAction[key] >= on ) {                  // but only if already on
          newAction[key] = flippedOff;                 // flippedOff is a global variable set to -1
          // console.log('newAction[key] number off', key, newAction[key])
        }
      }

      if (typeof dependency[key] === 'object') {
        // console.log('recurse off', key)
        flipOff(dependency[key], newAction);
      }
    }
  };

  if (typeof dependenciesPointer === 'object') {
    
    if (turnOn) {
      // console.log(' ');
      // console.log('dep obj to turn on', dependenciesPointer);
      flipOn(dependenciesPointer, newAction);

    } else { 
      // console.log(' ');    
      // console.log('dep obj to turn off', dependenciesPointer);
      flipOff(dependenciesPointer, newAction);
    }

  }
  return newAction;
}

// flippedOff is -1; find these and turn to simple off, which is 0
const removeFlippedOff = action => {
  const newAction = Object.assign({}, action);
  for (let prop in newAction) {
    newAction[prop] = newAction[prop] === flippedOff ? off : newAction[prop] ;
  }
  return newAction;
}

export const toggle = (prop, state) => dispatch => {
  let turnOn;
  return new Promise((resolve, reject)=> {
    const action = deepAssign({}, state );
    // reverse arg
    action[prop] = !state[prop];
    // save whether we are turning on (increment stack) or turning off (decrement)
    turnOn = action[prop];
    const dependenciesPointer = findDependencies(prop);
    console.log('dependenciesPointer',dependenciesPointer)
    const incrementedStackObj = incrementStack(prop, action, turnOn, dependenciesPointer);
    // merge with remaining copy of state
    const incrementedState = Object.assign({}, action, incrementedStackObj);
    const newAction = toggleDependencies(incrementedState, turnOn, dependenciesPointer);
    // finally, as a timeout
    resolve(newAction);
    reject(action);
  })
  .then(action=>{
    dispatch(toggleAction(action));
    setTimeout(function(){
      if ( !turnOn ) {
        const clearedAction = removeFlippedOff(action);
        return dispatch(toggleActionClear(clearedAction));
      }
    }, 1000);
  })
  .then(()=>{});
}

export const TOGGLE_ACTION = 'TOGGLE_ACTION';
export const toggleAction = action => {
  return Object.assign({}, action, {type: TOGGLE_ACTION});
}

export const TOGGLE_ACTION_CLEAR = 'TOGGLE_ACTION_CLEAR';
export const toggleActionClear = action => {
  return Object.assign({}, action, {type: TOGGLE_ACTION_CLEAR});
}