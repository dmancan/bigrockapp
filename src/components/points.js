import React, {Component} from 'react';

class Points extends Component{
  constructor(props){
    super(props);
      this.state = {
        points: this.props.points
      }
  }
  render(){
    return(

        <p className="navbar-text nav-bar-right currentpoints">{this.state.points} Points <span className="glyphicon glyphicon-check"></span></p>

    );
  }
}
export default Points;
