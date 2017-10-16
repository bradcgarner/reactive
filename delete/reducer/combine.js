import React from 'react';
import { connect } from 'react-redux';

export function Combine() {
  return (
        <div className="group reducerCombine">
          <div className="code in1"><p>export default combineReducers ( &#123;</p></div>
          <div className="code in2"><p>namedKey1: reducer,</p></div> {/* variable: namedKey */}
          <div className="code in2"><p>namedKey2: reducer2</p></div>
          <div className="code in1"><p>&#125; )</p></div>
        </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(Combine)