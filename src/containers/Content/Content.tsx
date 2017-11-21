import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Content.css';

import Blog from '../../components/Blog/Blog';
import Post from '../../components/Post/Post';

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <Switch>
            <Route exact={true} path="/" component={Blog}/>
            <Route exact={true} path="/blog/" component={Blog}/>
            <Route exact={true} path="/blog/:post" component={Post}/>
        </Switch>
      </div>
    );
  }
}

export default Content;