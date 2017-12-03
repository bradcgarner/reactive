import React from 'react';
import { connect } from 'react-redux';

export function Component1(props) {
  
  // ################## CONTENT VARIABLES ################
  const componentType      = props.arrC1Class ? 'class' : 'function' ;
  const line1end           = props.arrC1Class ? 'exends React.Component {' : '(props) {' ;

  // ################## CLASS VARIABLES ################  
  const arrComponentTypePad= componentType === 'class' ? 'hidden' : 'normal' ;
  const arrClass           = `arr${props.arrC1Class}`;
  const arrStateful        = `arr${props.arrC1Stateful}`;
  const arrMapState        = `arr${props.arrC1MapState}`;
  const arrConstructor     = `arr${props.arrC1Constructor}`;
  const arrMapStateConnect = `arr${props.arrC1MapState}`;
  const arrRedux           = `arr${props.arrRedux}`;
  const arrDispatch        = `arr${props.arrRedux}`;
  const arrAsync           = `arr${props.arrC1Async}`;
  const arrCallback        = `arr${props.arrC1Callback}`;
  const arrThisCallback    = ( arrCallback && props.classs ) ? arrCallback : 'arr0' ;
  const arrNoCallback      = (props.arrRedux || props.arrC1Callback) ? 'arr0' : 'normal' ;
  const arrNoConnect       = props.arrC1Connect ? 'arr0' : 'normal' ;
  const arrConnect         = `arr${props.arrC1Connect}`;
  const arrCompose         = `arr${props.arrC1Compose}`;
  const arrConnectSimple   = arrCompose ? 'arr0' : arrConnect ;
  const arrLink            = `arr${props.arrC1Link}`;
  const arrForm            = `arr${props.arrC1Form}`;
  const arrRoute           = `arr${props.arrC1Route}`;
  const arrRouter          = `arr${props.arrC1Router}`;
  const arrExportCompose   = `arr${props.arrC1Compose}`;
  const arrExportConnect   = `arr${props.arrC1Connect}`;
  const arrExport          = `arr${props.arrC1Exp}`;
  const arrActions         = `arr${props.arrActionsC1}`;
  
    return (
    <div className="block component1">
      <div className="folder-header"><h3>Component1</h3></div>
       
      <div className="group component1import">
        <div className="library"><p>import React from 'react';</p></div>
        <div className="file"><p className={arrActions}>import &#123;
          <span className="example">actionName</span> 
          <span className={arrForm}>, <span className="example">submitForm</span></span>
          &#125; from './<span className="example">actions</span>';</p></div>
        <div className="library"><p className={arrConnect}>import &#123; connect &#125; from 'react-redux';</p></div>
        <div className="library"><p className={arrCompose}>import &#123; compose &#125; from 'redux';</p></div>
        <div className="library"><p className={arrForm}>import &#123;  reduxForm, Field &#125; from 'redux-form';</p></div>
        <div className="library"><p className={arrRoute}>import &#123; Route &#125; from 'react-router-dom';</p></div>
        <div className="library"><p className={arrRouter}>import &#123; BrowserRouter &#125; from 'react-router-dom';</p></div>
        <div className="library"><p className={arrLink}>import &#123; Link &#125; from 'react-router-dom';</p></div>
        <div className="file"><p>import &#123; <span className="example">component2</span> &#125; from './<span className="example">component2</span>';</p></div>
      </div>

      <div className="group component1line1">
        <div className="code">
          <p>export
            <span className={arrNoConnect}> default </span>
            {componentType} <span className={arrComponentTypePad}>&nbsp;&nbsp;&nbsp;</span> 
            <span className="example">Component1</span> {line1end}
          </p>
        </div>
      </div>
    
      <div className="group component1constructor"> 
        <div className="code in1"><p className={arrConstructor}>constructor( props ) &#123;</p></div>
        <div className="code in2"><p className={arrConstructor}>super( props )</p></div>
        <div className="code in3">
          <p className={arrConstructor}> this.state=&#123; prop: arg[] } </p></div>
        <div className="code constructor in1"><p className={arrConstructor}>&#125;</p></div>
      </div>

      <div className ="group component1method"> 

        <div className="component1methodCallback">
          <div className="code in1"><p className={arrCallback}>callbackFunc( arg ) &#123;</p></div>
          <div className="code in2"><p className={arrCallback}>this.setState(&#123;</p></div>
          <div className="code in3"><p className={arrCallback}>prop: arg</p></div>
          <div className="code in2"><p className={arrCallback}>&#125;)</p></div>
          <div className="code in1"><p className={arrCallback}>&#125;</p></div>
        </div>
        
        <div className="component1methodDispatch">
          <div className="code in1"><p className={arrDispatch}>asyncFunc( arg ) &#123;</p></div>
          <div className="code in2"><p className={arrDispatch}>this.props.dispatch( actionName ( value ) ) ;</p></div>
          <div className="code in2"><p className={arrAsync}>this.props.dispatch( asyncActionName ( value ) ) ;</p></div>      
          <div className="code in1"><p className={arrDispatch}>&#125;</p></div>
          <div className="code in1"><p className={arrForm}>handleSubmitButton(values) &#123; </p></div>
          <div className="code in2"><p className={arrForm}>this.props.dispatch(submitForm(values))</p></div>
          <div className="code in1"><p className={arrForm}>&#125;</p></div>
        </div>

        <div className="component1methodSimple">
          <div className="code in1"><p className={arrNoCallback}>simpleFunc( arg ) &#123;</p></div>
          <div className="code in2"><p className={arrNoCallback}>{'// ...do some logic'};</p></div>
          <div className="code in1"><p className={arrNoCallback}>&#125;</p></div>
        </div>

      </div>    
           
      <div className="group component1return">
        <div className="code in1"><p className={arrClass}>render() (</p></div>
        <div className="code in2"><p>return (</p></div>
        <div className="code in3"><p className={arrRouter}>&lt;BrowserRouter&gt;</p></div>
        <div className="code in4"><p>&lt;div&gt;</p></div>
        <div className="code in5"><p>&lt;Component2 <span className={arrNoCallback}>/></span>
          <span className={arrCallback}> onClick = &#123; ( arg ) => </span>
          <span className={arrThisCallback}>this.</span>
          <span className={arrCallback}>callbackFunc( arg ) &#125; /></span>
        </p></div>
        <div className="code in5"><p className={arrRoute}>&lt;Route exact path="/" component=&#123; Component2 &#125; /></p></div>
        <div className="code in5"><p className={arrLink}>&lt;Link to="&#123; link &#125;"></p></div>
        <div className="code in4"><p>&lt;/div&gt;</p></div>
        <div className="code in4"><p>&lt;form onSubmit=&#123;this.props.handleSubmit(values => &#123;</p></div>
        <div className="code in5"><p>return this.handleSubmitButton(values)&#125; )&#125;&gt;</p></div>
        <div className="code in5"><p>&lt;Field name="name" id="name" component="input"/&gt;</p></div>
        <div className="code in4"><p>&lt;/form&gt;</p></div>
        <div className="code in3"><p className={arrRouter}>&lt;/BrowserRouter&gt;</p></div>
        <div className="code in2"><p>)</p></div>
        <div className="code in1"><p className={arrStateful}>&#125;</p></div>
      </div>
    
      <div className="group component1mapState">
        <div className="code in1"><p className={arrMapState}>export const mapStateToProps = state => (&#123;</p></div>
        <div className="code in2"><p className={arrMapState}>key: state.value</p></div>
        <div className="code in1"><p className={arrMapState}>&#125;</p></div>
      </div>  
  
      <div className="group component1connect">

        <div className="group component1connectSimple">
          <div className="code in1">
            <p className={arrConnect}>export default connect(
              <span className={arrMapState}> mapStateToProps </span>
            )( Component1 )</p>
          </div>
        </div>

        <div className="group component1connectCompose">
          <div className="code in1">
            <p className={arrCompose}>export default compose(</p>
          </div>
          <div className="code in2">
            <p className={arrCompose}>connect( 
              <span className={arrMapStateConnect}> mapStateToProps </span>
            ),</p>
          </div>
          <div className="code in2">
              <p className={arrCompose}>reduxForm( &#123; form: 'formName' &#125; ),</p>
          </div>
          <div className="code in1">
            <p className={arrCompose}>)( Component1 )</p>
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