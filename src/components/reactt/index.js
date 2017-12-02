import React from 'react';
import { connect } from 'react-redux';

import Indexx from './indexx';

import Component1 from './component1';
import Component2 from './component2';

export function Reactt(props) {
  return (

      <article className="react">

        <div className="h1"><h1>React</h1></div>
        <Indexx />
        <Component1 />
        <Component2 />
      </article>
  )
}

export const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(Reactt)