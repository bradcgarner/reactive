import React from 'react';
import { connect } from 'react-redux';


// varables: default, mapStateToProps ; toggle: redux off: off, redux on & ????: on
export function Connect1(props) {
  console.log('13 connect1',props);
  
  return (
        <div className="code component1connect in1"><p>export default connect( mapStateToProps )( Component1 )</p></div> 
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(Connect1)