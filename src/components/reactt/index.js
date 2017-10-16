import React from 'react';
import { connect } from 'react-redux';

import Indexx from './indexx/';

//import Component1 from './component1/';
import { MethodCallbackUp } from './method-callbackup';
import { NewComponent } from './newComponent';
import { Import1 } from './component1/import1';
import { Component1Line1 } from './component1/component1-line1';
import { Constructor1 } from './component1/constructor1';
import { MethodGeneral } from './component1/method-general';
import { MethodCallback } from './component1/method-callback';
import { MethodSetState } from './component1/method-setState';
import { MethodDispatch } from './component1/method-dispatch';
import { Return1 } from './component1/return1';
import { MapState } from './component1/mapState';
import { Connect1 } from './component1/connect1';

import Component2 from './component2/';

export function Reactt(props) {
  return (

      <article className="react">
        <NewComponent/>
        <MethodCallbackUp/>
        <h1>React</h1>
        <Indexx />

        {/*<div className="block component1">*/}
          <h3>Component1</h3>
          <Import1 />
          {/*<Component1Line1 />*/}
          <Constructor1 />
          <MethodGeneral />
          <MethodCallback />
          <MethodSetState />
          <MethodDispatch />
          <Return1 />
          <MapState />
          <Connect1 />
        {/*</div>*/}

        <Component2 />
      </article>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(Reactt)