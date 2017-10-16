import React from 'react';
import { connect } from 'react-redux';

export function Return1(props) {
  console.log('11 return1',props);
  
  return (
        <div className="group component1return">
          <div className="code in1"><p>render() (</p></div>
          <div className="code in2"><p>return (</p></div>
          <div className="code in3"><p>&lt;BrowserRouter&gt;</p></div>
          <div className="code in4"><p>&lt;div&gt;</p></div>
          <div className="code in5"><p>&lt;Component2 onChange = &#123; ( arg ) => this.callbackFunc( arg ) &#125; /></p></div>
          <div className="code in5"><p>&lt;Route exact path="/" component=&#123; Component2 &#125; /></p></div>
          <div className="code in5"><p>&lt;Link to="&#123; link &#125;"></p></div>
          <div className="code in4"><p>&lt;/div&gt;</p></div>
          <div className="code in3"><p>&lt;/BrowserRouter&gt;</p></div>
          <div className="code in2"><p>)</p></div>
          <div className="code in1"><p>&#125;</p></div>
        </div>
    )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(Return1)