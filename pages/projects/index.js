import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import Repositories from '../../components/Repositories';
import Helmet from 'react-helmet';
import {config} from 'config';

import axios from 'axios';

export default class Projects extends Component {

  constructor(props) {
    super(props);

    this.state = {
      repos: [],
      loading: true
    };

    this.getRepositories();
  }

  getRepositories() {
    let self = this;

    axios.get('https://api.github.com/users/irekrog/repos')
      .then((response) => {
        self.setState({
          repos: response.data,
          loading: false
        });
      })
      .catch((error) => {
        console.log(error);
        self.setState({
          loading: true
        });
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <MuiThemeProvider>
          <div style={{
            textAlign: 'center'
          }}>
            <CircularProgress />
          </div>
        </MuiThemeProvider>
      );
    } else {
      return (
        <div>
          <Helmet
            title={`Projects | ${config.blogTitle}`}
            meta={[
              {'name': 'description', 'content': 'Irek Róg (@irekrog) projects (repositories) from GitHub'},
              {'name': 'keywords', 'content': 'Front-End, front, end, HTML5, CSS, JavaScript, irekrog'}
            ]}
          />
          <Repositories repositories={this.state.repos}/>
        </div>
      );
    }
  }
}

exports.data = {
  title: 'Projects',
  path: '/projects/'
};
