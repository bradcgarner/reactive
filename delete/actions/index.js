import React from 'react';
import { connect } from 'react-redux';
import Import from './import';
import Async from './async';

export function Actions(props) {
  console.log('actions',props);
  return (
      <div className="block actions">
        <div className="folder-header"><h3>Actions</h3></div>
        <Import />
        <Async />
      </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(Actions)