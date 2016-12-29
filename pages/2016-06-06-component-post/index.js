import React, { Component } from 'react';

class Post extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.route.page.data.title}</h1>
        <p>This is fourth post on this website, but this is React component post :)</p>
      </div>
    );
  }
}

export default Post;

exports.data = {
  title: 'A post as React component!',
  date: '2016-06-06T13:40:32.169Z',
  introduction: 'React component post',
  path: '/component-post/'
};
