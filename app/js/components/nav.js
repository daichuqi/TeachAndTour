'use strict';
import React from 'react';
import Router from 'react-router';

class LoginButton extends React.Component {
  constructor() {
    super();
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.state = {
      open:false
    }
  }
  componentDidMount() {
    // ModalStore.addChangeListener(this.close);
    // ModalStore.addOpenListener(this.open);
  }
  componentWillUnmount() {
    // ModalStore.removeChangeListener(this.close);
    // ModalStore.removeOpenListener(this.open);
  }
  open(){
    // this.setState({open:true})
  }
  close(){
    // this.setState({open:false})
  }
  render() {
    return (
      <div className="loginButton" onClick={this.open}>Login
        <LoginModal show={this.state.open}/>
      </div>
    );
  }
};




class Nav extends React.Component {
  render() {
    return (
      <div>
        <div className ="topbar">
          <nav>
          <Router.Link to="home"><img className="logo" src="../assets/logo.png"></img></Router.Link>
            <Router.Link to="home"><button className="navButton">home</button></Router.Link>
            <Router.Link to="maps"><button className="navButton">maps</button></Router.Link>
            <Router.Link to="news"><button className="navButton">news</button></Router.Link>
            <Router.Link to="join-us"><button className="navButton">join</button></Router.Link>
          </nav>
        </div>

      </div>
    );
  }
};

export default Nav;
