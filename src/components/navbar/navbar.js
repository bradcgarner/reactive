import React from 'react';
import { connect } from 'react-redux';
import { toggle } from '../../actions'
import Menu from './menu';

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    }
  }

  toggleMenu(){
    this.setState({menu: !this.state.menu});
  }

  render() {
    const reactFormat = this.props.reactt ? '' : 'strikethru';
    const classFormat = this.props.reactt ? '' : 'strikethru';
    const statefulFormat = this.props.classs ? '' : 'strikethru';
    const propsFormat = this.props.reactt ? '' : 'strikethru';
    const callbackFormat = this.props.reactt ? '' : 'strikethru';
    const linksFormat = this.props.reactt ? '' : 'strikethru';
    const routesFormat = this.props.reactt ? '' : 'strikethru';
    const reduxFormat = this.props.reactt ? '' : 'strikethru';
    const mapStateFormat =  this.props.reduxx ? '' : 'strikethru';
    const combineFormat = this.props.reduxx ? '' : 'strikethru';
    const asyncFormat =  this.props.reduxx ? '' : 'strikethru';
    const formFormat = this.props.reduxx ? '' : 'strikethru';
    const composeFormat =  this.props.reduxx ? '' : 'strikethru';
    
    const menu = this.state.menu ? <Menu/> : null;
  
    return (
      <div className="navbar">
        
        <i className="fa fa-cogs"
          aria-hidden="true"
          onClick={()=>this.toggleMenu()}></i>
  
        {menu}
  
      </div>
  
    )
  }
  
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(NavBar);

