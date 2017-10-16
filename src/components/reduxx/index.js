import React from 'react';

import Store from './store/';
import Reducer from './reducer/';
import Actions from './actions/';

export default function Reduxx() {
  return (
    <article className="redux">
      <h1>Redux</h1>
      <Store />
      <Reducer />
      <Actions />
    </article>
  )
}