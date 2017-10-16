import React from 'react';
import { connect } from 'react-redux';

export function Component2() {
  return (
      <div className="component1">
        <h3>Component2</h3>
        <div className="group import">
          <div className="library importReact"><p>import React from 'react';</p></div>
          <div className="file importAction"><p>import &#123; <span className="example">actionName</span> &#125; from './<span className="example">actions</span>';</p></div>
          <div className="file importComponent2"><p>import &#123; <span className="example">component3</span> &#125; from './<span className="example">component3</span>';</p></div>
          <div className="library importRoute"><p>import &#123; Route &#125; from 'react-router-dom';</p></div>
          <div className="library importLink"><p>import &#123; Link &#125; from 'react-router-dom';</p></div>
        </div>
        
        <div className="group line1">
          <div className="code componLine1"><p>export default function <span className="example">Component1</span> (props) &#123;</p></div>{/* varables: default */}
        </div>

        <div className="group componReturn">
          <div className="code componReturn in2"><p>return (</p></div>
          <div className="code componReturn in4"><p>&lt;div&gt;</p></div>
          <div className="code componReturn in5"><p>&lt;p onClick = &#123; () => props.onChange( value ) &#125; &#125; &gt;Some text&lt;</p></div>
          <div className="code componReturn in5"><p>&lt;Route path="/" component=&#123; Component3 &#125; /></p></div>
          <div className="code componReturn in5"><p>&lt;Link to="&#123; link &#125;"></p></div>
          <div className="code componReturn in4"><p>&lt;/div&gt;</p></div>
          <div className="code componReturn in2"><p>)</p></div>
          <div className="code componReturn in1"><p>&#125;</p></div>
        </div>

        <div className="code connect in1"><p>export default connect( mapStateToProps )( Component1 )</p></div> {/* varables: default ; toggle: redux off: off, redux on & ????: on */}
        
      </div>
  )
}

export const mapStateToProps = state => ({
  react: state.react,
  redux: state.redux
})

export default connect(mapStateToProps)(Component2)