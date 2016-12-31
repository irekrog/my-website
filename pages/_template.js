import React, {Component} from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';

import axios from 'axios';

export default class Template extends Component {

  constructor(props) {
    super(props);

    this.state = {
      repos: []
    };

    // this.getRepositories();
  }

  getRepositories() {
    let self = this;

    axios.get('https://api.github.com/users/irekrog/repos')
      .then((response) => {
        self.setState({
          repos: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const title = this.props.children.props.route.page.data.title;
    const chooseTitle = title || 'Home';
    return (
      <div className="main-container"
      >
        <Header title={chooseTitle}/>
        <div>
          {/*<LatestProject repositories={this.state.repos}/>*/}
        </div>
        <div className="subheader-container">
          <SubHeader/>
        </div>
        <div className="row">
          <section className="main-section">
            {this.props.children}
          </section>
        </div>

      </div>
    );
  }
}
