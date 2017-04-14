import React, {Component} from 'react';
import {connect}  from 'react-redux';
import {authUser, logoutUser} from '../actions/index';
import {Link} from 'react-router';

class LoginStatus extends Component{



  constructor(props){
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout(event){
    event.preventDefault();
    this.props.logoutUser(this.props.user);
  }

  getLink(){
    if(!this.props.user){
        return <Link to="login">Login to enable checkboxes</Link>
    }else{
        return <a onClick={this.logout}>Logout {this.props.user.username}</a>
    }
  }

  render(){

    return(
      <p className="navbar-text nav-bar-right currentpoints">
        { this.getLink() }
      </p>
    )
  }
}

function mapStateToProps(state){
  return { authenticated: state.user.authenticated, user: state.user.results };
}

export default connect(mapStateToProps, {authUser, logoutUser})(LoginStatus);
//<span className="glyphicon glyphicon-check"></span>
