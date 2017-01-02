import React, {Component} from 'react';

import {Divider, List, ListItem} from 'material-ui';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Paper from 'material-ui/Paper';

const style = {
  height: 'auto',
  width: '100%',
  marginTop: 20,
  marginRight: 0,
  marginBottom: 20,
  marginLeft: 0,
  textAlign: 'center',
  display: 'inline-block',
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
            <h2>Projects</h2>
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
