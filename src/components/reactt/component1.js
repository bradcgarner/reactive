import React from 'react';
import { connect } from 'react-redux';
// import { Import1 } from './import1';
// import { Component1Line1 } from './component1-line1';
// import { Constructor1 } from './constructor1';
// import { MethodGeneral } from './method-general';
// import { MethodCallback } from './method-callback';
// import { MethodSetState } from './method-setState';
// import { MethodDispatch } from './method-dispatch';
// import { Return1 } from './return1';
// import { MapState } from './mapState';
// import { Connect1 } from './connect1';

export function Component1(props) {
  console.log('consolidated component1 props', props);
  // @@@@@@@@@ import
  const showStore = props.reduxx.reduxx ? 'normal' : 'clear';
  const showProvider = props.reduxx.reduxx ? 'normal' : 'clear';
  const showConnect = props.reduxx.reduxx ? 'normal' : 'clear';
  const showActions = props.reduxx.reduxx ? 'normal' : 'clear';
  const showRoutes = props.reactt.routes ? 'normal' : 'clear';
  const showRouter = props.reactt.routes ? 'normal' : 'clear';
  const showLinks = props.reactt.links ? 'normal' : 'clear';
  
  // @@@@@@@@@ line 1
  const showDefault = props.reduxx.reduxx ? 'clear' : 'normal' ;
  const componentType = props.reactt.classs ? 'class' : 'function' ;
  const componentTypePad = props.reactt.classs ? 'normal' : 'hidden' ;
  const line1end = props.reactt.classs ? 'exends React.Component {' : '(props) {' ;

  // @@@@@@@@@ constructor 
  const showConstructor = props.reactt.classs ? 'normal' : 'clear' ;

  // @@@@@@@@@ method callback 
  const showCallback = ( !props.reduxx.reduxx && props.reactt.stateful ) ? 'normal' : 'clear' ;

  // @@@@@@@@@ setState 
  const isStateful = ( !props.reduxx.reduxx && props.reactt.stateful ) ? 'normal' : 'clear' ;

  // @@@@@@@@@ dispatch 
  const showDispatch = props.reduxx.reduxx ? 'normal' : 'clear' ;
  const dispatchAsync = ( props.reduxx.reduxx && props.reduxx.async ) ? 'normal' : 'clear' ;

  // @@@@@@@@@ return 
  // const isStateful = ( !props.reduxx.reduxx && props.reactt.stateful ) ? 'normal' : 'clear' ;
  // const showRoutes = props.reactt.routes ? 'normal' : 'clear';
  // const showRouter = props.reactt.routes ? 'normal' : 'clear';
  // const showLinks = props.reactt.links ? 'normal' : 'clear';
  const showCallbackFn = ( !props.reduxx.reduxx ) ? 'normal' : 'clear' ;
  const showThisCallbackFn = ( props.reactt.classs && !props.reduxx.reduxx ) ? 'normal' : 'clear' ;
  
  // @@@@@@@@@ mapState 
  const showMapState =  ( props.reduxx.reduxx && props.reduxx.mapState ) ? 'normal' : 'clear' ;

  // @@@@@@@@@ connect 
  // const showConnect = props.reduxx.reduxx ? 'normal' : 'clear';
  // const showMapState =  ( props.reduxx.reduxx && props.reduxx.mapState ) ? 'normal' : 'clear' ;
  

    return (
    <div className="block component1">
      <h3>Component1</h3>
       
      <div className="group component1import">
        <div className="library"><p>import React from 'react';</p></div>
        <div className="file"><p className={showActions}>import &#123; <span className="example">actionName</span> &#125; from './<span className="example">component1</span>';</p></div>
        <div className="file"><p>import &#123; <span className="example">component2</span> &#125; from './<span className="example">component2</span>';</p></div>
        <div className="library"><p className={showConnect}>import &#123; connect &#125; from 'react-redux';</p></div>
        <div className="library"><p className={showRoutes}>import &#123; Route &#125; from 'react-router-dom';</p></div>
        <div className="library"><p className={showRouter}>import &#123; BrowserRouter &#125; from 'react-router-dom';</p></div>
        <div className="library"><p className={showLinks}>import &#123; Link &#125; from 'react-router-dom';</p></div>
      </div>

      <div className="group component1line1">
        <div className="code">
          <p>export
            <span className={showDefault}> default </span>
            {componentType} <span className={componentTypePad}>&nbsp;&nbsp;&nbsp;</span> 
            <span className="example">Component1</span> {line1end}
          </p>
        </div>
      </div>
    
      <div className="group component1constructor"> 
        <div className="code in1"><p className={showConstructor}>constructor( props ) &#123;</p></div>
        <div className="code in2"><p className={showConstructor}>super( props )</p></div>
        <div className="code in3"><p className={showConstructor}>whatever</p></div>
        <div className="code constructor in1"><p className={showConstructor}>&#125;</p></div>
      </div>
  
      <div className ="group component1methodmethodGeneral">
        <div className="code in1"><p>methodName( arg ) &#123;</p></div>
        <div className="code in2"><p>{'&#47;&#47; ...do some logic'}</p></div>
        <div className="code in1"><p>&#125;</p></div>
      </div>

      <div className ="group component1methodCallback"> 
        <div className="code in1"><p className={showCallback}>callbackFunc( arg ) &#123;</p></div>
        <div className="code in2"><p className={showCallback}>this.setState(&#123;</p></div>
        <div className="code in3"><p className={showCallback}>prop: arg</p></div>
        <div className="code in2"><p className={showCallback}>&#125;)</p></div>
        <div className="code in1"><p className={showCallback}>&#125;</p></div>
      </div>
        
      
      <div className="group component1methodSetState"> 
        <div className="code in1"><p className={isStateful}>this.setState(&#123;</p></div>
        <div className="code in2"><p className={isStateful}>return Object.assign( &#123; &#125; , state, &#123;</p></div>
        <div className="code in3"><p className={isStateful}>prop: value</p></div>
        <div className="code in2"><p className={isStateful}>&#125;)</p></div>
        <div className="code in1"><p className={isStateful}>&#125;);</p></div>
      </div>        
      
      <div className="group component1methodDispatch"> 
        <div className="code in1"><p className={showDispatch}>this.props.dispatch( actionName ( value ) ) ;</p></div>
        <div className="code in1"><p className={dispatchAsync}>this.props.dispatch( asyncActionName ( value ) ) ;</p></div>      
      </div>
           
           
      <div className="group component1return">
        <div className="code in1"><p className={isStateful}>render() (</p></div>
        <div className="code in2"><p>return (</p></div>
        <div className="code in3"><p className={showRouter}>&lt;BrowserRouter&gt;</p></div>
        <div className="code in4"><p>&lt;div&gt;</p></div>
        <div className="code in5"><p>&lt;Component2 
          <span className={showCallbackFn}>onChange = &#123; ( arg ) => </span>
          <span className={showThisCallbackFn}>this.</span>
          <span className={showCallbackFn}>callbackFunc( arg ) &#125; /></span>
        </p></div>
        <div className="code in5"><p className={showRoutes}>&lt;Route exact path="/" component=&#123; Component2 &#125; /></p></div>
        <div className="code in5"><p className={showLinks}>&lt;Link to="&#123; link &#125;"></p></div>
        <div className="code in4"><p>&lt;/div&gt;</p></div>
        <div className="code in3"><p className={showRouter}>&lt;/BrowserRouter&gt;</p></div>
        <div className="code in2"><p>)</p></div>
        <div className="code in1"><p className={isStateful}>&#125;</p></div>
      </div>
    
      <div className="group component1mapState">
        <div className="code in1"><p className={showMapState}>export const mapStateToProps = state => (&#123;</p></div>
        <div className="code in2"><p className={showMapState}>key: state.value</p></div>
        <div className="code in1"><p className={showMapState}>&#125;</p></div>
      </div>  
  
      <div className="code component1connect in1">
        <p className={showConnect}>export default connect(
          <span className={showMapState}> mapStateToProps </span>
        )( Component1 )</p>
      </div> 
  
    </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(Component1)