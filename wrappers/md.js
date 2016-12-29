import React from 'react';
import moment from 'moment';
import Helmet from 'react-helmet';
import ReadNext from '../components/ReadNext';
import { config } from 'config';

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props;
    const post = route.page.data;

    return (
      <div className="markdown">
        <Helmet
          title={`${post.title} | ${config.blogTitle}`}
        />
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        <em
          style={{
            display: 'block'
          }}
        >
          Posted {moment(post.date).format('MMMM D, YYYY')}
        </em>
        <hr
          style={{
          }}
        />
        <ReadNext post={post} pages={route.pages} />
      </div>
    );
  }
}

export default MarkdownWrapper;
