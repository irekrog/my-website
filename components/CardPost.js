import React, {Component} from 'react';
import {Card, CardHeader, CardText, CardMedia, FlatButton, Divider} from 'material-ui';
import {prefixLink} from 'gatsby-helpers';
import russia from '../images/russia.jpg';
import { Link } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appBarTitle: ''
    };

    this.handler = this.handler.bind(this);
  }

  handler() {
    this.setState({
      appBarTitle: 'text'
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Card>
            <CardMedia>
              <img src={prefixLink(russia)} alt="Post image"/>
            </CardMedia>
            <CardHeader title={this.props.pageData.data.title}/>
            <CardText>
              {this.props.pageData.data.introduction}
            </CardText>
            <Divider/>
            <FlatButton
              containerElement={<Link style={{boxShadow: 'none'}} to={prefixLink(this.props.pageData.path)} />}
              label="Read more"
              primary={true}
              onTouchTap={this.handler}
            />
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}
