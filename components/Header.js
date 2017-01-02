import React, {Component} from 'react';
import {AppBar, Drawer, MenuItem, Card, CardMedia, CardText, Avatar} from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import russia from '../images/russia.jpg';
import profile from '../images/profile.jpg';
import {Link} from 'react-router';
import IconButton from 'material-ui/IconButton';
import Message from 'material-ui/svg-icons/communication/mail-outline';
import Mail from './Mail';

import '../css/main.sass';
import 'font-awesome/css/font-awesome.css';

import classnames from 'classnames';

injectTapEventPlugin();

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mailOpen: false
    };

    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.openMail = this.openMail.bind(this);
    this.closeMail = this.closeMail.bind(this);
  }

  openDrawer() {
    this.setState({
      open: !this.state.open
    });
  }

  closeDrawer() {
    this.setState({
      open: false
    });
  }

  openMail() {
    this.setState({
      mailOpen: !this.state.mailOpen
    });
  }

  closeMail() {
    this.setState({
      mailOpen: false
    });
  }

  render() {
    const drawerClass = classnames('left-drawer', {
      'closed': !this.state.open
    });

    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title={this.props.title}
            onLeftIconButtonTouchTap={this.openDrawer}
            style={{
              position: 'fixed'
            }}
            iconElementRight={<IconButton><Message /></IconButton>}
            onRightIconButtonTouchTap={this.openMail}
          />
          <Mail
            openDialog={this.state.mailOpen}
            closeDialog={this.closeMail}
          />
          <Drawer
            containerClassName={drawerClass}
            open={this.state.open}
            docked={false}
            width={280}
            onRequestChange={(open) => this.setState({open})}>
            <Card>
              <CardMedia
                overlay={
                  <div className="background-info">
                    <Avatar
                      src={profile}
                      size={40}
                      alt="Profile image"
                      className="profile-image"
                    />
                    <CardText
                      style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: 24
                      }}
                    >
                      Hi, I'm Irek
                    </CardText>
                    <CardText
                      style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: 16,
                        textTransform: 'uppercase',
                        paddingTop: 0
                      }}
                    >
                      Front-End Developer
                    </CardText>
                    <div className="social-media">
                      <a href="https://twitter.com/irekrog" target="_blank" title="Twitter"><i
                        className="fa fa-twitter fa-2x"/></a>
                      <a href="https://github.com/irekrog" target="_blank" title="Github"><i
                        className="fa fa-github fa-2x"/></a>
                      <a href="https://www.linkedin.com/in/irekrog" target="_blank" title="LinkedIn"><i
                        className="fa fa-linkedin-square fa-2x"/></a>
                      <a href="http://www.filmweb.pl/user/warzachew" target="_blank" title="Filmweb"><i
                        className="fa fa-film fa-2x"/></a>
                    </div>
                  </div>
                }
                mediaStyle={{
                  opacity: '0.8'
                }}
                overlayContentStyle={{
                  background: 'transparent',
                  bottom: 'auto',
                  top: 0,
                  textAlign: 'center'
                }}
              >
                <img src={russia} alt="Background drawer image"/>
              </CardMedia>
            </Card>
            <MenuItem
              onTouchTap={this.closeDrawer}
              containerElement={<Link style={{boxShadow: 'none'}} to={'/'}/>}
            >
              Home
            </MenuItem>
            <MenuItem
              onTouchTap={this.closeDrawer}
              containerElement={<Link style={{boxShadow: 'none'}} to={'/projects/'}/>}
            >
              Projects
            </MenuItem>
            <MenuItem
              onTouchTap={this.closeDrawer}
            >
              About
            </MenuItem>
          </Drawer>

        </div>
      </MuiThemeProvider>
    );
  }
}
