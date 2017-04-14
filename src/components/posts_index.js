
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import Checkboxes from './checkboxes';
// import { bindActionCreators } from 'redux';
// Becuase of the shortcut export method below, we removed the above
import {fetchBoulders, fetchMyBoulders} from '../actions/index';

import {Link} from 'react-router';

class PostsIndex extends Component{
  constructor(props){
    super(props);
    this.state = {
      myBoulders: null
        }
  }

  componentWillMount(){
    console.log('this would be a good time to get posts');
    this.props.fetchBoulders();



  }

  renderPosts(){
      return this.props.posts.map((post) => {
        return (
          <li className="list-group-item" key={post.objectId}>
            <span className="label label-default grade">{post.grade}</span>
            <a href="#">{post.name}</a>
            <Checkboxes objectId={post.objectId} myBoulders={this.props.boulders} />
          </li>
       )
    });
  }


  render(){
      return (
        <div>
          <h2>Route List</h2>
          <button type="button" className="btn btn-primary add_route">
            <span className="glyphicon glyphicon-plus"></span> <Link to="/create_boulder" activeClassName="active">Add Route</Link>
          </button>
          <form>
            <ul className="list-group">
              {this.renderPosts()}
            </ul>
          </form>
      </div>
      )
  }

}

function mapStateToProps(state){
  return { posts: state.posts.results, user: state.user.results, authenticated: state.user.authenticated, boulders: state.boulders.myBoulders };
}

export default connect(mapStateToProps, { fetchBoulders, fetchMyBoulders })(PostsIndex);
