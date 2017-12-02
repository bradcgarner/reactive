import React from 'react';
import { connect } from 'react-redux';

export function Actions(props) {
  // ################## CLASS VARIABLES ################
  const arrRedux       = `arr${props.arrRedux}`; 
  const background     = `block actions ${arrRedux}`   
  const arrDispatch    = `arr${props.arrActionsDispatch}`;
  const arrExport      = `arr${props.arrActionsExport}`;
  const arrAsync       = `arr${props.arrActionsAsync}`;   
  const arrExportAsync = `arr${props.arrActionsAsync}`;
  const arrSubmit      = `arr${props.arrActionsSubmit}`;
  const arrReducer     = `arr${props.arrActionsReducer}`;
  const arrComponent1  = `arr${props.arrActionsC1}`;
  const arrComponent2  = `arr${props.arrActionsC2}`;
  
  return (
    <div className={background}>
      <div className="folder-header"><h3 className={arrRedux}>Actions</h3></div>

      <div className="group actionsCode">
        <div className="code in1"><p className={arrRedux}>export const ACTION_NAME = 'ACTION_NAME';</p></div>
        <div className="code in1"><p className={arrRedux}>export const actionName = arg => ( &#123;</p></div>
        <div className="code in2"><p className={arrRedux}>type: ACTION_NAME,</p></div>
        <div className="code in2"><p className={arrRedux}>arg</p></div>
        <div className="code in1"><p className={arrRedux}>&#125; );</p></div>
      </div>

      <div className="group actionsSubmit">
        <div className="code in1"><p className={arrRedux}>export const SUBMIT_FORM = 'SUBMIT_FORM';</p></div>
        <div className="code in1"><p className={arrRedux}>export const submitForm = arg => ( &#123;</p></div>
        <div className="code in2"><p className={arrRedux}>type: SUBMIT_FORM,</p></div>
        <div className="code in2"><p className={arrRedux}>arg</p></div>
        <div className="code in1"><p className={arrRedux}>&#125; );</p></div>
      </div>

      <div className="group actionsAsync">
        <div className="code in1"><p className={arrAsync}>export const asyncActionName = arg => dispatch => &#123;</p></div>
        <div className="code in2"><p className={arrAsync}>dispatch( actionName() );</p></div>
        <div className="code in2"><p className={arrAsync}>asyncFunctionReturnsPromise( arg )</p></div>
        <div className="code in3"><p className={arrAsync}>.then( res => dispatch( actionName( res ) ) )</p></div>
        <div className="code in3"><p className={arrAsync}>.catch( err => dispatch( actionName( err ) ) );</p></div>
        <div className="code in1"><p className={arrAsync}>};</p></div>
      </div>

      <div className="flowContainer">
        <div className={`flow e-a-dispatch ${arrExport}`}>
          <div className="arrow-D"></div>
          <div className="tail tail1"></div>
          <div className="tail tail2"></div>
          <div className="tail tail3"></div>
        </div>
        
        <div className={`flow e-a-export ${arrExport}`}>
          <div className="arrow-L"></div>
        </div>
        <div className={`flow e-a-export-async ${arrExportAsync}`}>
          <div className="arrow-L arrow"></div>
        </div>
        <div className={`flow e-a-export-submit ${arrSubmit}`}>
          <div className="arrow-L"></div>
        </div>
        <div className={`flow e-a-export-reducer ${arrReducer}`}>
          <div className="arrow-R"></div>
        </div>
        <div className={`flow e-a-export-component1 ${arrComponent1}`}>
          <div className="arrow-L"></div>
        </div>
        <div className={`flow e-a-export-component2 ${arrComponent2}`}>
          <div className="arrow-L"></div>
        </div>

      </div>

    </div>
  )
}

export const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(Actions)