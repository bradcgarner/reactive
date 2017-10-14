import React from 'react';

export default function Index() {
  return (
      <div class="index">
        <h3>Index</h3>
        <div class="group import">
          <div class="library importReact"><p>import React from 'react';</p></div>
          <div class="file importStore"><p>import store from './store';</p></div>
          <div class="file importComponent1"><p>import &#123; <span class="example">Component1</span> &#125; from './component1';</p></div>
          <div class="library importReactDOM"><p>import ReactDOM from 'react-dom';</p></div>
          <div class="library importProvider"><p>import &#123; Provider &#125; from 'react-redux';</p></div>
        </div>

        <div class="group">
          <div class="code xxxxx"><p>ReactDOM.render(</p></div>
          <div class="code xxxxx in1"><p>&lt;Provider store = &#123; store &#125; &gt;</p></div>
          <div class="code xxxxx in2"><p>&lt;<span class="example">Component1</span> /&gt;</p></div>
          <div class="code xxxxx in1"><p>&lt;/Provider /&gt; ,</p></div>
          <div class="code xxxxx in1"><p>document.getElementById('root')</p></div>
          <div class="code xxxxx"><p>);</p></div>
          <div class="code xxxxx"><p>registerServiceWorker();</p></div>
        </div>
      </div>
  )
}