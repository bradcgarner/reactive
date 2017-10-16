import React from 'react';
import { connect } from 'react-redux';

export function MethodCallbackUp(props) {
  console.log('8up callback1',props);
  
  return (
      <h3>Test</h3>
  )
};

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
});

export default connect(mapStateToProps)(MethodCallbackUp);