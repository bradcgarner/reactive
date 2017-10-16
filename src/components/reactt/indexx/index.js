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
      </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(Indexx)