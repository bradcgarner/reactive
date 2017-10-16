import React from 'react';
import { connect } from 'react-redux';

export function Return2(props) {
  console.log('16 compon2 return',props);
  
  return (
        <div className="group component2return">
          <div className="code in2"><p>return (</p></div>
          <div className="code in4"><p>&lt;div&gt;</p></div>
          <div className="code in5"><p>&lt;p onClick = &#123; () => props.onChange( value ) &#125; &#125; &gt;Some text&lt;</p></div>
          <div className="code in5"><p>&lt;Route path="/" component=&#123; Component3 &#125; /></p></div>
          <div className="code in5"><p>&lt;Link to="&#123; link &#125;"></p></div>
          <div className="code in4"><p>&lt;/div&gt;</p></div>
          <div className="code in2"><p>)</p></div>
          <div className="code in1"><p>&#125;</p></div>
        </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(Return2)