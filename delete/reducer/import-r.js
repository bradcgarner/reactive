import React from 'react';
import { connect } from 'react-redux';

export function ImportR() {
  return (
    <div className="group reducerImport">
        <div className="library"><p>import &#123; combineReducers &#125; from 'redux';</p></div>
        <div className="file"><p>import &#123; ACTION_NAME &#125; from './actions';</p></div>
    </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(ImportR)