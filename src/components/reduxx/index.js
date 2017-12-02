import React from 'react';
import { connect } from 'react-redux';

import Store from './store';
import Reducer from './reducer';
import Actions from './actions';

export function Reduxx(props) {
  const arrRedux       = `arr${props.arrRedux}`; 
  const header         = `redux ${arrRedux}`;
  return (
    <article className={header}>
      <div className="h1"><h1>Redux</h1></div>
      <Store />
      <Reducer />
      <Actions />
    </article>
  )
}

export const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(Reduxx)