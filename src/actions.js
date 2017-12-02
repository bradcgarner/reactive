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
      arrC1Class: false,
      arrC1Stateful: false,
    },
    stateful: false,   // toggle
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

// arrC1Exp: false,
// arrC2Exp: false,  
// arrActionsExport

const flippedOff = -1;
const off = 0;
const on = 1;
const max = 9;


// recursively loop through the tree.  When we find the prop we want, push it on.
// When we push the prop on, if it is an object with dependencies, we push on the entire object.
// We continue to recurse through the rest of the tree after finding, which is not needed.
// While continuing, we push on nested dependencies, which we don't need.
// So the [0] index of what we return is valuable; the rest is FYI.
const extractDependencies= (prop, dependencies) => {
  let found = [];
  const findDependencies = (prop, dependencies) => {
    if ( dependencies[prop] ) {
      return found.push(dependencies[prop]);
    } else if ( typeof dependencies === 'object' && !found.length ) {
      for ( let property in dependencies ) {
        findDependencies(prop, dependencies[property])
      }
    } else {
      return;
    }
  }
  findDependencies(prop, dependencies);
  return found;
}

// recursively loop through a subset of the global DEPENDENCIES object, 
// flatten all props into an array to match the 1-dimensional state object
// global DEPENDENCIES object assigns boolean properties to each end node
// true = turn on automatically
// Convey all booleans. Objects don't have booleans, so set to false.
// return the array, primed to merge with state
const flattenDependencies = (dependencies) => {
  let found = [];  

  const loopDependencies = (prop, dependencies, count=0) => {
    if ( typeof dependencies[prop] === 'object' ) {
      let node = {};
      node[prop] = false;
      found.push(node);
      // console.log('--- found object', found);
      for ( let prop in dependencies[prop] ) {
        loopDependencies(prop, dependencies[prop], count+1)
      }
    } else if ( typeof dependencies[prop] === 'boolean' ) {
      let node = {};
      node[prop] = count > 0 ? false : dependencies[prop];
      found.push(node);
      // console.log('--- found boolean', found);      
      return;
    } else {
      return;
    }
  }

  for ( let prop in dependencies ) {
    // console.log('---prop', prop, 'in dependencies', dependencies);
    loopDependencies(prop, dependencies)
  }
  return found;
}

const listAllNumericDependencies = (flatDependencies, remainingProps) => {
  const layerNumsRemoved = []
  flatDependencies.forEach(dep => {
    // console.log('dependent',dep);
    for (let ppty in dep) {
      // console.log('prop of dependent',ppty)
      if (typeof remainingProps[ppty] === 'number' && !layerNumsRemoved.includes(remainingProps[ppty])) {
        layerNumsRemoved.push(remainingProps[ppty]);
        // console.log('layerNumsRemoved after push',layerNumsRemoved)
      }
      // console.log('layerNumsRemoved after populating',layerNumsRemoved)
    }
  })
  return layerNumsRemoved;
}

const removeDependentProps = (flatDependencies, allProps) => {
  const remainingProps = Object.assign({}, allProps);
  flatDependencies.forEach(dep=>{
    // console.log('dependent ',dep);
    for (let p in dep) {
      // console.log('prop of dependent',p)
      delete remainingProps[p];          
    }
  });
  return remainingProps;
}

const listLayerNumsRemaining = (layerNumsAffected, remainingProps) => {
  const layerNumsRemaining = [...layerNumsAffected];
  layerNumsRemaining.forEach((number, index)=>{
    // console.log('layer,index',number, index);
    for(let prp in remainingProps) {
      // console.log('prp, remainingProps',prp, remainingProps)
      if ( layerNumsRemaining.includes(remainingProps[prp]) ) {
        // console.log('removing remainingProps[prp]', remainingProps[prp])
        layerNumsRemaining.splice(index,1);
      } 
      // console.log('layerNumsRemoved',layerNumsRemoved)
    }
  })
  return layerNumsRemaining;
}

const decrementProps = (layerNumsRemoved, remainingProps) => {
  const updatedProps = Object.assign({}, remainingProps);
  // if a layer is completely removed, decrement all layers greater than it
  // start at highest number and reverse
  if ( layerNumsRemoved.length ) {
    layerNumsRemoved.sort((a,b)=>a-b);
    // console.log('layerNumsRemoved after sort',layerNumsRemoved)      
    for (let i=layerNumsRemoved.length-1 ; i>=0 ; i--) {
      // console.log('i',i)
      for(let prp in remainingProps) {
        // console.log('prp, remainingProps',prp, remainingProps)
        if ( remainingProps[prp] > layerNumsRemoved[i] ) {
          // console.log('before', remainingProps[prp])
          remainingProps[prp]--;
          // console.log('after', remainingProps[prp])
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
const incrementStack = (prop, action, turnOn, flatDependencies) => {
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
    const remainingProps = removeDependentProps(flatDependencies,allProps)
    // list all layers that are at least partially removed
    // array might have duplicates, e.g. [1,1,2,4,5,5,5,7,2,3,1]
    const layerNumsRemoved = listAllNumericDependencies(flatDependencies, allProps);
    // console.log('remainingProps after deletions from allProps',remainingProps)
    // whittle this list by layers completely removed
    const layerNumsRemaining = listLayerNumsRemaining(layerNumsRemoved, remainingProps);
    updatedProps = decrementProps(layerNumsRemaining, remainingProps);
  }
  return updatedProps;
}

const toggleDependencies = (action, turnOn, dep) => {
  let newAction = Object.assign({}, action);
  dep.forEach(obj => {
    for ( let prop in obj ) {
      // console.log('prop in obj', prop, obj);
      // console.log('turnOn',turnOn);
      // console.log('newAction[prop]',typeof newAction[prop], newAction[prop]);
      // console.log('newAction[prop]',newAction[prop]);
      if (newAction[prop] === true && !turnOn) {     // dependency is on; we are turning parent off
        newAction[prop] = false;                     // so turn off
        // console.log('just turned off ',prop,newAction[prop]);
      } else if (
        prop.slice(0,3) === 'arr' && 
        typeof newAction[prop] === 'number') {             // arrows are numbers in state, boolean in dependencies
          // console.log('ON AN ARROW, turn on, prop, obj', turnOn, prop, obj)
        if (turnOn && newAction[prop] < on && obj[prop]) { // dependency is off; dep[prop]: 'true' = always on
          newAction[prop] = on;                            // so turn on (on is a global variable set to 1)
        // console.log('turn on', );
        } else if (!turnOn && newAction[prop] >= on ) {    // dependency is on; we are turning off parent
          newAction[prop] = flippedOff;                    // so flip off (flippedOff is a global variable set to -1)
          // console.log('flip off')
        }
      } else if (typeof dep[prop] === 'boolean') {     // this will be all text properties; booleans in state & dependencies
        if (!newAction[prop] && obj[prop] && turnOn) { // filter dependencies by 'true' (always on when parent is on)
          newAction[prop] = true;                      // so turn on
        } else if (newAction[prop] && !turnOn) {       // dependency is on; we are turning parent off
          newAction[prop] = false;                     // so turn off
        } 
      }
    }
  });
  return newAction;
}

// flippedOff is -1; find these and turn to simple off, which is 0
export const removeFlippedOff = action => {
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
    const thisDependencies = extractDependencies(prop, DEPENDENCIES);
    // console.log('thisDependencies', thisDependencies)
    const flatDependencies = flattenDependencies(thisDependencies[0]); // we only need the first one, which may be a nested object.
    // console.log('flatDependencies', flatDependencies)
    // increment the stack; if turning on, increment existing; if turning off, decrement existing (only affects numeric properties)
    const incrementedStack = incrementStack(prop, action, turnOn, flatDependencies);
    // console.log('updatedStack', updatedStack)
    // merge with remaining copy of state
    const incrementedState = Object.assign({}, action, incrementedStack);
    // console.log('incrementedActions', incrementedActions);
    // toggleDependencies includes adding arrows to stack as #on, and removing as #flippedOff
    // toggleDependencies handles text as simple on/off
    const newAction = toggleDependencies(incrementedState, turnOn, flatDependencies);
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