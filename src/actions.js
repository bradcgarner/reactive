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
// arrC2Exp: false,   turn off when Redux is on
// arrActionsExport
// arrC1Callback turn off when Redux is on

const flippedOff = -1;
const off = 0;
const on = 1;
const max = 9;


// recursively loop through the tree.  When we find the prop, return it.
// If the prop is boolean (rare), we return the boolean.
// usually the prop is an object; we return the whole object.
// We end up with a pointer to the global DEPENDENCIES object
const findDependencies = (prop) => {
  console.log('findDependencies',prop)
  console.log('DEPENDENCIES', DEPENDENCIES)

  const findDependenciesLoop = (prop, dependencies) => {
    if ( dependencies[prop] ) {
      console.log('found dependency: returning:', dependencies[prop])
      return dependencies[prop];
    } else if ( typeof dependencies === 'object' ) {
      for ( let key in dependencies ) {
        console.log('recurse prop in dep', key, dependencies)
        return findDependenciesLoop(prop, dependencies[key])
      }
    } else {
      return;
    }
  }
  return findDependenciesLoop(prop, DEPENDENCIES);
}

// recursively loop through a subset of the global DEPENDENCIES object, 
// flatten all props into an array to match the 1-dimensional state object
// global DEPENDENCIES object assigns boolean properties to each end node
// true = turn on automatically
// Convey all booleans. Objects don't have booleans, so set to false.
// return the array, primed to merge with state
// const flattenDependencies = (dependenciesPointer) => {
//   let found = [];  

//   const pushDependencyIntoFound = (dependency, dependenciesPointer) => {
//     if ( typeof dependency === 'object' ) {
//       for (let key in dependency) {
//         let node = {};
//         node[key] = false;
//         found.push(node);
//         return pushDependencyIntoFound(dependency[key], dependency)
//       }
//     } else {
//       console.log('dependency',dependency)
//       let node = {};
//       node[dependency] = dependenciesPointer[dependency];
//       console.log('node to push into found',node)
//       return found.push(node);
//       // console.log('--- found boolean', found);  
//     }
//   }

//   for ( let dependency in dependenciesPointer ) {
//     pushDependencyIntoFound(dependency, dependenciesPointer)
//     console.log('in dependency', dependency);
//   };

//   return found;
// }

// const listLayersFullyRemoved = (dependenciesPointer, remainingPropsObj) => {
//   const layerNumsRemoved = []
//   // console.log('dependent',dep);
//   for (let property in dependenciesPointer) {
//     // console.log('prop of dependent',ppty)
//     if (typeof remainingPropsObj[property] === 'number' &&
//       !layerNumsRemoved.includes(remainingPropsObj[property])
//     ) {
//       layerNumsRemoved.push(remainingPropsObj[property]);
//       // console.log('layerNumsRemoved after push',layerNumsRemoved)
//     }
//     // console.log('layerNumsRemoved after populating',layerNumsRemoved)
//   }
//   return layerNumsRemoved;
// }

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
    // console.log('layerNumsRemainingArr',layerNumsRemainingArr)      
    for (let i=layerNumsRemainingArr.length-1 ; i>=0 ; i--) {
      let newNum = i+1;
      // console.log('i',i, 'newNum', newNum)
      for(let prop in remainingPropsObj) {
        // console.log('prop, remainingPropsObj',prop, remainingPropsObj)
        if ( remainingPropsObj[prop] === layerNumsRemainingArr[i] ) {
          // console.log('before', remainingPropsObj[prop])
          remainingPropsObj[prop] = newNum ;
          // console.log('after', remainingPropsObj[prop])
        }
      }
    }
  }
  return updatedProps;
}

// if turning on, increment everything already on
// this might increment what we are about to turn off, but that's ok
// if turning off, decrement what remains. This is the complex part...
// when turning off, first determine whether an entire layer is turned off.
// e.g., if we have 3 layers at level 2, and we turn off 2 of those 3, we have 1 layer remaining at stack 2.
// therefore, we do not decrement that layer.
const incrementStack = (prop, action, turnOn, dependenciesPointer) => {
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
    // console.log('remainingPropsObj after deletions from allProps',remainingPropsObj)
    // whittle this list by layers completely removed
    const layerNumsRemainingArr = listLayerNumsRemaining(dependenciesPointer, remainingPropsObj);
    updatedProps = decrementProps(layerNumsRemainingArr, remainingPropsObj);
  }
  return updatedProps;
}

const toggleDependencies = (action, turnOn, dependenciesPointer) => {
  let newAction = Object.assign({}, action);

  const flipOn = (dependency, newAction) => {
    console.log('');
    console.log('flip on {}', dependency);
    console.log('newAction{...}',newAction);
    
    for (let key in dependency) {                         // only one key
      console.log('let key in dependency', key)
      console.log('typeof dependency[key]', typeof dependency[key])
      console.log('dependency[key]', dependency[key])
      
      console.log('dependency[key]', dependency[key])
      // console.log('default on', defaultOn);

      if (typeof dependency[key] === 'object') {
        console.log('turn off object', key)
        newAction[key] = false;                        // match default
      } else if (typeof newAction[key] === 'boolean') {          
          newAction[key] = dependency[key];                        // match default
          console.log('newAction[key] boolean on', key, newAction[key])
      } else if (typeof newAction[key] === 'number') {   
        if ( newAction[key] < on && dependency[key] ) {        // turn on only if default is on
          newAction[key] = on;                          // on is a global variable set to 1
          console.log('newAction[key] number on', key, newAction[key])
        }
      } 
    }
  };

  const flipOff = (dependency, newAction) => {
    console.log('');    
    console.log('flip off', dependency);
    console.log('newAction',newAction);
    for (let key in dependency) {
      console.log('let key in dependency', key)
      console.log('typeof newAction[key]', typeof newAction[key])
      console.log('newAction[key] before', newAction[key])
      console.log('dependency[key] before', dependency[key])
      
      if (typeof newAction[key] === 'boolean') {          
        newAction[key] = false;                        // always turn off
        console.log('newAction[key] boolean off', key, newAction[key])
      } else if (typeof newAction[key] === 'number') { // number dependencies always flip off
        if ( newAction[key] >= on ) {                  // but only if already on
          newAction[key] = flippedOff;                 // flippedOff is a global variable set to -1
          console.log('newAction[key] number off', key, newAction[key])
        }
      }

      if (typeof dependency[key] === 'object') {
        console.log('recurse off', key)
        flipOff(dependency[key], newAction);
      }
    }
  };

  if (typeof dependenciesPointer === 'object') {
    
    if (turnOn) {
      console.log(' ');
      console.log('dep obj to turn on', dependenciesPointer);
      flipOn(dependenciesPointer, newAction);

    } else { 
      console.log(' ');    
      console.log('dep obj to turn off', dependenciesPointer);
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
    // argument must be a property of state that is boolean
    const action = deepAssign({}, state );
    // console.log ('start toggle: prop & full starting state',prop, action);
    // console.log('before: ',action[prop], state[prop]);
    // reverse arg
    action[prop] = !state[prop];
    // console.log('after: ',action[prop], state[prop]);
    // save whether we are turning on (increment stack) or turning off (decrement)
    turnOn = action[prop];
    // console.log('on', turnOn);
    // get dependencies (if any) of the prop that was just toggled, then flatten that into an array in a separate variable
    const dependenciesPointer = findDependencies(prop);
    console.log('dependenciesPointer', dependenciesPointer)
    // const dependenciesPointerArr = flattenDependencies(dependenciesPointer); // we only need the first one, which may be a nested object.
    // console.log('dependenciesPointerArr', dependenciesPointerArr)
    // increment the stack; if turning on, increment existing; if turning off, decrement existing (only affects numeric properties)
    const incrementedStackObj = incrementStack(prop, action, turnOn, dependenciesPointer);
    // console.log('updatedStack', updatedStack)
    // merge with remaining copy of state
    const incrementedState = Object.assign({}, action, incrementedStackObj);
    // console.log('incrementedActions', incrementedActions);
    // toggleDependencies includes adding arrows to stack as #on, and removing as #flippedOff
    // toggleDependencies handles text as simple on/off
    const newAction = toggleDependencies(incrementedState, turnOn, dependenciesPointer);
    console.log('newAction',newAction);
    // finally, as a timeout
    // go through state, and if flippedOff, set to plain Off
    resolve(newAction);
    reject(action);
  })
  .then(action=>{
    dispatch(toggleAction(action));
    console.log('resolved', action);
    setTimeout(function(){
      if ( !turnOn ) {
        // console.log('timing out...');
        const clearedAction = removeFlippedOff(action);
        // console.log('cleared action',clearedAction);
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