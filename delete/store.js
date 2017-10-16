import React from 'react';
import { connect } from 'react-redux';

export function Store() {
  return (
      <div className="store">
        <h3>Store</h3>
        <div className="group import">
          <div className="file importReducer"><p>import &#123; reducer &#125; from './reducer';</p></div>
          <div className="library createStore"><p>import &#123; createStore &#125; from 'redux';</p></div>
          <div className="library importApplyMiddleware"><p>import &#123; applyMiddleware &#125; from 'redux';</p></div>
          <div className="library importThunk"><p>import  thunk  from 'redux-thunk';</p></div>
        </div>

        <div className="group store">
          <div className="code store in1"><p>export default createStore( reducer , applyMiddleware( thunk ) )</p></div>
          <p className="comment">The store created by createStore has a dispatch() method. The dispatch() method calls the reducer that is the named aregument above. The dispatch() method acceppts an action as an argument; the action must be an object... EXCEPT... the action may be an argument or a function...</p>
        </div>

      </div>
  )
}

export const mapStateToProps = state => ({
  react: state.react,
  redux: state.redux
})

export default connect(mapStateToProps)(Store)