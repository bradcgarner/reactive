import React from 'react';
import { connect } from 'react-redux';

export function Component1() {
  return (
      <div className="component1">
        <h3>Component1</h3>
        <div className="group import">
          <div className="library importReact"><p>import React from 'react';</p></div>
          <div className="file importAction"><p>import &#123; <span className="example">actionName</span> &#125; from './<span className="example">component1</span>';</p></div>
          <div className="file importComponent2"><p>import &#123; <span className="example">component2</span> &#125; from './<span className="example">component2</span>';</p></div>
          <div className="library importConnect"><p>import &#123; connect &#125; from 'react-redux';</p></div>
          <div className="library importRoute"><p>import &#123; Route &#125; from 'react-router-dom';</p></div>
          <div className="library importBrowserRouter"><p>import &#123; BrowserRouter &#125; from 'react-router-dom';</p></div>
          <div className="library importLink"><p>import &#123; Link &#125; from 'react-router-dom';</p></div>
        </div>
        
        <div className="group line1"> {/* variables default, props */}
          <div className="code componLine1"><p>export default className <span className="example">Component1</span> extends React.Component &#123;</p></div>
          <div className="code componLine1"><p>export default function <span className="example">Component1</span> (props) &#123;</p></div>
        </div>

        <div className="group constructor"> {/* toggle function: off, className & props: on */} {/* variables props*/}
          <div className="code constructor in1"><p>constructor( props ) &#123;</p></div>
          <div className="code constructor in2"><p>super( props )</p></div>
          <div className="code constructor in1"><p>&#125;</p></div>
        </div>

        <div className ="group methodGeneral">
          <div className="code methodGeneral in1"><p>methodName( arg ) &#123;</p></div>
          <div className="code methodGeneral in2"><p>{'&#47;&#47; ...do some logic'}</p></div>
          <div className="code methodGeneral in1"><p>&#125;</p></div>
        </div>

        <div className ="group callbackMethod"> {/* toggle redux: off, function: off, className & callback: on */}
          <div className="code callbackMethod in1"><p>callbackFunc( arg ) &#123;</p></div>
          <div className="code callbackMethod in2"><p>this.setState(&#123;</p></div>
          <div className="code callbackMethod in3"><p>prop: arg</p></div>
          <div className="code callbackMethod in2"><p>&#125;)</p></div>
          <div className="code callbackMethod in1"><p>&#125;</p></div>
        </div>

        <div className="group setState"> {/* toggle redux: off, function: off, className & state: on */}
          <div className="code setState in1"><p>this.setState(&#123;</p></div>
          <div className="code setState in2"><p>return Object.assign( &#123; &#125; , state, &#123;</p></div>
          <div className="code setState in3"><p>prop: value</p></div>
          <div className="code setState in2"><p>&#125;)</p></div>
          <div className="code setState in1"><p>&#125;);</p></div>
        </div>

        <div className="group dispatch"> {/* toggle redux: on */}  {/* variable className/this */}
          <div className="code dispatch in1"><p>this.props.dispatch( actionName ( value ) ) ;</p></div>
          <div className="code dispatch in1"><p>this.props.dispatch( asyncActionName ( value ) ) ;</p></div>{/* toggle async: on */}         
        </div>

        <div className="group componReturn">
          <div className="code componReturn in1"><p>render() (</p></div>
          <div className="code componReturn in2"><p>return (</p></div>
          <div className="code componReturn in3"><p>&lt;BrowserRouter&gt;</p></div>
          <div className="code componReturn in4"><p>&lt;div&gt;</p></div>
          <div className="code componReturn in5"><p>&lt;Component2 onChange = &#123; ( arg ) => this.callbackFunc( arg ) &#125; /></p></div>
          <div className="code componReturn in5"><p>&lt;Route exact path="/" component=&#123; Component2 &#125; /></p></div>
          <div className="code componReturn in5"><p>&lt;Link to="&#123; link &#125;"></p></div>
          <div className="code componReturn in4"><p>&lt;/div&gt;</p></div>
          <div className="code componReturn in3"><p>&lt;/BrowserRouter&gt;</p></div>
          <div className="code componReturn in2"><p>)</p></div>
          <div className="code componReturn in1"><p>&#125;</p></div>
        </div>

        <div className="group mapStateToProps">
          <div className="code mapStateToProps in1"><p>export const mapStateToProps = state => (&#123;</p></div>
          <div className="code mapStateToProps in2"><p>key: state.value</p></div>
          <div className="code mapStateToProps in1"><p>&#125;</p></div>
        </div>

        <div className="code connect in1"><p>export default connect( mapStateToProps )( Component1 )</p></div> {/* varables: default, mapStateToProps ; toggle: redux off: off, redux on & ????: on */}
        
      </div>
  )
}

export const mapStateToProps = state => ({
  react: state.react,
  redux: state.redux
})

export default connect(mapStateToProps)(Component1)