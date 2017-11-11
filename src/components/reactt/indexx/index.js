import React from 'react';
import { connect } from 'react-redux';
import ImportI from './import-i';
import Code from './code';

export function Indexx(props) {
  console.log('1 index',props);
  
  // ##################### ARROW CLASSES #####################
  const arrStore       = `arr${props.reduxx.arrStore}`;
  const arrProviderIn  = `arr${props.reduxx.arrIndexProvider}`;
  const arrC1          = `arr${props.reactt.arrIndexC1}`;
  const arrDOM         = `arr${props.reactt.arrIndexDOM}`;
  const arrHTML        = `arr${props.reactt.arrIndexHTML}`;
  const arrProviderOut = `arr${props.reduxx.arrIndexProviderOut}`;
  
  return (
      <div className="block index">
        <div className="folder-header"><h3>Index</h3></div>
        <ImportI />
        <Code />
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

          <div className="flow r-i-export arr0">
            <div className={`flow html ${arrHTML}`}>
              <div className="arrow-R"></div>
            </div>
            <div className={`flow provider ${arrProviderOut}`}>
              <div className="arrow-D"></div>
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

export default connect(mapStateToProps)(Indexx)