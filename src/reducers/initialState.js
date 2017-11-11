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
  }
};

console.log('initialState def', initialState);