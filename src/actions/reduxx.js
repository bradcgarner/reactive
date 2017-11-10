// refer to /reducers/index.js for description of each state property
export const TOGGLE_REDUX = 'TOGGLE_REDUX';
export const toggleRedux = arg => ({
  type: TOGGLE_REDUX
})

export const TOGGLE_MAPSTATE = 'TOGGLE_MAPSTATE';
export const toggleMapState = arg => ({
  type: TOGGLE_MAPSTATE
})

export const TOGGLE_COMBINE = 'TOGGLE_COMBINE';
export const toggleCombine = arg => ({
  type: TOGGLE_COMBINE
})

export const TOGGLE_ASYNC = 'TOGGLE_ASYNC';
export const toggleAsync = arg => ({
  type: TOGGLE_ASYNC
})

export const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
export const toggleSwitch = arg => ({
  type: TOGGLE_SWITCH
})

export const TOGGLE_NAMEDKEY = 'TOGGLE_NAMEDKEY';
export const toggleNamedKey = arg => ({
  type: TOGGLE_NAMEDKEY
})

export const TOGGLE_FORM = 'TOGGLE_FORM';
export const toggleForm = arg => ({
  type: TOGGLE_FORM
})

export const TOGGLE_COMPOSE = 'TOGGLE_COMPOSE';
export const toggleCompose = arg => ({
  type: TOGGLE_COMPOSE
})