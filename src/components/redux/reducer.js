import React from 'react';

export default function Reducer() {
  return (
      <div class="reducer">
        <h3>Reducer</h3>
        <div class="library importReact"><p>import &#123; combineReducers &#125; from 'redux';</p></div>
        <div class="file importStore"><p>import &#123; ACTION_NAME &#125; from './actions';</p></div>

        <div class="group initialState">
          <div class="code xxxxxx in1"><p>const initialState = &#123;</p></div>
          <div class="code xxxxxx in2"><p>prop: value</p></div>
          <div class="code xxxxxx in1"><p>&#125;</p></div>
        </div>

        <div class="group singleReducer switch">
          <div class="code xxxxxx in1"><p>export const reducer = &#123; state = initialState, action ) => &#123;</p></div>
          <div class="code xxxxxx in2"><p>switch( action.type ) &#123;</p></div>
          <div class="code xxxxxx in3"><p>case: ACTION_NAME;</p></div>
          <div class="code xxxxxx in4"><p>return &#123; ...state, &#123; prop: value &#125; &#125;;</p></div>
          <div class="code xxxxxx in4"><p>break;</p></div>
          <div class="code xxxxxx in3"><p>default:</p></div>
          <div class="code xxxxxx in4"><p>return state;</p></div>
          <div class="code xxxxxx in2"><p>&#125;</p></div>
          <div class="code xxxxxx in1"><p>&#125;</p></div>
          </div>

        <div class="group singleReducer if">
          <div class="code xxxxxx in1"><p>export const reducer = ( state = initialState, action ) => &#123;</p></div>
          <div class="code xxxxxx in2"><p>if ( action.type === ACTION_NAME ) &#123;</p></div>
          <div class="code xxxxxx in3"><p>return Object.assign( &#123;&#125;, state, &#123;</p></div>
          <div class="code xxxxxx in4"><p>prop: value</p></div>
          <div class="code xxxxxx in3"><p>&#125; );</p></div>
          <div class="code xxxxxx in2"><p>&#125;</p></div>
          <div class="code xxxxxx in2"><p>return state;</p></div>
          <div class="code xxxxxx in1"><p>&#125;</p></div>
        </div>

        <div class="group combineReducer">
          <div class="code xxxxxx in1"><p>export default combineReducers ( &#123;</p></div>
          <div class="code xxxxxx in1"><p>namedKey1: reducer1,</p></div> {/* variable: namedKey */}
          <div class="code xxxxxx in1"><p>namedKey2: reducer2</p></div>
          <div class="code xxxxxx in1"><p>&#125; )</p></div>
        </div>
      </div>
  )
}