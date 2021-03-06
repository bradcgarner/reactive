import React from 'react';
import { connect } from 'react-redux';

export function Store(props) {

  // ################## TEXT VARIABLES ################
  const createAsync    = props.async ? ', applyMiddleware( thunk ) ) ' : ' )';
  
  // ################## CLASS VARIABLES ################
  const arrRedux       = `arr${props.arrRedux}`; 
  const background     = `block store ${arrRedux}`  
  const arrReducer     = `arr${props.arrStoreReducer}`;
  const arrCreate      = `arr${props.arrStoreCreate}`;
  const arrMiddleWare  = `arr${props.arrStoreMiddleWare}`;
  const arrThunk       = `arr${props.arrStoreThunk}`;
  const arrExport      = `arr${props.arrStoreExport}`;
  
  return (
    <div className={background}>
      <div className="folder-header"><h3 className={arrRedux}>Store</h3></div>

      <div className="group storeImport">
        <div className="file"><p className={arrRedux}>import reducer from './reducer';</p></div>
        <div className="library"><p className={arrRedux}>import &#123; createStore &#125; from 'redux';</p></div>
        <div className="library"><p className={arrMiddleWare}>import &#123; applyMiddleware &#125; from 'redux';</p></div>
        <div className="library"><p className={arrThunk}>import  thunk  from 'redux-thunk';</p></div>
      </div>

      <div className="group storeCode">
        <div className="code"><p className={arrRedux}>export default createStore( reducer {createAsync} </p></div>
        <p className="comment">The store created by createStore has a dispatch() method. 
          The dispatch() method calls the reducer that is the named aregument above. 
          The dispatch() method acceppts an action as an argument; the action must be an object... 
          EXCEPT... the action may be an argument or a function...</p>
      </div>
      <div className="flowContainer">
        <div className={`flow e-s-reducer-T ${arrReducer}`}>
          <div className="arrow-R"></div>
        </div>
        <div className={`flow e-s-reducer-B ${arrReducer}`}></div>

        <div className={`flow e-s-create ${arrCreate}`}>
          <div className="arrow-R"></div>
        </div>

        <div className={`flow e-s-thunk ${arrThunk}`}></div>
        <div className={`flow e-s-middleware ${arrMiddleWare}`}></div>
        
        <div className={`flow e-s-export-one ${arrExport}`}></div>
        <div className={`flow e-s-export-two ${arrExport}`}>
          <div className="arrow-U"></div>
        </div>
        <div className={`flow e-s-export-three ${arrExport}`}>
          <div className="arrow-L"></div>
        </div>
        
      </div>
    </div>
  )
}

export const mapStateToProps = state => ({
 ...state
})

export default connect(mapStateToProps)(Store)