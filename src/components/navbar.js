import React from 'react';
import { connect } from 'react-redux';
import { toggleReact, toggleClass, toggleState, toggleProps, toggleCallback, toggleLinks, toggleRoutes } from '../actions/reactt'
import { toggleRedux, toggleMapState, toggleCombine, toggleAsync } from '../actions/reduxx'

export function NavBar(props) {
  let reactFormat = props.reactt.reactt ? '' : 'strikethru';
  let classFormat = props.reactt.reactt ? '' : 'strikethru';
  let statefulFormat = ( props.reactt.reactt && props.reactt.classs ) ? '' : 'strikethru';
  let propsFormat = props.reactt.reactt ? '' : 'strikethru';
  let callbackFormat = ( props.reactt.reactt && !props.reduxx.reduxx ) ? '' : 'strikethru';
  let linksFormat = props.reactt.reactt ? '' : 'strikethru';
  let routesFormat = props.reactt.reactt ? '' : 'strikethru';
  let reduxFormat = props.reactt.reactt ? '' : 'strikethru';
  let mapStateFormat = ( props.reactt.reactt && props.reduxx.reduxx ) ? '' : 'strikethru';
  let combineFormat = ( props.reactt.reactt && props.reduxx.reduxx ) ? '' : 'strikethru';
  let asyncFormat = ( props.reactt.reactt && props.reduxx.reduxx ) ? '' : 'strikethru';

  return (
      <div className="navbar">
        <h3>NavBar</h3>
        
        <form className="form">
          <input className="in1" type="checkbox" name="react" checked={props.reactt.reactt} onChange={()=>props.dispatch(toggleReact())} />
            <label className={reactFormat} htmlFor="react">React</label>

          <input className="in2" type="checkbox" name="class" checked={props.reactt.classs} onChange={()=>props.dispatch(toggleClass())} />
            <label className={classFormat} htmlFor="class">Class</label>
          
          <input className="in3" type="checkbox" name="stateful" checked={props.reactt.stateful} onChange={()=>props.dispatch(toggleState())} />
            <label className={statefulFormat} htmlFor="stateful">Stateful Component</label>
          
          <input className="in2" type="checkbox" name="props" checked={props.reactt.propss} onChange={()=>props.dispatch(toggleProps())} />
            <label className={propsFormat} htmlFor="props">Props</label>
          
          <input className="in2" type="checkbox" name="callback" checked={props.reactt.callback} onChange={()=>props.dispatch(toggleCallback())} />
            <label className={callbackFormat} htmlFor="callback">Callback</label>


          <input className="in2" type="checkbox" name="links" checked={props.reactt.links} onChange={()=>props.dispatch(toggleLinks())}/>
            <label className={linksFormat} htmlFor="links">Links</label>
          
          <input className="in2" type="checkbox" name="routes" checked={props.reactt.routes} onChange={()=>props.dispatch(toggleRoutes())}  />
            <label className={routesFormat} htmlFor="routes">Routes</label>
          
          <input className="in2" type="checkbox" name="redux" checked={props.reduxx.reduxx} onChange={()=>props.dispatch(toggleRedux())} />
            <label className={reduxFormat} htmlFor="redux">Redux</label>
          
          <input className="in3" type="checkbox" name="mapState" checked={props.reduxx.mapState} onChange={()=>props.dispatch(toggleMapState())} />
            <label className={mapStateFormat} htmlFor="mapState">Map State To Props</label>
          
          <input className="in3" type="checkbox" name="combine" checked={props.reduxx.combine} onChange={()=>props.dispatch(toggleCombine())} />
            <label className={combineFormat} htmlFor="combine">Combine Reducers</label>
          
          <input className="in3" type="checkbox" name="async" checked={props.reduxx.async} onChange={()=>props.dispatch(toggleAsync())} />
            <label className={asyncFormat} htmlFor="async">Async Actions</label>
        </form>

      </div>

  )
}

const mapStateToProps = state => ({
  reactt: state.reactt,
  reduxx: state.reduxx
});

export default connect(mapStateToProps)(NavBar);

