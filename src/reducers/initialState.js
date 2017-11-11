// on = true, hidden = logic within components will destroy components if not true.  i.e. redux may be false, and async (subset of redux) may be true, but component that displays async will verify both to be true before creating async
export const initialState = {
  reactt: {
    reactt: true,     // react on or off, if react if off, all others are hidden
    classs: false,    // component1 is a class, not a function
    stateful: false,  // component1 is stateful, hidden if class is off
    propss: true,     // component1 passes props to component2, hidden if redux is on
    callback: false,  // component1 passes callback function prop to component2, hidden if redux is on
    links: false,     // components1 & 2 show links
    routes: false,    // components1 & 2 show routes
    
    arrIndexHTML: 0,
    arrIndexDOM: 0,
    arrIndexC1: 0,
    
    arrC1Link: 0,
    arrC1Route: 0,
    arrC1Router: 0,
    arrC2Route: 0,
    arrC1Exp: 0,

    arrC2Exp: 0,
    arrC2Link: 0,
    arrC2Route: 0,
    

  },
  reduxx: {
    reduxx: false,    // redux is on; if off, following 3 are hidden
    mapState: false,  // component1 maps state to props
    combine: false,   // if off, 1 reducer shows, if on 2 reducers show and are combined
    async: false,     // component1 calls an async action
    switchh: false,   // reducer switch
    namedKey: false,  // reducer keys are named
    form: false,      // component 1 uses Redux form
    compose: false,   // component 1 uses compose
    
    arrIndexStore: 0,    
    arrIndexProvider: 0,
    arrIndexProviderOut: 0,
    
    arrC1Connect: 0,
    arrC1Compose: 0,
    arrC1Form: 0,

    arrC2Connect: 0,
    arrC2Compose: 0,

    arrStoreReducer: 0,
    arrStoreCreate: 0,
    arrStoreMiddlwWare: 0,
    arrStoreThunk: 0,
    arrStoreExport: 0,
    
    arrReducerCombine: 0,
    arrReducerNamed1: 0,
    arrReducerNamed2: 0,
    arrReducerExport: 0,
    arrReducerExportCombine: 0,
    
    arrActionsDispatch: 0,
    arrActionsExport: 0,
    arrActionsSubmit: 0,
    arrActiosnReducer: 0,
    arrActionsC1: 0,
    arrActionsC2: 0,
    
  }
};

console.log('initialState def', initialState);