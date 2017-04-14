import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { reduxForm } from 'redux-form';
import {checkUser} from '../actions/index';
import {Link} from 'react-router';


class Login extends Component{
  static contextTypes = {
    router: PropTypes.object
    // this gets the context of the router parent...so we can use the push method onSubmit
    // this should generally only be used with Router and onSubmit
  };

  onSubmit(props){
    this.props.checkUser(props)
    .then( () => {
      this.context.router.push('/');
    })
  }

  render(){
    const { fields: {username, password}, handleSubmit } = this.props;

    return(
      <div>
        <h2>Login</h2>


      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
       <div className="form-group">
         <label>Username</label>
         <input className="form-control" type="text" {...username} />
         <div className="text-help">
          {username.touched ? username.error : ''}
         </div>
       </div>
       <div className="form-group">
         <label>Password</label>
         <input className="form-control" type="password" {...password} />
         <div className="text-help">
          {password.touched ? password.error : ''}
         </div>
       </div>
       <button type="submit" className="btn btn-primary">Login</button>
       <Link to="/" className="btn btn-default">Cancel</Link>
      </form>
  </div>
    );
  }
}

function validate(values){
  const errors = {};

  if(!values.username){
    errors.username = 'Enter a username';
  }
  if(!values.password){
    errors.password = 'Enter a password';
  }

  return errors;
}

function mapStateToProps(state){
  return { user: state.user.results };
}

export default reduxForm({form: 'LoginForm',fields:['username', 'password'], validate }, mapStateToProps, { checkUser })(Login);
