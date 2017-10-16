import React from 'react';
import { connect } from 'react-redux';

export function Import() {
  return (
        <div className="group storeImport">
          <div className="file"><p>import &#123; reducer &#125; from './reducer';</p></div>
          <div className="library"><p>import &#123; createStore &#125; from 'redux';</p></div>
          <div className="library"><p>import &#123; applyMiddleware &#125; from 'redux';</p></div>
          <div className="library"><p>import  thunk  from 'redux-thunk';</p></div>
        </div>
  )
}

export const mapStateToProps = state => ({
  react: state.react,
  redux: state.redux
})

export default connect(mapStateToProps)(Import)