import React, { Component } from 'react';

class About extends Component {
  render () {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }
}

export default About;

exports.data = {
  title: 'About',
  introduction: 'Word to the javascript yos',
  path: '/about/'
};
