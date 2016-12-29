import React, { Component } from 'react';

import { Divider, List, ListItem } from 'material-ui';

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

export default class LatestProject extends Component {

  render () {
    const projects = this.props.repositories
      .filter(item => !item.fork)
      .map(item => {
        console.log(item);
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

    console.log(this.props.repositories);
    return (
      <MuiThemeProvider>

        <div className="latest">
          <Paper style={style} zDepth={4}>
            <p>My Github</p>
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
