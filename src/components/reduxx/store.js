import React from 'react';
import { connect } from 'react-redux';

export function Store(props) {
  console.log('reduxnewstore',props);

  // @@@@@@@@@ import
  const showRedux = props.reduxx.reduxx ? 'normal' : 'clear';    
  const showAsync = ( props.reduxx.reduxx && props.reduxx.async ) ? 'normal' : 'clear';
  const createAsync = ( props.reduxx.reduxx && props.reduxx.async ) ? ', applyMiddleware( thunk ) ) ' : ' )';
  
  return (
    <div className="block store">
      <div className="folder-header"><h3 className={showRedux}>Store</h3></div>

      <div className="group storeImport">
        <div className="file"><p className={showRedux}>import reducer from './reducer';</p></div>
        <div className="library"><p className={showRedux}>import &#123; createStore &#125; from 'redux';</p></div>
        <div className="library"><p className={showAsync}>import &#123; applyMiddleware &#125; from 'redux';</p></div>
        <div className="library"><p className={showAsync}>import  thunk  from 'redux-thunk';</p></div>
      </div>

      <div className="group storeCode">
        <div className="code"><p className={showRedux}>export default createStore( reducer {createAsync} </p></div>
        <p className="comment">The store created by createStore has a dispatch() method. 
          The dispatch() method calls the reducer that is the named aregument above. 
          The dispatch() method acceppts an action as an argument; the action must be an object... 
          EXCEPT... the action may be an argument or a function...</p>
      </div>
      <div className="flowContainer">
        <div className="flow e-s-reducer-T"><div className="arrow-R"></div></div>
        <div className="flow e-s-reducer-B"></div>

        <div className="flow e-s-create"><div className="arrow-R"></div></div>

        <div className="flow e-s-thunk"></div>
        <div className="flow e-s-export">
          <div className="flow one">
            <div className="flow two">
              <div className="arrow-U"></div>
              <div className="flow three">
                <div className="arrow-L"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(Store)