import React from 'react';
import { connect } from 'react-redux';

export function Index() {
  return (
      <div className="index">
        <h3>Index</h3>
        <div className="group import">
          <div className="library importReact"><p>import React from 'react';</p></div>
          <div className="file importStore"><p>import store from './store';</p></div>
          <div className="file importComponent1"><p>import &#123; <span className="example">Component1</span> &#125; from './component1';</p></div>
          <div className="library importReactDOM"><p>import ReactDOM from 'react-dom';</p></div>
          <div className="library importProvider"><p>import &#123; Provider &#125; from 'react-redux';</p></div>
        </div>

        <div className="group index">
          <div className="code index"><p>ReactDOM.render(</p></div>
          <div className="code index in1"><p>&lt;Provider store = &#123; store &#125; &gt;</p></div>
          <div className="code index in2"><p>&lt;<span className="example">Component1</span> /&gt;</p></div>
          <div className="code index in1"><p>&lt;/Provider /&gt; ,</p></div>
          <div className="code index in1"><p>document.getElementById('root')</p></div>
          <div className="code index"><p>);</p></div>
          <div className="code index"><p>registerServiceWorker();</p></div>
        </div>
      </div>
  )
}

export const mapStateToProps = state => ({
  react: state.react,
  redux: state.redux
})

export default connect(mapStateToProps)(Index)