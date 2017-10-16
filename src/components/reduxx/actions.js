import React from 'react';
import { connect } from 'react-redux';

export function Actions(props) {
  console.log('actions',props);

  const showRedux = props.reduxx.reduxx ? 'normal' : 'clear';      
  const showAsync = ( props.reduxx.reduxx && props.reduxx.async ) ? 'normal' : 'clear';      
  
  return (
    <div className="block actions">
      <div className="folder-header"><h3 className={showRedux}>Actions</h3></div>

      <div className="group actionsCode">
        <div className="code in1"><p className={showRedux}>export const ACTION_NAME = 'ACTION_NAME';</p></div>
        <div className="code in1"><p className={showRedux}>export const actionName = arg => ( &#123;</p></div>
        <div className="code in2"><p className={showRedux}>type: ACTION_NAME,</p></div>
        <div className="code in2"><p className={showRedux}>arg</p></div>
        <div className="code in1"><p className={showRedux}>&#125; );</p></div>
      </div>

      <div className="group actionsAsync">
        <div className="code in1"><p className={showAsync}>export const asyncActionName = arg => dispatch => ( &#123;</p></div>
        <div className="code in2"><p className={showAsync}>dispatch( actionName() );</p></div>
        <div className="code in2"><p className={showAsync}>asyncFunctionReturnsPromise( arg )</p></div>
        <div className="code in3"><p className={showAsync}>.then( res => dispatch( actionName( res ) ) )</p></div>
        <div className="code in3"><p className={showAsync}>.catch( err => dispatch( actionName( err ) ) );</p></div>
        <div className="code in1"><p className={showAsync}>} );</p></div>
      </div>

    </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(Actions)