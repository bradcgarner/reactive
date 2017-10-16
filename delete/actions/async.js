import React from 'react';
import { connect } from 'react-redux';

export function Async() {
  return (
        <div className="group actionsAsync">
          <div className="code in1"><p>export const asyncActionName = arg => dispatch => ( &#123;</p></div>
          <div className="code in2"><p>dispatch( actionName() );</p></div>
          <div className="code in2"><p>asyncFunctionReturnsPromise( arg )</p></div>
          <div className="code in3"><p>.then( res => dispatch( actionName( res ) ) )</p></div>
          <div className="code in3"><p>.catch( err => dispatch( actionName( err ) ) );</p></div>
          <div className="code in1"><p>} );</p></div>
        </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(Async)