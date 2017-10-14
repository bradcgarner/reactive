import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Reactt from './components/react/';
import Reduxx from './components/redux/';

export default function App() {
  return (
      <BrowserRouter>
      <main>
        <Route path="/" component={Reactt}/>
        <Route path="/" component={Reduxx} />
      </main>
      </BrowserRouter>
  )
}