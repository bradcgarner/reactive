import React from 'react';
import { connect } from 'react-redux';

export function InitialState() {
  return (
      
        <div className="group reducerInitialState">
          <div className="code in1"><p>const initialState = &#123;</p></div>
          <div className="code in2"><p>prop: value</p></div>
          <div className="code in1"><p>&#125;</p></div>
        </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(InitialState)