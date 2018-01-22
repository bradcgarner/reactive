import React from 'react';
import { connect } from 'react-redux';
import About from './about';
import Options from './options';
import Explanation from './explanation';
import Settings from './settings';

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: null,
    }
  }

  toggleOpen(element){
    if (this.state.open === element) {
      this.setState({open: null});
    } else {
      this.setState({open: element});
    }
  }

  render() {
    
    const about = this.state.open === 'about' ? <About/> : null;
    const menu = this.state.open === 'menu' ? <Options/> : null;
    const explanation = this.state.open === 'explanation' ? <Explanation/> : null;
    const settings = this.state.open === 'settings' ? <Settings/> : null;
  
    return (
      <div className="navbar">

        <i className="fa fa-question-circle navbar-icon"
        aria-hidden="true"
        onClick={()=>this.toggleOpen('about')}>
          {about}
        </i>
        
        <i className="fa fa-cogs navbar-icon"
          aria-hidden="true"
          onClick={()=>this.toggleOpen('menu')}>
          {menu}
        </i>
        
        <i className="fa fa-binoculars navbar-icon"
          aria-hidden="true"
          onClick={()=>this.toggleOpen('explanation')}>
          {explanation}
        </i>

        <i className="fa fa-sliders navbar-icon"
        aria-hidden="true"
        onClick={()=>this.toggleOpen('settings')}>
          {settings}
        </i>

      </div>
  
    )
  }
  
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(NavBar);

