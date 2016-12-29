import React, { Component } from 'react';
import {Toolbar} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class SubHeader extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Toolbar />
      </MuiThemeProvider>
    );
  }
}
