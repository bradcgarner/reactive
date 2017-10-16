import React from 'react';
import { connect } from 'react-redux';

// toggle redux: off, function: off, className & state: on 
export function MethodSetState(props) {
  console.log('9 setState1',props);
  
  return (
        <div className="group component1methodSetState"> 
          <div className="code in1"><p>this.setState(&#123;</p></div>
          <div className="code in2"><p>return Object.assign( &#123; &#125; , state, &#123;</p></div>
          <div className="code in3"><p>prop: value</p></div>
          <div className="code in2"><p>&#125;)</p></div>
          <div className="code in1"><p>&#125;);</p></div>
        </div>

  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(MethodSetState)