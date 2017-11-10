import React from 'react';
import { connect } from 'react-redux';

export function ImportI(props) {
  console.log('2 import index',props);
  
  const showStore = props.reduxx.reduxx ? 'normal' : 'clear';
  const showProvider = props.reduxx.reduxx ? 'normal' : 'clear';
  
  return (
        <div className="group indexImport">
          <div className="library"><p>import React from 'react';</p></div>
          <div className="file"><p>import &#123; <span className="example">Component1</span> &#125; from './component1';</p></div>
          <div className="file"><p className={showStore}>import store from './store';</p></div>
          <div className="library"><p>import ReactDOM from 'react-dom';</p></div>
          <div className="library"><p className={showProvider}>import &#123; Provider &#125; from 'react-redux';</p></div>
        </div>
  )
}

const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(ImportI)