import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class Mail extends Component {
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.closeDialog}
      />
    ];

    return (
      <div>
        <Dialog
          title="Don't hesitate to write to me :)"
          actions={actions}
          modal={false}
          open={this.props.openDialog}
          onRequestClose={this.props.closeDialog}
        >
          <div className="social-media mail">
            <a href="mailto:irekrog.pl@gmail.com" title="E-mail"><i
              className="fa fa-envelope-o fa-2x"/></a>
            <a href="https://www.linkedin.com/in/irekrog" target="_blank" title="LinkedIn"><i
              className="fa fa-linkedin-square fa-2x"/></a>
            <a href="https://twitter.com/irekrog" target="_blank" title="Twitter"><i
              className="fa fa-twitter fa-2x"/></a>
          </div>
        </Dialog>
      </div>
    );
  }
}
