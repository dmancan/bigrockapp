import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://bigrocktestapp.herokuapp.com/parse',
  timeout: 1000,
  headers: {'X-Parse-Application-Id': 'myAppId', 'X-Parse-REST-API-Key': 'undefined'}
});

export const AUTH_USER = 'AUTH_USER';
export const CREATE_BOULDER = 'CREATE_BOULDER';
export const CHECK_USER = 'CHECK_USER';
export const FAIL_USER = 'FAIL_USER';
export const FETCH_BOULDERS = 'FETCH_BOULDERS';
export const FETCH_CLIMBERS = 'FETCH_CLIMBERS';
export const FETCH_MY_BOULDERS = 'FETCH_MY_BOULDERS';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOG_OUT_MY_BOULDERS = 'LOG_OUT_MY_BOULDERS';
export const UPDATE_USER_BOULDERS = 'UPDATE_USER_BOULDERS';


/*********************************************
*
BOULDER CRUD
*
**********************************************/

export function createBoulder(props){
    const url = `/classes/boulders`;
    const request = instance.post(url, props);

    console.log('Create:', request);


  return{
    type: CREATE_BOULDER,
    payload: request
  };
}

export function fetchBoulders(){
    const url = `/classes/boulders`;
    const request = instance.get(url);

    console.log('Request:', request);


  return{
    type: FETCH_BOULDERS,
    payload: request
  };
}
/*********************************************
*
USER CRUD
*
**********************************************/

export function authUser(){
  return{
    type: AUTH_USER
  }
};


/*********************************************
USER CRUD
**********************************************/
export function logoutUser(props){

console.log('looutUser props', props.sessionToken);

  const instanceLogout = axios.create({
    baseURL: 'http://bigrocktestapp.herokuapp.com/parse',
    timeout: 1000,
    headers: {'X-Parse-Application-Id': 'myAppId', 'X-Parse-REST-API-Key': 'undefined'}
  });
  instanceLogout.defaults.headers.post['X-Parse-Session-Token'] = props.sessionToken;

    const uri = `/logout`;

    return function (dispatch) {

      return instanceLogout.post(uri).then(
        request => dispatch(loggedOutSuccess(request))
      );
    };
}

function loggedOutSuccess(request){
  console.log('Logout success',request );

  return function(dispatch) {
      dispatch({
        type: 'LOGOUT_USER',
        payload: request,
      })
      dispatch({
        type: 'LOG_OUT_MY_BOULDERS',
      })
    };
  }



export function checkUser(props){

  const instanceLogin = axios.create({
    baseURL: 'http://bigrocktestapp.herokuapp.com/parse',
    timeout: 1000,
    headers: {'X-Parse-Application-Id': 'myAppId', 'X-Parse-REST-API-Key': 'undefined', 'X-Parse-Revocable-Session':'1'}
  });
    let uri = `/login?username=${props.username}&password=${props.password}`;


    return function (dispatch) {
      return instanceLogin.get(uri).then(
        request => dispatch(userSuccess(request)),
        error => dispatch(userFailure(error))
      );
    };
}

function userFailure(error){
  return{
    type: FAIL_USER,
    payload: error
  };
}

function userSuccess(request){
  console.log('Check user request', request );
  return{
    type: CHECK_USER,
    payload: request
  };
}

export function fetchClimbers(){

    const uri = `/classes/_User`;
    const params = 'where={"$relatedTo":{"object":{"__type":"Pointer","className":"_Role","objectId":"I4W4T9nZEQ"},"key":"users"}}';
    const url = `${uri}?${params}`;
    //params.append('param1', 'where={"$relatedTo":{"object":{"__type":"Pointer","className":"_Role","objectId":"sV8xaPZLq3"},"key":"users"}}');
    const request = instance.get(url)

    return{
      type: FETCH_CLIMBERS,
      payload: request
    };

}
/*********************************************
UPDATE USER BOULDERS
**********************************************/

export function updateUserBoulders(props){

  console.log('Step 2: value', props);

  return {
    type: UPDATE_USER_BOULDERS,
    payload: props
  }
}

/*********************************************
FETCH MY BOULDERS
**********************************************/
export function fetchMyBoulders(props){

  const uri = `/classes/Climb`;
  const params = `where={"user":{"__type":"Pointer","className":"_User","objectId":"${props.objectId}"}}&keys=boulder`;
   //"where={\"user\":{\"__type\":\"Pointer\",\"className\":\"_User\",\"objectId\":\"Q3ligKp0Mm\"}}&keys=boulder" \
   //http://bigrocktestapp.herokuapp.com/parse/classes/Climb
  const url = `${uri}?${params}`;

  const request = instance.get(url)

  console.log('boulders',request);

  return {
    type: FETCH_MY_BOULDERS,
    payload: request
  }
}
