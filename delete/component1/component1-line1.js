import React from 'react';
import { connect } from 'react-redux';

export function Component1Line1(props) {
  console.log('5 compon1 line1',props);
  const showDefault = props.reduxx.reduxx ? 'clear' : 'normal' ;
  const type = props.reactt.classs ? 'class' : 'function' ;
  const typePad = props.reactt.classs ? 'normal' : 'hidden' ;
  const end = props.reactt.classs ? 'exends React.Component {' : '(props) {' ;
  //const showStore = props.reduxx.reduxx ? 'normal' : 'clear';
  //const showProvider = props.reduxx.reduxx ? 'normal' : 'clear';

  return (
    <div className="group component1line1">
      <div className="code">
        <p>export
          <span className={showDefault}> default </span>
          {type} <span className={typePad}>&nbsp;&nbsp;&nbsp;</span> 
          <span className="example">Component1</span> {end}
        </p>
      </div>
    </div>
  )
}

export const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
})

export default connect(mapStateToProps)(Component1Line1)