import React from 'react';
import { connect } from 'react-redux';
import { Import1 } from './import1';
import { Component1Line1 } from './component1-line1';
import { Constructor1 } from './constructor1';
import { MethodGeneral } from './method-general';
import { MethodCallback } from './method-callback';
import { MethodSetState } from './method-setState';
import { MethodDispatch } from './method-dispatch';
import { Return1 } from './return1';
import { MapState } from './mapState';
import { Connect1 } from './connect1';

export function Component1(props) {
  console.log('4-pre component1 props', props);
  // add variables for props
  return (
      <div className="block component1">
        <h3>Component1</h3>
        {/*<Import1 />
        <Component1Line1 />
        <Constructor1 />
        <MethodGeneral />
        <MethodCallback />
        <MethodSetState />
        <MethodDispatch />
        <Return1 />
        <MapState />
        <Connect1 />*/}
        
      </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(Component1)