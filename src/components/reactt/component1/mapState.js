import React from 'react';
import { connect } from 'react-redux';

export function MapState(props) {
  console.log('12 mapstate1',props);
  
  return (
        <div className="group component1mapState">
          <div className="code in1"><p>export const mapStateToProps = state => (&#123;</p></div>
          <div className="code in2"><p>key: state.value</p></div>
          <div className="code in1"><p>&#125;</p></div>
        </div>        
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(MapState)