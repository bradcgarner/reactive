import React from 'react';
import { connect } from 'react-redux';

export function Code(props) {
  console.log('reduxcode',props);
  return (
        <div className="group storeCode">
          <div className="code in1"><p>export default createStore( reducer , applyMiddleware( thunk ) )</p></div>
          <p className="comment">The store created by createStore has a dispatch() method. The dispatch() method calls the reducer that is the named aregument above. The dispatch() method acceppts an action as an argument; the action must be an object... EXCEPT... the action may be an argument or a function...</p>
        </div>
  )
}

export const mapStateToProps = state => ({
  react: state.react,
  redux: state.redux
})

export default connect(mapStateToProps)(Code)