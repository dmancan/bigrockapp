import React, {Component} from 'react';
import {connect}  from 'react-redux';
import {authUser, updateUserBoulders} from '../actions/index';
import {Link} from 'react-router';

class Checkboxes extends Component{
  constructor(props){
    super(props);

    this.state = {
      objectId: props.objectId,
      boulderCheck: false,
      flashedCheck: false,
      arrCompletedBoulders: props.myBoulders,
      arrFlashedBoulders: []
    }
    console.log('arrCompletedBoulders',this.state.arrCompletedBoulders);
    this.checkboxstatus = this.checkboxstatus.bind(this);
    this.handleBoulderChange = this.handleBoulderChange.bind(this);
    this.arrMyClimbs = this.arrMyClimbs.bind(this);
  }

  componentWillMount(){
    this.props.authUser();
    this.arrMyClimbs();
  }


  arrMyClimbs(){

    if(this.props.user){

      if(this.props.user.completedBoulders){


          this.props.user.completedBoulders.map((climbs, i) => {
          var id = this.state.objectId;
          //console.log('id', this.state.objectId);
          var num = climbs;
          //console.log('num',num);

           if(id === num){
              return this.setState({ boulderCheck: true });
            }
         })

       } //end boulderif
     } //endif
   }



checkboxstatus(){
  if(!this.state.completedBoulders){
    this.setState({ boulderCheck: event.target.checked });
  }
}

handleBoulderChange(event) {
  this.setState({ boulderCheck: event.target.checked });
  this.setState({objectId:event.target.value});

  if(this.state.boulderCheck){
    console.log('Step 1');
    this.props.updateUserBoulders(this.state.objectId);
  }


}

render(){
  if(!this.props.authenticated){
    return(
      <div className="form-group checkticks">
        <label>Login to enable checkboxes</label>
      </div>
    )
  }
  return(
    <div className="form-group checkticks">
      <label>Completed</label>
       <span className="spacer"><input name="completedBoulders" value={this.state.objectId} type="checkbox" checked={this.state.boulderCheck} onChange={this.handleBoulderChange} /></span>
      <label>Flashed</label>
       <span className="spacer"><input name="flashedBoulders" value={this.state.objectId} type="checkbox" /></span>
    </div>
  );
}

}
function mapStateToProps(state){
  return { user: state.user.results, authenticated: state.user.authenticated };
}

export default connect(mapStateToProps, { authUser, updateUserBoulders })(Checkboxes);
