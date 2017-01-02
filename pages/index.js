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
            {'name': 'description', 'content': 'Irek Róg\'s (@irekrog) website about new front end technologies.'},
            {'name': 'keywords', 'content': 'Front-End, front, end, HTML5, CSS, JavaScript, irekrog'}
          ]}
        />
        <PostContainer posts={this.props.route.pages}/>
      </div>
    );
  }
}
