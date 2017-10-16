import React from 'react';
import { connect } from 'react-redux';
import { Import2 } from './import2';
import { Return2 } from './return2';
import { Connect2 } from './connect2';

export function Component2(props) {
  console.log('14 compon2',props);
  return (
      <div className="block component2">
        <h3>Component2</h3>
        <Import2 />
        <div className="group component2line1">
          <div className="code"><p>export default function <span className="example">Component2</span> (props) &#123;</p></div>
        </div>
        <Return2 />
        <Connect2 />
        
      </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(Component2)