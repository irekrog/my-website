import React from 'react';
import Helmet from 'react-helmet';
import {config} from 'config';
import PostContainer from 'components/PostContainer';

export default class BlogIndex extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title={config.blogTitle}
          meta={[
            {'name': 'description', 'content': 'Blog2'},
            {'name': 'keywords', 'content': 'blog, articles'},
            {'property2': 'test'}
          ]}
        />
        <PostContainer posts={this.props.route.pages}/>
      </div>
    );
  }
}
