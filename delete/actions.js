import React from 'react';
import { connect } from 'react-redux';

export function Actions() {
  return (
      <div className="actions">
        <h3>Actions</h3>

        <div className="group action">
          <div className="code action in1"><p>export const ACTION_NAME = 'ACTION_NAME';</p></div>
          <div className="code action in1"><p>export const actionName = arg => ( &#123;</p></div>
          <div className="code action in2"><p>type: ACTION_NAME,</p></div>
          <div className="code action in2"><p>arg</p></div>
          <div className="code action in1"><p>&#125; );</p></div>
        </div>

        <div className="group asyncAction">
          <div className="code asyncAction in1"><p>export const asyncActionName = arg => dispatch => ( &#123;</p></div>
          <div className="code asyncAction in2"><p>dispatch( actionName() );</p></div>
          <div className="code asyncAction in2"><p>asyncFunctionReturnsPromise( arg )</p></div>
          <div className="code asyncAction in3"><p>.then( res => dispatch( actionName( res ) ) )</p></div>
          <div className="code asyncAction in3"><p>.catch( err => dispatch( actionName( err ) ) );</p></div>
          <div className="code asyncAction in1"><p>} );</p></div>
        </div>

        </div>
  )
}

export const mapStateToProps = state => ({
  react: state.react,
  redux: state.redux
})

export default connect(mapStateToProps)(Actions)