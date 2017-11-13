import React from 'react';
import { connect } from 'react-redux';

export function Component1(props) {
  // ################## TEXT VARIABLES ################
  // @@@@@@@@@ import
  const showActions = props.reduxx ? 'normal' : 'clear';
  const showRoutes = props.routes ? 'normal' : 'clear';
  const showRouter = props.routes ? 'normal' : 'clear';
  const showLinks = props.links ? 'normal' : 'clear';
  
  // @@@@@@@@@ line 1
  const showDefault = props.reduxx ? 'clear' : 'normal' ;
  const componentType = props.classs ? 'class' : 'function' ;
  const componentTypePad = props.classs ? 'normal' : 'hidden' ;
  const line1end = props.classs ? 'exends React.Component {' : '(props) {' ;

  // @@@@@@@@@ constructor 
  const showConstructor = props.classs ? 'normal' : 'clear' ;

  // @@@@@@@@@ method callback 
  const showCallback = ( !props.reduxx && props.stateful ) ? 'normal' : 'clear' ;

  // @@@@@@@@@ setState 
  const isStateful = ( !props.reduxx && props.stateful ) ? 'normal' : 'clear' ;
  const showSetState = ( !props.reduxx && props.stateful ) ? 'normal' : 'hidden' ;

  // @@@@@@@@@ return 
  const showCallbackFn = ( !props.reduxx & props.callback ) ? 'normal' : 'clear' ;
  const hideCallBackFn = showCallbackFn==='normal' ? 'hidden' : 'normal' ;
  const showThisCallbackFn = ( showCallbackFn==='normal' && props.classs ) ? 'normal' : 'clear' ;

  // @@@@@@@@@ dispatch 
  const showDispatch = props.reduxx ? 'normal' : 'hidden' ;
  const dispatchAsync = ( props.reduxx && props.async ) ? 'normal' : 'hidden' ;
  const showSimpleFn = ( showCallbackFn==='clear' && showDispatch==='hidden' && dispatchAsync==='hidden' ) ? 'normal' : 'hidden' ;

  // @@@@@@@@@ mapState 
  const showMapState =  ( props.reduxx && props.mapState ) ? 'normal' : 'clear' ;
  const showMapStateAtConnect =  showMapState==='normal' ? 'normal' : 'hidden' ;

  // @@@@@@@@@ forms 
  const showForm = ( props.reduxx && props.form ) ? 'normal' : 'clear' ;
  
  // @@@@@@@@@ connect 
  const showConnect = props.reduxx ? 'normal' : 'clear';
  
  // @@@@@@@@@ compose 
  const showCompose = ( props.reduxx && props.compose ) ? 'normal' : 'clear' ;
  const showConnectSimple = ( showConnect && !showCompose ) ? 'normal' : 'clear';
  
  // ##################### ARROW CLASSES #####################
  const arrConnect       = `arr${props.arrC1Connect}`;
  const arrCompose       = `arr${props.arrC1Compose}`;
  const arrLink          = `arr${props.arrC1Link}`;
  const arrForm          = `arr${props.arrC1Form}`;
  const arrRoute         = `arr${props.arrC1Route}`;
  const arrRouter        = `arr${props.arrC1Router}`;
  const arrExportCompose = `arr${props.arrC1Compose}`;
  const arrExportConnect = `arr${props.arrC1Connect}`;
  const arrExport        = props.arrC1Compose + props.arrC1Connect === 0 ?
                           `arr${props.arrC1Exp}` : 'arr0' ;
  
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
        
        <div className={`flow r-1-connect-L ${arrConnect}`}>
          <div className="arrow-D"></div>
        </div>
        <div className={`flow r-1-connect-R ${arrConnect}`}></div>
        
        <div className={`flow r-1-compose ${arrCompose}`}>
          <div className="arrow-D"></div>
        </div>

      
        <div className={`flow r-1-link-L ${arrLink}`}>
          <div className="arrow-D"></div>
        </div>
        <div className={`flow r-1-link-R ${arrLink}`}></div>
      
        <div className={`flow r-1-form ${arrForm}`}>
          <div className="arrow-D arrow-D1"></div>
          <div className="arrow-D arrow-D2"></div>
          <div className={`tail tail1 ${arrForm}`}></div>
          <div className={`tail tail2 ${arrForm}`}></div>
          </div>        
        
        <div className={`flow r-1-route ${arrRoute}`}>
          <div className="arrow-D"></div>
          <div className={`tail ${arrRoute}`}></div>
        </div>

        <div className={`flow r-1-router ${arrRouter}`}>
          <div className="arrow-D"></div>
          <div className={`tail ${arrRouter}`}></div>
        </div>
        
        <div className={`flow r-1-export-one ${arrExport}`}>
          <div className="arrow-U arrow-U1"></div>
        </div>
        <div className={`flow r-1-export-two ${arrExport}`}>
          <div className="arrow-R"></div>
        </div>
         
        <div className={`flow r-1-export-oneConnect ${arrExportConnect}`}>
          <div className="arrow-L"></div>
        </div>
        <div className={`flow r-1-export-twoConnect ${arrExportConnect}`}>
          <div className="arrow-U arrow-U1"></div>
          <div className="arrow-U arrow-U2"></div>
        </div>
        <div className={`flow r-1-export-threeConnect ${arrExportConnect}`}>
          <div className="arrow-R"></div>
        </div>
          
        <div className={`flow r-1-export-oneCompose ${arrExportCompose}`}>
          <div className="arrow-L"></div>
        </div>
        <div className={`flow r-1-export-twoCompose ${arrExportCompose}`}>
          <div className="arrow-U arrow-U1"></div>
          <div className="arrow-U arrow-U2"></div>
        </div>
        <div className={`flow r-1-export-threeCompose ${arrExportCompose}`}>
          <div className="arrow-R"></div>
        </div>

      </div>

    </div>
  )
}

export const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(Component1)