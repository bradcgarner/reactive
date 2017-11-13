const deepAssign = require('deep-assign');

// refer to /reducers/index.js for description of each state property

const dependencies = {
  
  // in all cases, when the parent turns off, all its children turn off
  // true = when parent turns on, child automatically turns on.
  // false = child is turned on separately from parent
  // toggle = directly toggled by user in menu
  // variable = affected by combination of conditions, toggled in variable condition object
  // always name arrows starting with 'arr' (used in calc and for ease of use)
  // arrows are NEVER objects; always boolean in dependencies; always numbers in state.
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

const flippedOff = -1;
const off = 0;
const on = 1;
const max = 9;


const extractDependencies= (arg,dep) => {
  let found = [];
  const findDependencies = (arg, dep) => {
    if ( dep[arg] ) {
      return found.push(dep[arg]);
    } else if ( typeof dep === 'object' && !found.length ) {
      for ( let prop in dep ) {
        findDependencies(arg, dep[prop])
      }
    } else {
      return;
    }
  }
  findDependencies(arg,dep);
  return found[0];
}

const flattenDependencies = (dep) => {
  let found = [];  

  const loopDependencies = (arg, dep, count=0) => {
    if ( typeof dep[arg] === 'object' ) {
      let node = {};
      node[arg] = false;
      found.push(node);
      console.log('--- found object', found);
      for ( let prop in dep[arg] ) {
        loopDependencies(prop, dep[arg], count+1)
      }
    } else if ( typeof dep[arg] === 'boolean' ) {
      let node = {};
      node[arg] = count > 0 ? false : dep[arg];
      found.push(node);
      console.log('--- found boolean', found);      
      return;
    } else {
      return;
    }
  }

  for ( let prop in dep ) {
    // console.log('---prop', prop, 'in dep', dep);
    loopDependencies(prop, dep)
  }
  return found;
}

const updateStack = (prop, action, turnOn, depArray) => {
  // if turning on, increment everything already on
  // this might increment what we are about to turn off, but that's ok
  const remainingProps = Object.assign({},action);
  if ( turnOn ) {
    // console.log('turn on');
    for (let prop in remainingProps) {
      // console.log('prop in remainingProps', prop, remainingProps);
      // console.log('typeof',typeof remainingProps[prop] )
      if ( typeof remainingProps[prop] === 'number' && remainingProps[prop] >= on && remainingProps[prop] < max) {
        remainingProps[prop]++
        // console.log(remainingProps[prop]);
      }
    } 
  } else {
    // console.log('decrement')
    // list all layers that are at least partially removed
    const layerNums = []
    depArray.forEach(obj => {
      // console.log('dependent',obj);
      for (let ppty in obj) {
        // console.log('prop of dependent',ppty)
        if (typeof remainingProps[ppty] === 'number' && !layerNums.includes(remainingProps[ppty])) {
          layerNums.push(remainingProps[ppty]);
          // console.log('layerNums after push',layerNums)
        }
        // console.log('layerNums after populating',layerNums)
      }
    })
    // if turning off, 
    // create an object with only props to remain; used for tracking in this function
    depArray.forEach(obj=>{
      // console.log('dependent ',obj);
      for (let p in obj) {
        // console.log('prop of dependent',p)
        delete remainingProps[p];          
      }
    });
    // console.log('remainingProps after deletions',remainingProps)

    // whittle this list by layers completely removed
    layerNums.forEach((layer, index)=>{
      // console.log('layer,index',layer, index);
      for(let prp in remainingProps) {
        // console.log('prp, remainingProps',prp, remainingProps)
        if ( layerNums.includes(remainingProps[prp]) ) {
          // console.log('removing remainingProps[prp]', remainingProps[prp])
          layerNums.splice(index,1);
        }
        // console.log('layerNums',layerNums)
      }
    })
    // if a layer is completely removed, decrement all layers greater than it
    // start at highest number and reverse
    if ( layerNums.length ) {
      layerNums.sort((a,b)=>a-b);
      // console.log('layerNums after sort',layerNums)      
      for (let i=layerNums.length-1 ; i>=0 ; i--) {
        // console.log('i',i)
        for(let prp in remainingProps) {
          // console.log('prp, remainingProps',prp, remainingProps)
          if ( remainingProps[prp] > layerNums[i] ) {
            // console.log('before', remainingProps[prp])
            remainingProps[prp]--;
            // console.log('after', remainingProps[prp])
          }
        }
      }
    }
  }
  return remainingProps;
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
          newAction[prop] = on;                            // so turn on
        // console.log('turn on', );
        } else if (!turnOn && newAction[prop] >= on ) {    // dependency is on; we are turning off parent
          newAction[prop] = flippedOff;                    // so flip off
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

export const removeNegatives = action => {
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
    // reverse arg
    // console.log('before: ',action[prop], state[prop]);
    action[prop] = !state[prop];
    // console.log('after: ',action[prop], state[prop]);
    turnOn = action[prop];
    // console.log('on', turnOn);
    const thisDependencies = extractDependencies(prop, dependencies);
    // console.log('thisDependencies', thisDependencies)
    const flatDependencies = flattenDependencies(thisDependencies);
    console.log('flatDependencies', flatDependencies)
    // updateStack ONLY addresses arrows, which get #s
    const updatedStack = updateStack(prop, action, turnOn, flatDependencies);
    console.log('updatedStack', updatedStack)
    const incrementedActions = Object.assign({}, action, updatedStack);
    console.log('incrementedActions', incrementedActions);
    // toggleDependencies includes adding arrows to stack as #on, and removing as #flippedOff
    // toggleDependencies handles text as simple on/off
    const newAction = toggleDependencies(incrementedActions, turnOn, flatDependencies);
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
        const clearedAction = removeNegatives(action);
        // console.log('cleared action',clearedAction);
        return dispatch(toggleActionClear(clearedAction));
      }
    }, 1000);
  })
  .then(()=>{});
}

export const TOGGLE_ACTION = 'TOGGLE_ACTION';
export const toggleAction = action => {
  return Object.assign(action, {type: TOGGLE_ACTION});
}

export const TOGGLE_ACTION_CLEAR = 'TOGGLE_ACTION_CLEAR';
export const toggleActionClear = action => {
  return Object.assign(action, {type: TOGGLE_ACTION_CLEAR});
}