import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import Repositories from '../../components/Repositories';

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
        <Repositories repositories={this.state.repos}/>
      );
    }
  }
}

exports.data = {
  title: 'Projects',
  path: '/projects/'
};
