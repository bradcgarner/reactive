import React from 'react';
import { connect } from 'react-redux';

export function Indexx(props) {
  
  // #####################  CLASS VARIABLES #####################
  const arrStore       = `arr${props.arrIndexStore}`;
  const arrProviderIn  = `arr${props.arrIndexProvider}`;
  const arrC1          = `arr${props.arrIndexC1}`;
  const arrDOM         = `arr${props.arrIndexDOM}`;
  const arrHTML        = `arr${props.arrIndexHTML}`;
  const arrProviderOut = `arr${props.arrIndexProviderOut}`;

  return (
      <div className="block index">
        <div className="folder-header"><h3>Index</h3></div>


        <div className="group indexImport">
          <div className="library"><p>import React from 'react';</p></div>
          <div className="file"><p>import &#123; <span className="example">Component1</span> &#125; from './component1';</p></div>
          <div className="file"><p className={arrStore}>import store from './store';</p></div>
          <div className="library"><p>import ReactDOM from 'react-dom';</p></div>
          <div className="library"><p className={arrProviderIn}>import &#123; Provider &#125; from 'react-redux';</p></div>
        </div>
        
        <div className="group indexCode">
          <div className="code"><p>ReactDOM.render(</p></div>
          <div className="code in1"><p className={arrProviderIn}>&lt;Provider store = &#123; store &#125; &gt;</p></div>
          <div className="code in2"><p>&lt;<span className="example">Component1</span> /&gt;</p></div>
          <div className="code in1"><p className={arrProviderIn}>&lt;/Provider /&gt; ,</p></div>
          <div className="code in1"><p>document.getElementById('root')</p></div>
          <div className="code"><p>);</p></div>
          <div className="code"><p>registerServiceWorker();</p></div>
        </div>


        <div className="flowContainer">
          <div className={`flow r-i-store-L ${arrStore}`}>
            <div className="arrow-L"></div>
          </div>
          <div className={`flow r-i-store-R ${arrStore}`}></div>

          <div className={`flow r-i-provider ${arrProviderIn}`}></div>

          <div className={`flow r-i-compon1-L ${arrC1}`}>
            <div className="arrow-R"></div>
          </div>
          <div className={`flow r-i-compon1-R ${arrC1}`}></div>

          <div className={`flow r-i-react-dom-L ${arrDOM}`}>
            <div className="arrow-L"></div>
          </div>
          <div className={`flow r-i-react-dom-R ${arrDOM}`}></div>

          <div className={`flow r-i-export-html ${arrHTML}`}>
            <div className="arrow-R"></div>
          </div>
          <div className={`flow r-i-export-provider ${arrProviderOut}`}>
            <div className="arrow-D"></div>
          </div>

        </div>
      </div>
  )
}

export const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(Indexx)