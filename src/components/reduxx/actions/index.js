import React from 'react';
import { connect } from 'react-redux';
import Import from './import';
import Async from './async';

export function Actions() {
  return (
      <div className="block actions">
        <h3>Actions</h3>
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