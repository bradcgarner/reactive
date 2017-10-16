import React from 'react';
import { connect } from 'react-redux';

export function SingleIf() {
  return (
        <div className="group singleReducer if">
          <div className="code singleReducer in1"><p>export const reducer2 = ( state = initialState, action ) => &#123;</p></div>
          <div className="code singleReducer in2"><p>if ( action.type === ACTION_NAME ) &#123;</p></div>
          <div className="code singleReducer in3"><p>return Object.assign( &#123;&#125;, state, &#123;</p></div>
          <div className="code singleReducer in4"><p>prop: value</p></div>
          <div className="code singleReducer in3"><p>&#125; );</p></div>
          <div className="code singleReducer in2"><p>&#125;</p></div>
          <div className="code singleReducer in2"><p>return state;</p></div>
          <div className="code singleReducer in1"><p>&#125;</p></div>
        </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(SingleIf)