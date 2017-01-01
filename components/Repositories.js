import React, {Component} from 'react';

import {Divider, List, ListItem} from 'material-ui';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Paper from 'material-ui/Paper';

const style = {
  height: 'auto',
  width: '100%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  marginLeft: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.7)'
};

export default class Repositories extends Component {

  render() {
    const projects = this.props.repositories
      .filter(item => !item.fork)
      .map(item => {
        return (
          <ListItem
            key={item.id}
            innerDivStyle={{
              padding: 0
            }}
          >
            <a
              href={item.html_url}
              target="_blank"
            >
              {item.name}
            </a>
          </ListItem>
        );
      });

    return (
      <MuiThemeProvider>
        <div className="repositories">
          <Paper style={style} zDepth={4}>
            <h1>Projects</h1>
            <Divider/>
            <List>
              {projects}
            </List>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}
