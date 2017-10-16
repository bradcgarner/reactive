import React from 'react';
import { connect } from 'react-redux';

// toggle redux: on variable className/this
export function MethodDispatch(props) {
  console.log('10 dispatch1',props);
  
  return (
        <div className="group component1methodDispatch"> 
          <div className="code in1"><p>this.props.dispatch( actionName ( value ) ) ;</p></div>
          <div className="code in1"><p>this.props.dispatch( asyncActionName ( value ) ) ;</p></div>{/* toggle async: on */}         
        </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(MethodDispatch)