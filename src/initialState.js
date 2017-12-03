// on = true, hidden = logic within components will destroy components if not true.  i.e. redux may be false, and async (subset of redux) may be true, but component that displays async will verify both to be true before creating async
export const initialState = {

  // react
  reactt: true,     // react on or off, if react if off, all others are hidden
  classs: false,    // component1 is a class, not a function
  stateful: false,  // component1 is stateful, hidden if class is off
  propss: true,     // component1 passes props to component2, hidden if redux is on
  callback: false,  // component1 passes callback function prop to component2, hidden if redux is on
  links: false,     // components1 & 2 show links
  routes: false,    // components1 & 2 show routes
    
  // redux
  reduxx: false,    // redux is on; if off, following 3 are hidden
  mapState: false,  // component1 maps state to props
  combine: false,   // if off, 1 reducer shows, if on 2 reducers show and are combined
  async: false,     // component1 calls an async action
  switchh: false,   // reducer switch
  form: false,      // component 1 uses Redux form
  compose: false,   // component 1 uses compose
    
  arrReact: 1,
  arrRedux: 0,
  
  arrIndexHTML: 1,
  arrIndexDOM: 1,
  arrIndexC1: 1,
    
  arrIndexStore: 0,    
  arrIndexProvider: 0,
  arrIndexProviderOut: 0,

  arrC1Constructor: 0,
  arrC1Class: 0,
  arrC1Stateful: 0,
  arrC1Props: 1,
  arrC1Callback: 0,
  arrC1MapState: 0,
  arrC1Async: 0,
  arrC1Link: 0,
  arrC1Route: 0,
  arrC1Router: 0,
  arrC1Exp: 1,

  arrC1Connect: 0,
  arrC1Callback: 0,
  arrC1Compose: 0,
  arrC1Form: 0,

  arrC2Props: 1,  
  arrC2Callback: 0,
  
  arrC2Exp: 1,
  arrC2Link: 0,
  arrC2Route: 0,

  arrC2Connect: 0,
  arrC2Compose: 0,
  
  arrStoreReducer: 0,
  arrStoreCreate: 0,
  arrStoreMiddleWare: 0,
  arrStoreThunk: 0,
  arrStoreExport: 0,
    
  arrReducerCombine: 0,
  arrReducerNamed1: 0,
  arrReducerNamed2: 0,
  arrReducerExport: 0,
  arrReducerExportCombine: 0,
  arrReducerSwitch: 0,
    
  arrActionsDispatch: 0,
  arrActionsExport: 0,
  arrActionsSubmit: 0,
  arrActionsReducer: 0,
  arrActionsAsync: 0,
  arrActionsC1: 0,
  arrActionsC2: 0,
};