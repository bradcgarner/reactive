import React from 'react';
import { connect } from 'react-redux';

export function Import2(props) {
  console.log('15 compon2 import',props);
  
  return (
        <div className="group component2import">
          <div className="library"><p>import React from 'react';</p></div>
          <div className="file"><p>import &#123; <span className="example">actionName</span> &#125; from './<span className="example">actions</span>';</p></div>
          <div className="file"><p>import &#123; <span className="example">component3</span> &#125; from './<span className="example">component3</span>';</p></div>
          <div className="library"><p>import &#123; Route &#125; from 'react-router-dom';</p></div>
          <div className="library"><p>import &#123; Link &#125; from 'react-router-dom';</p></div>
        </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(Import2)