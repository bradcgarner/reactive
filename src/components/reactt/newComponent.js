import React from 'react';
import { connect } from 'react-redux';
import ImportI from './indexx/import-i';
import Code from './indexx/code';

export function NewComponent(props) {
  console.log('new1 index',props);
  
  return (
      <div className="block index">
        <h3>Index</h3>
        <ImportI />
        <Code />
      </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(NewComponent)