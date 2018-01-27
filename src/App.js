import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar className="no-border sidenav" fluid inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a>Welcome</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <Button bsStyle="success"
                className="btn-margin"
                onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
              {
                  !isAuthenticated() && (
                      <Button bsStyle="warning"
                          className="btn-margin"
                          onClick={this.login.bind(this)}
                      >
                        Login
                      </Button>
                  )
              }
              {
                  isAuthenticated() && (
                      <Button bsStyle="info"
                          className="btn-margin"
                          onClick={this.goTo.bind(this, 'profile')}
                      >
                        Profile
                      </Button>
                  )
              }
              {
                  isAuthenticated() && (
                      <Button bsStyle="primary"
                          className="btn-margin"
                          onClick={this.goTo.bind(this, 'chat')}
                      >
                        Chat
                      </Button>
                  )
              }
              {
                  isAuthenticated() && (
                      <Button bsStyle="warning"
                          className="btn-margin"
                          onClick={this.logout.bind(this)}
                      >
                        Log Out
                      </Button>
                  )
              }
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default App;
