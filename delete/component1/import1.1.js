import React from 'react';
import { connect } from 'react-redux';

export function Import1(props) {
  console.log('4 import1 props',props);
  //const showStore = props.reduxx.reduxx ? 'normal' : 'clear';
  //const showProvider = props.reduxx.reduxx ? 'normal' : 'clear';

  return (
        <div className="group component1import">
          <div className="library"><p>import React from 'react';</p></div>
          <div className="file"><p>import &#123; <span className="example">actionName</span> &#125; from './<span className="example">component1</span>';</p></div>
          <div className="file"><p>import &#123; <span className="example">component2</span> &#125; from './<span className="example">component2</span>';</p></div>
          <div className="library"><p>import &#123; connect &#125; from 'react-redux';</p></div>
          <div className="library"><p>import &#123; Route &#125; from 'react-router-dom';</p></div>
          <div className="library"><p>import &#123; BrowserRouter &#125; from 'react-router-dom';</p></div>
          <div className="library"><p>import &#123; Link &#125; from 'react-router-dom';</p></div>
        </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(Import1)