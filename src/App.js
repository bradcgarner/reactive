import React from 'react';
import Reactt from './components/reactt/';
import Reduxx from './components/reduxx/';
import NavBar from './components/navbar';
import { connect } from 'react-redux';


export function App() {
  return (
      <main>
        <NavBar />
        <Reactt />
        {/*<Reduxx />*/}
      </main>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(App)