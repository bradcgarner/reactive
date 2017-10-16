import React from 'react';
import { connect } from 'react-redux';

export function MethodGeneral(props) {
  console.log('7 methodGen1',props);
  
  return (
        <div className ="group component1methodmethodGeneral">
          <div className="code in1"><p>methodName( arg ) &#123;</p></div>
          <div className="code in2"><p>{'&#47;&#47; ...do some logic'}</p></div>
          <div className="code in1"><p>&#125;</p></div>
        </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(MethodGeneral)