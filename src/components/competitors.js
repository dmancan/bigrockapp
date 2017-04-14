import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchClimbers} from '../actions/index';

import {Link} from 'react-router';

class Competitors extends Component{


  componentWillMount(){
    console.log('this would be a good time to get posts');
    this.props.fetchClimbers();
  }

  addPoints(arr = []){
    return arr.length;
  }

  addFlashedPoints(arr = []){
    return arr.length;
  }

  totalPoints(arr1=[], arr2=[]){
    let value1 = arr1.length * 10;
    let value2 = arr2.length * 5;
    return value1 + value2;
  }

  renderPosts(){
    return this.props.climbers.map((climber) => {

      return(
          <li className="list-group-item" key={climber.objectId}>
            {climber.username}
            <div className="form-group checkticks">
              <label>Completed</label>
              <span className="spacer">{this.addPoints(climber.completedBoulders)}</span>
              <label>Flashes </label>
              <span className="spacer">{this.addFlashedPoints(climber.flashedBoulders)}</span>
              <span className="label label-default points">{this.totalPoints(climber.completedBoulders, climber.flashedBoulders)} Points <span className="glyphicon glyphicon-check"></span></span>
            </div>
          </li>
      )
    })
  }

  render(){
    return(
      <div>
        <h2>Competitors</h2>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
    </div>
    );
  }
}

function mapStateToProps(state){
  return { climbers: state.climbers.results };
}

export default connect(mapStateToProps, { fetchClimbers })(Competitors);
