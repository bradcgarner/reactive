import React from 'react';

export default function Component1() {
  return (
      <div class="component1">
        <h3>Component1</h3>
        <div class="group import">
          <div class="library importReact"><p>import React from 'react';</p></div>
          <div class="file importAction"><p>import &#123; <span class="example">actionName</span> &#125; from './<span class="example">component1</span>';</p></div>
          <div class="file importComponent2"><p>import &#123; <span class="example">component2</span> &#125; from './<span class="example">component2</span>';</p></div>
          <div class="library importConnect"><p>import &#123; connect &#125; from 'react-redux';</p></div>
          <div class="library importRoute"><p>import &#123; Route &#125; from 'react-router-dom';</p></div>
          <div class="library importBrowserRouter"><p>import &#123; BrowserRouter &#125; from 'react-router-dom';</p></div>
          <div class="library importLink"><p>import &#123; Link &#125; from 'react-router-dom';</p></div>
        </div>
        
        <div class="group line1"> {/* variables default, props */}
          <div class="code componLine1"><p>export default class <span class="example">Component1</span> extends React.Component &#123;</p></div>
          <div class="code componLine1"><p>export default function <span class="example">Component1</span> (props) &#123;</p></div>
        </div>

        <div class="group constructor"> {/* toggle function: off, class & props: on */} {/* variables props*/}
          <div class="code xxxxxx in1"><p>constructor( props ) &#123;</p></div>
          <div class="code xxxxxx in2"><p>super( props )</p></div>
          <div class="code xxxxxx in1"><p>&#125;</p></div>
        </div>

        <div class ="group methodGeneral">
          <div class="code xxxxxx in1"><p>methodName( arg ) &#123;</p></div>
          <div class="code xxxxxx in2"><p>// ...do some logic</p></div>
          <div class="code xxxxxx in1"><p>&#125;</p></div>
        </div>

        <div class ="group callbackMethod"> {/* toggle redux: off, function: off, class & callback: on */}
          <div class="code xxxxxx in1"><p>callbackFunc( arg ) &#123;</p></div>
          <div class="code xxxxxx in2"><p>this.setState(&#123;</p></div>
          <div class="code xxxxxx in3"><p>prop: arg</p></div>
          <div class="code xxxxxx in2"><p>&#125;)</p></div>
          <div class="code xxxxxx in1"><p>&#125;</p></div>
        </div>

        <div class="group setState"> {/* toggle redux: off, function: off, class & state: on */}
          <div class="code xxxxxx in1"><p>this.setState(&#123;</p></div>
          <div class="code xxxxxx in2"><p>return Object.assign( &#123; &#125; , state, &#123;</p></div>
          <div class="code xxxxxx in3"><p>prop: value</p></div>
          <div class="code xxxxxx in2"><p>&#125;)</p></div>
          <div class="code xxxxxx in1"><p>&#125;);</p></div>
        </div>

        <div class="group dispatch"> {/* toggle redux: on */}  {/* variable class/this */}
          <div class="code xxxxxx in1"><p>this.props.dispatch( actionName ( value ) ) ;</p></div>
          <div class="code xxxxxx in1"><p>this.props.dispatch( asyncActionName ( value ) ) ;</p></div>{/* toggle async: on */}         
        </div>

        <div class="group return">
          <div class="code xxxxxx in1"><p>render() (</p></div>
          <div class="code xxxxxx in2"><p>return (</p></div>
          <div class="code xxxxxx in3"><p>&lt;BrowserRouter&gt;</p></div>
          <div class="code xxxxxx in4"><p>&lt;div&gt;</p></div>
          <div class="code xxxxxx in5"><p>&lt;Component2 onChange = &#123; ( arg ) => this.callbackFunc( arg ) &#125; /></p></div>
          <div class="code xxxxxx in5"><p>&lt;Route exact path="/" component=&#123; Component2 &#125; /></p></div>
          <div class="code xxxxxx in5"><p>&lt;Link to="&#123; link &#125;"></p></div>
          <div class="code xxxxxx in4"><p>&lt;/div&gt;</p></div>
          <div class="code xxxxxx in3"><p>&lt;/BrowserRouter&gt;</p></div>
          <div class="code xxxxxx in2"><p>)</p></div>
          <div class="code xxxxxx in1"><p>&#125;</p></div>
        </div>

        <div class="group mapStateToProps">
          <div class="code xxxxxx in1"><p>export const mapStateToProps = state => (&#123;</p></div>
          <div class="code xxxxxx in2"><p>key: state.value</p></div>
          <div class="code xxxxxx in1"><p>&#125;</p></div>
        </div>

        <div class="code xxxxxx in1"><p>export default connect( mapStateToProps )( Component1 )</p></div> {/* varables: default, mapStateToProps ; toggle: redux off: off, redux on & ????: on */}
        
      </div>
  )
}