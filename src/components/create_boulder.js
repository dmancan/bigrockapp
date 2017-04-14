import React, {Component, PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import {createBoulder} from '../actions/index';
import {Link} from 'react-router';


class CreateBoulder extends Component{

  static contextTypes = {
    router: PropTypes.object
    // this gets the context of the router parent...so we can use the push method onSubmit
    // this should generally only be used with Router and onSubmit
  };

  onSubmit(props){
    this.props.createBoulder(props)
      .then( () => {
        this.context.router.push('/');
      })
  }

  render(){
    const { fields: {name, grade}, handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a new boulder problem</h3>
       <div className="form-group">
         <label>Name</label>
         <input className="form-control" type="text" {...name} />
       </div>
       <div className="form-group">
         <label>Grade</label>
         <input className="form-control" type="text" {...grade} />
       </div>
       <button type="submit" className="btn btn-primary">Submit</button>
       <Link to="/" className="btn btn-default">Cancel</Link>
     </form>
    )
  }
}

function validate(values){
  const errors = {};

  if(!values.name){
    errors.name = 'Enter a title';
  }
  if(!values.grade){
    errors.grade = 'Enter a grade';
  }

  return errors;
}


export default reduxForm({
  form: 'PostsNewForm',
  fields:['name', 'grade'],
  validate
}, null, { createBoulder })(CreateBoulder);
