import React from 'react';
import { connect } from 'react-redux';

export function Reducer() {
  return (
      <div className="reducer">
        <h3>Reducer</h3>
        <div className="library importReact"><p>import &#123; combineReducers &#125; from 'redux';</p></div>
        <div className="file importStore"><p>import &#123; ACTION_NAME &#125; from './actions';</p></div>

        <div className="group initialState">
          <div className="code initialState in1"><p>const initialState = &#123;</p></div>
          <div className="code initialState in2"><p>prop: value</p></div>
          <div className="code initialState in1"><p>&#125;</p></div>
        </div>

        <div className="group singleReducer switch">
          <div className="code singleReducer in1"><p>export const reducer = (; state = initialState, action ) => &#123;</p></div>
          <div className="code singleReducer in2"><p>switch( action.type ) &#123;</p></div>
          <div className="code singleReducer in3"><p>case: ACTION_NAME;</p></div>
          <div className="code singleReducer in4"><p>return &#123; ...state, prop1: val1, prop2: val2; &#125;;</p></div>
          <div className="code singleReducer in3"><p>default:</p></div>
          <div className="code singleReducer in4"><p>return state;</p></div>
          <div className="code singleReducer in2"><p>&#125;</p></div>
          <div className="code singleReducer in1"><p>&#125;</p></div>
        </div>

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

        <div className="group combineReducer">
          <div className="code combineReducer in1"><p>export default combineReducers ( &#123;</p></div>
          <div className="code combineReducer in1"><p>namedKey1: reducer,</p></div> {/* variable: namedKey */}
          <div className="code combineReducer in1"><p>namedKey2: reducer2</p></div>
          <div className="code combineReducer in1"><p>&#125; )</p></div>
        </div>
      </div>
  )
}

export const mapStateToProps = state => ({
  react: state.react,
  redux: state.redux
})

export default connect(mapStateToProps)(Reducer)