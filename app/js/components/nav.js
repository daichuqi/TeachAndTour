'use strict';
import React from 'react';
import Router from 'react-router';
import LoginModal from './loginmodal';

import HomeStore from '../stores/homeStore';
import ModalStore from '../stores/modalStore';

class LoginButton extends React.Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.state = {
      open:false
    }
  }
  componentDidMount() {
    ModalStore.addChangeListener(this.close);
    // ModalStore.addOpenListener(this.open);
  }
  componentWillUnmount() {
    ModalStore.removeChangeListener(this.close);
    // ModalStore.removeOpenListener(this.open);
  }
  open(){
    this.setState({open:true})
  }
  close(){
    this.setState({open:false})
  }

  render() {
    return (
      <button className="loginButton" onClick={this.open}>Login
        <LoginModal show={this.state.open}/>
      </button>
    );
  }
};


class Nav extends React.Component {
  constructor() {
    super();
    this.changeHeaderState = this.changeHeaderState.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.state = {
      header:'bigheader'
    }
  }
  componentDidMount() {
    HomeStore.addChangeListener(this.changeHeaderState);
  }
  componentWillUnmount() {
    HomeStore.removeChangeListener(this.changeHeaderState);
  }
  changeHeaderState(){
    this.setState({header: HomeStore.getHeaderState()})
  }
  render() {
    return (
      <div>
        <div className ={this.state.header}>
          <nav>
          <Router.Link to="home"><img className="logo" src="../assets/logo.png"></img></Router.Link>
            <Router.Link to="home"><button className="navButton">home</button></Router.Link>
            <Router.Link to="maps"><button className="navButton">maps</button></Router.Link>
            <Router.Link to="news"><button className="navButton">news</button></Router.Link>
            <Router.Link to="join-us"><button className="navButton">join</button></Router.Link>
            <LoginButton />
          </nav>
        </div>

      </div>
    );
  }
};

export default Nav;
