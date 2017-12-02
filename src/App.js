import React from 'react';
import Reactt from './components/reactt/';
import Reduxx from './components/reduxx/';
import NavBar from './components/navbar';
import { connect } from 'react-redux';


export function App(props) {

  return (
      <main>
        <NavBar />
        <Reactt />
        <Reduxx />
      </main>
  )
}

export const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(App)