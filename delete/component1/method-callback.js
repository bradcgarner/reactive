import React from 'react';
import { connect } from 'react-redux';
// toggle redux: off, function: off, className & callback: on 
export function MethodCallback(props) {
  console.log('8 callback1',props);
  
  return (
        <div className ="group component1methodCallback"> 
          <div className="code in1"><p>callbackFunc( arg ) &#123;</p></div>
          <div className="code in2"><p>this.setState(&#123;</p></div>
          <div className="code in3"><p>prop: arg</p></div>
          <div className="code in2"><p>&#125;)</p></div>
          <div className="code in1"><p>&#125;</p></div>
        </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(MethodCallback)