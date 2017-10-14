import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Index from './components/indexx/';
import Component1 from './components/component1/';
import Component2 from './components/component2/';
import Store from './components/store/';
import Reducer from './components/reducer/';
import Actions from './components/actions/';


export default function App() {
  return (
      <BrowserRouter>
      <main>
        <Index />
        <Component1 />
        <Component2 />
        <Store />
        <Reducer />
        <Actions />
      </main>
      </BrowserRouter>
  )
}