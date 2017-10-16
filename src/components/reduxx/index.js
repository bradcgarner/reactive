import React from 'react';

import Store from './store';
import Reducer from './reducer';
import Actions from './actions';

export default function Reduxx() {
  return (
    <article className="redux">
      <div className="big-header"><h1>Redux</h1></div>
      <Store />
      <Reducer />
      <Actions />
    </article>
  )
}