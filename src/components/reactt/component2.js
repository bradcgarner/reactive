import React from 'react';
import { connect } from 'react-redux';

export function Component2(props) {

    // ################## CLASS VARIABLES ################
    
    const arrRedux           = `arr${props.arrRedux}`;
    const arrCallback        = `arr${props.arrC2Callback}`;
    const arrNoCallback      = props.arrC2Callback > 0 ? 'arr0' : 'normal' ;
    const arrConnect         = `arr${props.arrC2Connect}`;
    const arrLink            = `arr${props.arrC2Link}`;
    const arrRoute           = `arr${props.arrC2Route}`;
    const arrExportConnect   = `arr${props.arrC2Connect}`;
    const arrNoExportConnect = props.arrC2Connect > 0 ? 'arr0' : 'normal' ;
    const arrExport          = `arr${props.arrC2Exp}` ;
  
    return (
      <div className="block component2">
        <div className="folder-header"><h3>Component2</h3></div>

        <div className="group component2import">
          <div className="library"><p>import React from 'react';</p></div>
          <div className="file"><p className={arrRedux}>import &#123; <span className="example">actionName</span> &#125; from './<span className="example">actions</span>';</p></div>
          <div className="library"><p className={arrConnect}>import &#123; connect &#125; from 'react-redux';</p></div>
          <div className="file"><p>import &#123; <span className="example">component3</span> &#125; from './<span className="example">component3</span>';</p></div>
          <div className="library"><p className={arrRoute}>import &#123; Route &#125; from 'react-router-dom';</p></div>
          <div className="library"><p className={arrLink}>import &#123; Link &#125; from 'react-router-dom';</p></div>
        </div>
        
        <div className="group component2line1">
          <div className="code"><p>export <span className={arrNoExportConnect}>default</span> function <span className="example">Component2</span> (props) &#123;</p></div>
        </div>

        <div className="group component2return">
          <div className="code in2"><p>return (</p></div>
          <div className="code in4"><p>&lt;div&gt;</p></div>
          <div className="code in5">
            <p>&lt;p
              <span className={arrNoCallback}>>some text&lt;/p&gt;;</span>
              <span className={arrCallback}> onClick = &#123; () => props.onClick( value ) &#125; &#125;</span>
              <span className={arrCallback}> &gt;Some text&lt;/p&gt;</span>
            </p></div>
          <div className="code in5"><p className={arrRoute}>&lt;Route path="/" component=&#123; Component3 &#125; /></p></div>
          <div className="code in5"><p className={arrLink}>&lt;Link to="&#123; link &#125;"></p></div>
          <div className="code in4"><p>&lt;/div&gt;</p></div>
          <div className="code in2"><p>)</p></div>
          <div className="code in1"><p>&#125;</p></div>
        </div>
        
        <div className="group component2connect">
        <div className="code in1">
          <p className={arrConnect}>export default connect()( Component1 )</p>
        </div>
      </div> 

      <div className="flowContainer">
        <div className={`flow r-2-connect ${arrConnect}`}>
          <div className="arrow-D"></div>
        </div>
        
        <div className={`flow r-2-link-L ${arrLink}`}>
          <div className="arrow-D"></div>
        </div>
        <div className={`flow r-2-link-R ${arrLink}`}></div>
        
        <div className={`flow r-2-route ${arrRoute}`}>
          <div className="arrow-D"></div>
          <div className={`tail ${arrRoute}`}></div>
        </div>
          
        <div className={`flow r-2-export ${arrExport}`}>
          <div className="arrow-U"></div>
        </div>
        <div className={`flow r-2-export-connect-R ${arrExportConnect}`}>
          <div className="arrow-L"></div>
        </div>
        <div className={`flow r-2-export-connect-L ${arrExportConnect}`}>
          <div className="arrow-U"></div>
        </div>

      </div>

      </div>
  )
}

export const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(Component2)