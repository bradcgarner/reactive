import React from 'react';
import { connect } from 'react-redux';
import ImportR from './import-r';
import InitialState from './initial-state';
import SingleSwitch from './single-switch';
import SingleIf from './single-if';
import Combine from './combine';


export function Reducer(props) {
  console.log('Reducer',props)
  return (
      <div className="block reducer">
        <div className="folder-header"><h3>Reducer</h3></div>
        <ImportR />
        <InitialState />
        <SingleSwitch />
        <SingleIf />
        <Combine />
      </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(Reducer)