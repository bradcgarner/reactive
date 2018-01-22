import React from 'react';
import { connect } from 'react-redux';
import { toggle } from '../../actions'

export function Settings(props) {
  let reactFormat = props.reactt ? '' : 'strikethru';

  
  return (
    <div className="settings navbar-menu">
                
      <form className="menu-form">
        <div className='input-label-pair'>
          <input className="in1" type="checkbox"
            name="react" checked={props.reactt} 
            onChange={()=>props.dispatch(toggle('reactt', props))} />
          <label className={reactFormat} htmlFor="react">React</label>
        </div>
          
      </form>
          
    </div>

  )
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(Settings);

