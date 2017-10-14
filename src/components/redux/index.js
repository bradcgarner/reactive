import React from 'react';
import { Router } from 'react-router-dom';
import Store from './store';
import Reducer from './reducer';
import Actions from './actions';

export default function Reduxx() {
  return (
    <article class="redux">
      <h1>Redux</h1>
      <Store />
      <Reducer />
      <Actions />
    </article>
  )
}