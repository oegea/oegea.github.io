import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Content.css';

import Blog from '../../components/Blog/Blog';

interface PostParams {
    match: {
        params: {
            post: string
        }
    };
}
class Post extends React.Component<PostParams> {
    render() {
        return(
            <div>
                <p>{this.props.match.params.post}</p>
            </div>
        );
    }
}
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