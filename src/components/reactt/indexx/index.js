import React from 'react';
import { connect } from 'react-redux';
import ImportI from './import-i';
import Code from './code';

export function Indexx(props) {
  console.log('1 index',props);
  
  return (
      <div className="block index">
        <div className="folder-header"><h3>Index</h3></div>
        <ImportI />
        <Code />
        <div className="flowContainer">
          <div className="flow r-i-store-L"><div className="arrow-L"></div></div>
          <div className="flow r-i-store-R"></div>
          <div className="flow r-i-provider"></div>

          <div className="flow r-i-compon1-L"><div className="arrow-R"></div></div>
          <div className="flow r-i-compon1-R"></div>

          <div className="flow r-i-react-dom-L"><div className="arrow-L"></div></div>
          <div className="flow r-i-react-dom-R"></div>

          <div className="flow r-i-export">
          <div className="flow html"><div className="arrow-R"></div></div>
          <div className="flow provider">
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