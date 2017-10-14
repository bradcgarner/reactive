import React from 'react';

export default function Store() {
  return (
      <div class="store">
        <h3>Store</h3>
        <div class="group import">
          <div class="file importReducer"><p>import &#123; reducer &#125; from './reducer';</p></div>
          <div class="library createStore"><p>import &#123; createStore &#125; from 'redux';</p></div>
          <div class="library importApplyMiddleware"><p>import &#123; applyMiddleware &#125; from 'redux';</p></div>
          <div class="library importThunk"><p>import  thunk  from 'redux-thunk';</p></div>
        </div>

        <div class="group">
          <div class="code xxxxxx in1"><p>export default createStore( reducer ), applyMiddleware( thunk )</p></div>
          <p class="comment">The store created by createStore has a dispatch() method. The dispatch() method calls the reducer that is the named aregument above. The dispatch() method acceppts an action as an argument; the action must be an object... EXCEPT... the action may be an argument or a function...</p>
        </div>

      </div>
  )
}