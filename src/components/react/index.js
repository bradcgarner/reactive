import React from 'react';
import { Router } from 'react-router-dom';

import Index from './indexx';
import Component1 from './component1';
import Component2 from './component2';

export default function Reactt() {
  return (
      <article class="react">
        <h1>React</h1>
        <Index />
        <Component1 />
        <Component2 />
      </article>
  )
}