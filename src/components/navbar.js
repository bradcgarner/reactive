import React from 'react';
import { connect } from 'react-redux';
import { toggle } from '../actions'

export function NavBar(props) {
  let reactFormat = props.reactt ? '' : 'strikethru';
  let classFormat = props.reactt ? '' : 'strikethru';
  let statefulFormat = props.classs ? '' : 'strikethru';
  let propsFormat = props.reactt ? '' : 'strikethru';
  let callbackFormat = props.reactt ? '' : 'strikethru';
  let linksFormat = props.reactt ? '' : 'strikethru';
  let routesFormat = props.reactt ? '' : 'strikethru';
  let reduxFormat = props.reactt ? '' : 'strikethru';
  let mapStateFormat =  props.reduxx ? '' : 'strikethru';
  let combineFormat = props.reduxx ? '' : 'strikethru';
  let asyncFormat =  props.reduxx ? '' : 'strikethru';
  let formFormat = props.reduxx ? '' : 'strikethru';
  let composeFormat =  props.reduxx ? '' : 'strikethru';
  console.log('navbar props',props);
  
  return (
      <div className="navbar">
                
        <form className="form">
          <input className="in1" type="checkbox" name="react" checked={props.reactt} onChange={()=>props.dispatch(toggle('reactt', props))} />
            <label className={reactFormat} htmlFor="react">React</label>

          <input className="in2" type="checkbox" name="class" checked={props.classs} onChange={()=>props.dispatch(toggle('classs', props))} />
            <label className={classFormat} htmlFor="class">Class</label>
          
          <input className="in3" type="checkbox" name="stateful" checked={props.stateful} onChange={()=>props.dispatch(toggle('stateful', props))} />
            <label className={statefulFormat} htmlFor="stateful">Stateful Component</label>
          
          <input className="in2" type="checkbox" name="props" checked={props.propss} onChange={()=>props.dispatch(toggle('propss', props))} />
            <label className={propsFormat} htmlFor="props">Props</label>
          
          <input className="in2" type="checkbox" name="callback" checked={props.callback} onChange={()=>props.dispatch(toggle('callback', props))} />
            <label className={callbackFormat} htmlFor="callback">Callback</label>

          <input className="in2" type="checkbox" name="links" checked={props.links} onChange={()=>props.dispatch(toggle('links', props))}/>
            <label className={linksFormat} htmlFor="links">Links</label>
          
          <input className="in2" type="checkbox" name="routes" checked={props.routes} onChange={()=>props.dispatch(toggle('routes', props))}  />
            <label className={routesFormat} htmlFor="routes">Routes</label>
          
          <input className="in2" type="checkbox" name="redux" checked={props.reduxx} onChange={()=>props.dispatch(toggle('reduxx', props))} />
            <label className={reduxFormat} htmlFor="redux">Redux</label>
          
          <input className="in3" type="checkbox" name="mapState" checked={props.mapState} onChange={()=>props.dispatch(toggle('mapState', props))} />
            <label className={mapStateFormat} htmlFor="mapState">Map State To Props</label>
          
          <input className="in3" type="checkbox" name="combine" checked={props.combine} onChange={()=>props.dispatch(toggle('combine', props))} />
            <label className={combineFormat} htmlFor="combine">Combine Reducers</label>
          
          <input className="in3" type="checkbox" name="async" checked={props.async} onChange={()=>props.dispatch(toggle('async', props))} />
            <label className={asyncFormat} htmlFor="async">Async Actions</label>
        
          <input className="in3" type="checkbox" name="form" checked={props.form} onChange={()=>props.dispatch(toggle('form', props))} />
            <label className={formFormat} htmlFor="async">Forms</label>

          <input className="in3" type="checkbox" name="compose" checked={props.compose} onChange={()=>props.dispatch(toggle('compose', props))} />
            <label className={composeFormat} htmlFor="async">Compose</label>
        
        </form>

      </div>

  )
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(NavBar);

