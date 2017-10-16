import React from 'react';
import { connect } from 'react-redux';

export function Import() {
  return (
        <div className="group actionsCode">
          <div className="code in1"><p>export const ACTION_NAME = 'ACTION_NAME';</p></div>
          <div className="code in1"><p>export const actionName = arg => ( &#123;</p></div>
          <div className="code in2"><p>type: ACTION_NAME,</p></div>
          <div className="code in2"><p>arg</p></div>
          <div className="code in1"><p>&#125; );</p></div>
        </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(Import)