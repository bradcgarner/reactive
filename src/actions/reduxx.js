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