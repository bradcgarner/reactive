import React from 'react';
import { connect } from 'react-redux';

export function Reducer(props) {

  // ################## TEXT VARIABLES ################
  const key1             = props.arrReducerNamed1 ? 'namedKey1: reducer,' : 'reducer,' ;
  const key2             = props.arrReducerNamed2 ? 'namedKey2: reducer2' : 'reducer2' ;
  
  // ################## CLASS VARIABLES ################
  const arrRedux         = `arr${props.arrRedux}`; 
  const background       = `block reducer ${arrRedux}`  
  const arrCombine       = `arr${props.arrReducerCombine}`;
  const arrNoCombine     = props.arrReducerCombine ? 'arr0' : 'normal' ;
  const arrNamed1        = `arr${props.arrReducerNamed1}`;
  const arrNamed2        = `arr${props.arrReducerNamed2}`;
  const arrExport        = `arr${props.arrReducerExport}`;
  const arrExportCombine = `arr${props.arrReducerExportCombine}`;
  const arrForm          = `arr${props.arrReducerForm}`;
  
  return (
      <div className={background}>
        <div className="folder-header"><h3 className={arrRedux}>Reducer</h3></div>

        <div className="group reducerImport">
          <div className="library"><p className={arrCombine}>import &#123; combineReducers &#125; from 'redux';</p></div>
          <div className="file"><p className={arrRedux}>import &#123; ACTION_NAME
            <span className={arrForm}>, SUBMIT_FORM</span>
             &#125; from './actions';</p></div>
        </div>

        <div className="group reducerInitialState">
          <div className="code in1"><p className={arrRedux}>const initialState = &#123;</p></div>
          <div className="code in2"><p className={arrRedux}>prop: value</p></div>
          <div className="code in1"><p className={arrRedux}>&#125;</p></div>
        </div>
      
        <div className="group reducerSwitch">
          <div className="code in1">
            <p className={arrRedux}>export 
              <span className={arrNoCombine}> default </span>
            const reducer = (</p>
          </div>
          <div className="code in2">
            <p className={arrRedux}>state = initialState, action ) => &#123;</p>
          </div>
          <div className="code in2"><p className={arrRedux}>switch( action.type ) &#123;</p></div>
          <div className="code in3"><p className={arrRedux}>case: ACTION_NAME;</p></div>
          <div className="code in4"><p className={arrRedux}>return &#123; ...state, prop1: val1, prop2: val2; &#125;;</p></div>
          <div className="code in3"><p className={arrRedux}>default:</p></div>
          <div className="code in4"><p className={arrRedux}>return state;</p></div>
          <div className="code in2"><p className={arrRedux}>&#125;</p></div>
          <div className="code in1"><p className={arrRedux}>&#125;</p></div>
        </div>

        <div className="group singleReducer if">
          <div className="code in1"><p className={arrCombine}>export const reducer2 = (</p></div>
          <div className="code in2"><p className={arrCombine}>state = initialState, action ) => &#123;</p></div>
          <div className="code in2"><p className={arrCombine}>if ( action.type === ACTION_NAME ) &#123;</p></div>
          <div className="code in3"><p className={arrCombine}>return Object.assign( &#123;&#125;, state, &#123;</p></div>
          <div className="code in4"><p className={arrCombine}>prop: value</p></div>
          <div className="code in3"><p className={arrCombine}>&#125; );</p></div>
          <div className="code in2"><p className={arrCombine}>&#125;</p></div>
          <div className="code in2"><p className={arrCombine}>return state;</p></div>
          <div className="code in1"><p className={arrCombine}>&#125;</p></div>
        </div>

        <div className="group reducerCombine">
          <div className="code in1"><p className={arrCombine}>export default combineReducers ( &#123;</p></div>
          <div className="code in2"><p className={arrCombine}>{key2}</p></div>
          <div className="code in2"><p className={arrCombine}>{key1}</p></div>
          <div className="code in1"><p className={arrCombine}>&#125; )</p></div>
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