import React from 'react';
import { connect } from 'react-redux';

export function SingleSwitch() {
  return (
        <div className="group reducerSwitch">
          <div className="code in1"><p>export const reducer = (; state = initialState, action ) => &#123;</p></div>
          <div className="code in2"><p>switch( action.type ) &#123;</p></div>
          <div className="code in3"><p>case: ACTION_NAME;</p></div>
          <div className="code in4"><p>return &#123; ...state, prop1: val1, prop2: val2; &#125;;</p></div>
          <div className="code in3"><p>default:</p></div>
          <div className="code in4"><p>return state;</p></div>
          <div className="code in2"><p>&#125;</p></div>
          <div className="code in1"><p>&#125;</p></div>
        </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(SingleSwitch)