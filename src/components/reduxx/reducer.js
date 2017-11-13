import React from 'react';
import { connect } from 'react-redux';

export function Reducer(props) {

  // ################## TEXT VARIABLES ################

  const showRedux = props.reduxx ? 'normal' : 'clear';      
  const showCombine = ( props.reduxx && props.combine ) ? 'normal' : 'clear';
  const hideCombine = ( props.reduxx && props.combine ) ? 'clear' : 'normal';
  const showForm = ( props.reduxx && props.form ) ? 'normal' : 'clear' ;  
  const key1 = props.namedKey ? 'namedKey1: reducer,' : 'reducer,' ;
  const key2 = props.namedKey ? 'namedKey2: reducer2' : 'reducer2' ;
  
  // ##################### ARROW CLASSES #####################
  const arrCombine       = `arr${props.arrReducerCombine}`;
  const arrNamed1        = `arr${props.arrReducerNamed1}`;
  const arrNamed2        = `arr${props.arrReducerNamed2}`;
  const arrExport        = `arr${props.arrReducerExport}`;
  const arrExportCombine = `arr${props.arrReducerExportCombine}`;
  
  return (
      <div className="block reducer">
        <div className="folder-header"><h3 className={showRedux}>Reducer</h3></div>

        <div className="group reducerImport">
          <div className="library"><p className={showCombine}>import &#123; combineReducers &#125; from 'redux';</p></div>
          <div className="file"><p className={showRedux}>import &#123; ACTION_NAME
            <span className={showForm}>, SUBMIT_FORM</span>
             &#125; from './actions';</p></div>
        </div>

        <div className="group reducerInitialState">
          <div className="code in1"><p className={showRedux}>const initialState = &#123;</p></div>
          <div className="code in2"><p className={showRedux}>prop: value</p></div>
          <div className="code in1"><p className={showRedux}>&#125;</p></div>
        </div>
      
        <div className="group reducerSwitch">
          <div className="code in1">
            <p className={showRedux}>export 
              <span className={hideCombine}> default </span>
            const reducer = (</p>
          </div>
          <div className="code in2">
            <p className={showRedux}>state = initialState, action ) => &#123;</p>
          </div>
          <div className="code in2"><p className={showRedux}>switch( action.type ) &#123;</p></div>
          <div className="code in3"><p className={showRedux}>case: ACTION_NAME;</p></div>
          <div className="code in4"><p className={showRedux}>return &#123; ...state, prop1: val1, prop2: val2; &#125;;</p></div>
          <div className="code in3"><p className={showRedux}>default:</p></div>
          <div className="code in4"><p className={showRedux}>return state;</p></div>
          <div className="code in2"><p className={showRedux}>&#125;</p></div>
          <div className="code in1"><p className={showRedux}>&#125;</p></div>
        </div>

        <div className="group singleReducer if">
          <div className="code in1"><p className={showCombine}>export const reducer2 = (</p></div>
          <div className="code in2"><p className={showCombine}>state = initialState, action ) => &#123;</p></div>
          <div className="code in2"><p className={showCombine}>if ( action.type === ACTION_NAME ) &#123;</p></div>
          <div className="code in3"><p className={showCombine}>return Object.assign( &#123;&#125;, state, &#123;</p></div>
          <div className="code in4"><p className={showCombine}>prop: value</p></div>
          <div className="code in3"><p className={showCombine}>&#125; );</p></div>
          <div className="code in2"><p className={showCombine}>&#125;</p></div>
          <div className="code in2"><p className={showCombine}>return state;</p></div>
          <div className="code in1"><p className={showCombine}>&#125;</p></div>
        </div>

        <div className="group reducerCombine">
          <div className="code in1"><p className={showCombine}>export default combineReducers ( &#123;</p></div>
          <div className="code in2"><p className={showCombine}>{key2}</p></div>
          <div className="code in2"><p className={showCombine}>{key1}</p></div>
          <div className="code in1"><p className={showCombine}>&#125; )</p></div>
        </div>
        <div className="flowContainer">
          <div className={`flow e-r-combine ${arrCombine}`}>
            <div className="arrow-D"></div>
            <div className="tail"></div>
          </div>
          <div className={`flow e-r-named1 ${arrNamed1}`}>
            <div className="arrow-D"></div>
            <div className="tail"></div>
          </div>
          <div className={`flow e-r-named2 ${arrNamed2}`}>
            <div className="arrow-D"></div>
            <div className="tail"></div>
          </div>

          <div className={`flow e-r-export-store ${arrExport}`}>
            <div className="arrow-R"></div>
            <div className="arrow-L"></div>
          </div>
          <div className={`flow e-r-export-storeCombine ${arrExportCombine}`}>
            <div className="arrow-R"></div>
            <div className="arrow-L"></div>
          </div>
        </div>
      </div>
  )
}

export const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(Reducer)