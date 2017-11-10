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
  const showSetState = ( !props.reduxx.reduxx && props.reactt.stateful ) ? 'normal' : 'hidden' ;


  // @@@@@@@@@ return 
  // const isStateful = ( !props.reduxx.reduxx && props.reactt.stateful ) ? 'normal' : 'clear' ;
  // const showRoutes = props.reactt.routes ? 'normal' : 'clear';
  // const showRouter = props.reactt.routes ? 'normal' : 'clear';
  // const showLinks = props.reactt.links ? 'normal' : 'clear';
  const showCallbackFn = ( !props.reduxx.reduxx & props.reactt.callback ) ? 'normal' : 'clear' ;
  const hideCallBackFn = showCallbackFn==='normal' ? 'hidden' : 'normal' ;
  const showThisCallbackFn = ( showCallbackFn==='normal' && props.reactt.classs ) ? 'normal' : 'clear' ;

  // @@@@@@@@@ dispatch 
  const showDispatch = props.reduxx.reduxx ? 'normal' : 'hidden' ;
  const dispatchAsync = ( props.reduxx.reduxx && props.reduxx.async ) ? 'normal' : 'hidden' ;

  const showSimpleFn = ( showCallbackFn==='clear' && showDispatch==='hidden' && dispatchAsync==='hidden' ) ? 'normal' : 'hidden' ;

  // @@@@@@@@@ mapState 
  const showMapState =  ( props.reduxx.reduxx && props.reduxx.mapState ) ? 'normal' : 'clear' ;
  const showMapStateAtConnect =  showMapState==='normal' ? 'normal' : 'hidden' ;
  
  // @@@@@@@@@ connect 
  const showConnect = props.reduxx.reduxx ? 'normal' : 'clear';
  
  // @@@@@@@@@ forms 
  const showForm = ( props.reduxx.reduxx && props.reduxx.form ) ? 'normal' : 'clear' ;
  
  // @@@@@@@@@ compose 
  const showCompose = ( props.reduxx.reduxx && props.reduxx.compose ) ? 'normal' : 'clear' ;
  const showConnectSimple = ( showConnect && !showCompose ) ? 'normal' : 'clear';
  
    return (
    <div className="block component1">
      <div className="folder-header"><h3>Component1</h3></div>
       
      <div className="group component1import">
        <div className="library"><p>import React from 'react';</p></div>
        <div className="file"><p className={showActions}>import &#123;
          <span className="example">actionName</span> 
          <span className={showForm}>, <span className="example">submitForm</span></span>
          &#125; from './<span className="example">actions</span>';</p></div>
        <div className="library"><p className={showConnect}>import &#123; connect &#125; from 'react-redux';</p></div>
        <div className="library"><p className={showCompose}>import &#123; compose &#125; from 'redux';</p></div>
        <div className="library"><p className={showForm}>import &#123;  reduxForm, Field &#125; from 'redux-form';</p></div>
        <div className="library"><p className={showRoutes}>import &#123; Route &#125; from 'react-router-dom';</p></div>
        <div className="library"><p className={showRouter}>import &#123; BrowserRouter &#125; from 'react-router-dom';</p></div>
        <div className="library"><p className={showLinks}>import &#123; Link &#125; from 'react-router-dom';</p></div>
        <div className="file"><p>import &#123; <span className="example">component2</span> &#125; from './<span className="example">component2</span>';</p></div>
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
        <div className="code in3">
          <p className={showConstructor}> this.state=&#123; prop: arg[] } </p></div>
        <div className="code constructor in1"><p className={showConstructor}>&#125;</p></div>
      </div>

      <div className ="group component1method"> 

        <div className="component1methodCallback">
          <div className="code in1"><p className={showCallbackFn}>callbackFunc( arg ) &#123;</p></div>
          <div className="code in2"><p className={showCallbackFn}>this.setState(&#123;</p></div>
          <div className="code in3"><p className={showCallbackFn}>prop: arg</p></div>
          <div className="code in2"><p className={showCallbackFn}>&#125;)</p></div>
          <div className="code in1"><p className={showCallbackFn}>&#125;</p></div>
        </div>
        
        <div className="component1methodDispatch">
          <div className="code in1"><p className={showDispatch}>callbackFunc( arg ) &#123;</p></div>
          <div className="code in2"><p className={showDispatch}>this.props.dispatch( actionName ( value ) ) ;</p></div>
          <div className="code in2"><p className={dispatchAsync}>this.props.dispatch( asyncActionName ( value ) ) ;</p></div>      
          <div className="code in1"><p className={showDispatch}>&#125;</p></div>
          <div className="code in1"><p className={showForm}>handleSubmitButton(values) &#123; </p></div>
          <div className="code in2"><p className={showForm}>this.props.dispatch(submitForm(values))</p></div>
          <div className="code in1"><p className={showForm}>&#125;</p></div>
        </div>

        <div className="component1methodSimple">
          <div className="code in1"><p className={showSimpleFn}>callbackFunc( arg ) &#123;</p></div>
          <div className="code in2"><p className={showSimpleFn}>{'// ...do some logic'};</p></div>
          <div className="code in1"><p className={showSimpleFn}>&#125;</p></div>
        </div>

      </div>    
           
      <div className="group component1return">
        <div className="code in1"><p className={isStateful}>render() (</p></div>
        <div className="code in2"><p>return (</p></div>
        <div className="code in3"><p className={showRouter}>&lt;BrowserRouter&gt;</p></div>
        <div className="code in4"><p>&lt;div&gt;</p></div>
        <div className="code in5"><p>&lt;Component2 <span className={hideCallBackFn}>/></span>
          <span className={showCallbackFn}> onClick = &#123; ( arg ) => </span>
          <span className={showThisCallbackFn}>this.</span>
          <span className={showCallbackFn}>callbackFunc( arg ) &#125; /></span>
        </p></div>
        <div className="code in5"><p className={showRoutes}>&lt;Route exact path="/" component=&#123; Component2 &#125; /></p></div>
        <div className="code in5"><p className={showLinks}>&lt;Link to="&#123; link &#125;"></p></div>
        <div className="code in4"><p>&lt;/div&gt;</p></div>
        <div className="code in4"><p>&lt;form onSubmit=&#123;this.props.handleSubmit(values => &#123;</p></div>
        <div className="code in5"><p>return this.handleSubmitButton(values)&#125; )&#125;&gt;</p></div>
        <div className="code in5"><p>&lt;Field name="name" id="name" component="input"/&gt;</p></div>
        <div className="code in4"><p>&lt;/form&gt;</p></div>
        <div className="code in3"><p className={showRouter}>&lt;/BrowserRouter&gt;</p></div>
        <div className="code in2"><p>)</p></div>
        <div className="code in1"><p className={isStateful}>&#125;</p></div>
      </div>
    
      <div className="group component1mapState">
        <div className="code in1"><p className={showMapState}>export const mapStateToProps = state => (&#123;</p></div>
        <div className="code in2"><p className={showMapState}>key: state.value</p></div>
        <div className="code in1"><p className={showMapState}>&#125;</p></div>
      </div>  
  
      <div className="group component1connect">

        <div className="group component1connectSimple">
          <div className="code in1">
            <p className={showConnectSimple}>export default connect(
              <span className={showMapStateAtConnect}> mapStateToProps </span>
            )( Component1 )</p>
          </div>
        </div>

        <div className="group component1connectCompose">
          <div className="code in1">
            <p className={showCompose}>export default compose(</p>
          </div>
          <div className="code in2">
            <p className={showCompose}>connect( 
              <span className={showMapStateAtConnect}> mapStateToProps </span>
            ),</p>
          </div>
          <div className="code in2">
              <p className={showCompose}>reduxForm( &#123; form: 'formName' &#125; ),</p>
          </div>
          <div className="code in1">
            <p className={showCompose}>)( Component1 )</p>
          </div>
        </div>

      </div> 
  
      <div className="flowContainer">
        <div className="flow r-1-compose"><div className="arrow-D"></div></div>
        <div className="flow r-1-connect-L"><div className="arrow-D"></div></div>
        <div className="flow r-1-connect-R"></div>

      
        <div className="flow r-1-link-L"><div className="arrow-D"></div></div>
        <div className="flow r-1-link-R"></div>
        
        <div className="flow r-1-form">
          <div className="arrow-D arrow-D1"></div>
          <div className="arrow-D arrow-D2"></div>
          <div className="flow tail1"></div>
          <div className="flow tail2"></div>
          </div>        
        
        <div className="flow r-1-route">
          <div className="arrow-D"></div>
          <div className="flow tail"></div>
        </div>

        <div className="flow r-1-router">
          <div className="arrow-D"></div>
          <div className="flow tail"></div>
        </div>
        
        <div className="flow r-1-export">

          <div className="flow two">
            <div className="arrow-U arrow-U1"></div>
            <div className="flow three"><div className="arrow-R"></div></div>
          </div>

          <div className="flow oneConnect"><div className="arrow-L"></div></div>
          <div className="flow twoConnect">
            <div className="arrow-U arrow-U1"></div>
            <div className="arrow-U arrow-U2"></div>
            <div className="flow threeConnect"><div className="arrow-R"></div></div>
          </div>
          
          <div className="flow oneCompose"><div className="arrow-L"></div></div>
          <div className="flow twoCompose">
            <div className="arrow-U arrow-U1"></div>
            <div className="arrow-U arrow-U2"></div>
            <div className="flow threeCompose"><div className="arrow-R"></div></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(Component1)