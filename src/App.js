import React from 'react';
import Reactt from './components/reactt/';
import Reduxx from './components/reduxx/';
import NavBar from './components/navbar';
import { connect } from 'react-redux';


export function App(props) {
  const reactt = props.reactt ? <Reactt /> : '' ;
  const reduxx = props.reduxx ? <Reduxx /> : '' ;

  return (
      <main>
        <NavBar />
        {reactt}
        {reduxx}
      </main>
  )
}

export const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(App)