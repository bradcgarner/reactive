import React from 'react';
import { connect } from 'react-redux';

// varables: default ; toggle: redux off: off, redux on & ????: on

export function Connect2(props) {
  console.log('17 compon2 connect',props);
  
  return (
    <div className="group component2connect">
      <div className="code in1"><p>export default connect( mapStateToProps )( Component1 )</p></div> 
    </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(Connect2)