import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import LoginStatus from './login_status';

class Header extends Component{

  render(){

    return(
      <div>
        <h1>Big Rock Bouldering Competition</h1>
        <div className="navbar-header">

            <ul className="nav nav-tabs">
              <li><Link to="/" onlyActiveOnIndex activeClassName="active">Route List</Link></li>
              <li><Link to="competitors" activeClassName="active">Competitors</Link></li>
              <LoginStatus />
            </ul>

          </div>
      </div>
    );
  }
}

export default Header;
