import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    componentWillMount() {
        const { isAuthenticated, getProfile } = this.props.auth;

        if (isAuthenticated() ) {
            getProfile();
        }
    }
    login() {
        this.props.auth.login();
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div className="container">
              <div className="jumbotron">

                <h1>Welcome to your private chat!</h1>
                <h3>We promise we won't store your conversations</h3>
                  {
                      !isAuthenticated() && (
                          <div>
                            <p>Please sign in/sign up with Auth0 before you can access to your private chat.</p>
                            <p><a className="btn btn-primary btn-lg" onClick={this.login.bind(this)}>Login</a></p>
                          </div>
                      )
                  }
                  {
                      isAuthenticated() && (
                          <div>
                            <p>It's chatting time!</p>
                            <Link className="btn btn-primary btn-lg" to="chat">Chat</Link>
                          </div>
                      )
                  }
              
                {this.props.children}
               </div>
            </div>
        );

    }
}

export default Home;
