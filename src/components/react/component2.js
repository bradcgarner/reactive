import React from 'react';

export default function Component2() {
  return (
      <div class="component1">
        <h3>Component2</h3>
        <div class="group import">
          <div class="library importReact"><p>import React from 'react';</p></div>
          <div class="file importAction"><p>import &#123; <span class="example">actionName</span> &#125; from './<span class="example">actions</span>';</p></div>
          <div class="file importComponent2"><p>import &#123; <span class="example">component3</span> &#125; from './<span class="example">component3</span>';</p></div>
          <div class="library importRoute"><p>import &#123; Route &#125; from 'react-router-dom';</p></div>
          <div class="library importLink"><p>import &#123; Link &#125; from 'react-router-dom';</p></div>
        </div>
        
        <div class="group line1">
          <div class="code componLine1"><p>export default function <span class="example">Component1</span> (props) &#123;</p></div>{/* varables: default */}
        </div>

        <div class="group return">
          <div class="code xxxxxx in2"><p>return (</p></div>
          <div class="code xxxxxx in4"><p>&lt;div&gt;</p></div>
          <div class="code xxxxxx in5"><p>&lt;p onClick = &#123; () => props.onChange( value ) &#125; &#125; &gt;Some text&lt;</p></div>
          <div class="code xxxxxx in5"><p>&lt;Route path="/" component=&#123; Component3 &#125; /></p></div>
          <div class="code xxxxxx in5"><p>&lt;Link to="&#123; link &#125;"></p></div>
          <div class="code xxxxxx in4"><p>&lt;/div&gt;</p></div>
          <div class="code xxxxxx in2"><p>)</p></div>
          <div class="code xxxxxx in1"><p>&#125;</p></div>
        </div>

        <div class="code xxxxxx in1"><p>export default connect( mapStateToProps )( Component1 )</p></div> {/* varables: default ; toggle: redux off: off, redux on & ????: on */}
        
      </div>
  )
}