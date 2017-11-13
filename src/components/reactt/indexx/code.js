import React from 'react';
import { connect } from 'react-redux';

export function Code(props) {
  
  const showProvider = props.reduxx ? 'normal' : 'clear';

  return (
        <div className="group indexCode">
          <div className="code"><p>ReactDOM.render(</p></div>
          <div className="code in1"><p className={showProvider}>&lt;Provider store = &#123; store &#125; &gt;</p></div>
          <div className="code in2"><p>&lt;<span className="example">Component1</span> /&gt;</p></div>
          <div className="code in1"><p className={showProvider}>&lt;/Provider /&gt; ,</p></div>
          <div className="code in1"><p>document.getElementById('root')</p></div>
          <div className="code"><p>);</p></div>
          <div className="code"><p>registerServiceWorker();</p></div>
        </div>
  )
}

export const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(Code)