import React from 'react';
import { connect } from 'react-redux';

// toggle function: off, className & props: on variables props
export function Constructor1(props) {
  console.log('6 constructor1',props);
  
  return (
        <div className="group component1constructor"> 
          <div className="code in1"><p>constructor( props ) &#123;</p></div>
          <div className="code in2"><p>super( props )</p></div>
          <div className="code in3"><p>whatever</p></div>
          <div className="code constructor in1"><p>&#125;</p></div>
        </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(Constructor1)