import React from 'react';
import { connect } from 'react-redux';

export function Component2(props) {
  console.log('14 compon2',props);

    // @@@@@@@@@ import
    const showActions = props.reduxx.reduxx ? 'normal' : 'clear';    
    const showRoutes = props.reactt.routes ? 'normal' : 'clear';
    const showLinks = props.reactt.links ? 'normal' : 'clear';

    // @@@@@@@@@@@ line1
    const showDefault = props.reduxx.reduxx ? 'clear' : 'normal' ;

    // @@@@@@@@@ return
    // const showActions = props.reduxx.reduxx ? 'normal' : 'clear';    
    // const showRoutes = props.reactt.routes ? 'normal' : 'clear';
    // const showLinks = props.reactt.links ? 'normal' : 'clear';
    const showCallbackFn = ( !props.reduxx.reduxx & props.reactt.callback ) ? 'normal' : 'clear' ;
    const hideCallBackFn = showCallbackFn==='normal' ? 'hidden' : 'normal' ;
    const showThisCallbackFn = ( showCallbackFn==='normal' && props.reactt.classs ) ? 'normal' : 'clear' ;
  
    // @@@@@@@@@ connect 
    const showConnect = props.reduxx.reduxx ? 'normal' : 'clear';
    // const showMapState =  ( props.reduxx.reduxx && props.reduxx.mapState ) ? 'normal' : 'clear' ;
    
    return (
      <div className="block component2">
        <div className="folder-header"><h3>Component2</h3></div>

        <div className="group component2import">
          <div className="library"><p>import React from 'react';</p></div>
          <div className="file"><p className={showActions}>import &#123; <span className="example">actionName</span> &#125; from './<span className="example">actions</span>';</p></div>
          <div className="file"><p>import &#123; <span className="example">component3</span> &#125; from './<span className="example">component3</span>';</p></div>
          <div className="library"><p className={showRoutes}>import &#123; Route &#125; from 'react-router-dom';</p></div>
          <div className="library"><p className={showLinks}>import &#123; Link &#125; from 'react-router-dom';</p></div>
        </div>
        
        <div className="group component2line1">
          <div className="code"><p>export <span className={showDefault}>default</span> function <span className="example">Component2</span> (props) &#123;</p></div>
        </div>

        <div className="group component2return">
          <div className="code in2"><p>return (</p></div>
          <div className="code in4"><p>&lt;div&gt;</p></div>
          <div className="code in5">
            <p>&lt;p
              <span className={hideCallBackFn}>>some text&lt;/p&gt;;</span>
              <span className={showCallbackFn}> onClick = &#123; () => props.onClick( value ) &#125; &#125;</span>
              <span className={showCallbackFn}> &gt;Some text&lt;/p&gt;</span>
            </p></div>
          <div className="code in5"><p className={showRoutes}>&lt;Route path="/" component=&#123; Component3 &#125; /></p></div>
          <div className="code in5"><p className={showLinks}>&lt;Link to="&#123; link &#125;"></p></div>
          <div className="code in4"><p>&lt;/div&gt;</p></div>
          <div className="code in2"><p>)</p></div>
          <div className="code in1"><p>&#125;</p></div>
        </div>
        
        <div className="group component2connect">
        <div className="code in1">
          <p className={showConnect}>export default connect()( Component1 )</p>
        </div>
      </div> 

      </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(Component2)