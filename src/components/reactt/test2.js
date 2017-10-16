import React from 'react';
import { connect } from 'react-redux';

export class Test2 extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log('test2',this.props);
    
    return (
      <h3>Test</h3>
  )
  }

};

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
});

export default connect(mapStateToProps)(Test2);