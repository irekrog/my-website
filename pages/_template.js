import React, {Component} from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';

export default class Template extends Component {
  render() {
    const title = this.props.children.props.route.page.data.title;
    const chooseTitle = title || 'Home';
    return (
      <div className="main-container"
      >
        <Header title={chooseTitle}/>
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
