import React, {Component} from 'react';
import CardPost from './CardPost';
import sortBy from 'lodash/sortBy';
import access from 'safe-access';
import include from 'underscore.string/include';

export default class PostContainer extends Component {
  render() {
    const pageLinks = [];
    const sortedPages = sortBy(this.props.posts, (page) =>
      access(page, 'data.date')
    ).reverse();
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && !include(page.path, '/404') || access(page, 'data.date')) {
        pageLinks.push(
          <li key={page.path}>
            <CardPost pageData={page}/>
          </li>
        );
      }
    });
    return (
      <ul className="content">
        {pageLinks}
      </ul>
    );
  }
}
