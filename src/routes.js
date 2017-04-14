import React from 'react';
import {Route, IndexRoute} from 'react-router';
import PostsIndex from './components/posts_index';
import Competitors from './components/competitors';
import CreateBoulder from './components/create_boulder';
import Login from './components/login';
import App from './components/app';


export default(

<Route path="/" component={App}>//routes / to the App compontent
  <IndexRoute component={PostsIndex} />
  <Route path="/competitors" name="competitors" component={Competitors} />
  <Route path="/login" component={Login} />
  <Route path="/create_boulder" component={CreateBoulder} />
</Route>

)

// this.props.params.id
