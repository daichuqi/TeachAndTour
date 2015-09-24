'use strict';
import React from 'react';
import Router from 'react-router';
import LoginModal from './loginmodal';

import HomeStore from '../stores/homeStore';
import ModalStore from '../stores/modalStore';

class LoginButton extends React.Component {
  constructor() {
    super();
    this.changeHeaderState = this.changeHeaderState.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.state = {
      open:false,
      header:false
    }
  }
  componentDidMount() {
    ModalStore.addChangeListener(this.close);
    HomeStore.addChangeListener(this.changeHeaderState);
    // ModalStore.addOpenListener(this.open);
  }
  componentWillUnmount() {
    ModalStore.removeChangeListener(this.close);
    HomeStore.removeChangeListener(this.changeHeaderState);
    // ModalStore.removeOpenListener(this.open);
  }
  changeHeaderState(){
    this.setState({header: HomeStore.getHeaderState()});
  }
  open(){
    this.setState({open:true});
  }
  close(){
    this.setState({open:false});
  }

  render() {
    return (
      <button className='bigheaderlogin loginbutton' onClick={this.open}>

        <i className="fa fa-power-off" ></i>
        <span> Login</span>

        <LoginModal className="modal" show={this.state.open}/>
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
      bigheader:true,
      header:'hideSmallHeader'
    }
  }
  componentDidMount() {
    HomeStore.addChangeListener(this.changeHeaderState);
  }
  componentWillUnmount() {
    HomeStore.removeChangeListener(this.changeHeaderState);
  }
  changeHeaderState(){
    this.setState({header: HomeStore.getHeaderState()});
  }
  render() {
    return (
      <div>
        <div className ='bigheader' >
        <div className ='contactHeader'>
          <div className='contactHeaderContainer'>
            <span className='fa fa-home'> 425 Street Name, Washington DC</span>
            <span className='fa fa-phone'> (765)432-109</span>
          </div>
        </div>
          <div>
            <Router.Link to="home" className="navLogo"><img className="logo" src="../assets/logo2.png"></img></Router.Link>
            <div className="navButtonGroup">
              <Router.Link to="home"><button className="navButton2">home</button></Router.Link>
              <Router.Link to="maps"><button className="navButton2">maps</button></Router.Link>
              <Router.Link to="news"><button className="navButton2">news</button></Router.Link>
              <Router.Link to="join-us"><button className="navButton2">join</button></Router.Link>
            </div>
            <LoginButton className="loginButton"/>
          </div>
        </div>

        <div className={this.state.header ? 'hideSmallHeader':'displaySmallHeader'}>
          <div className="navButtonGroup2">
              <Router.Link to="home"><button className="navButton">home</button></Router.Link>
              <Router.Link to="maps"><button className="navButton">maps</button></Router.Link>
              <Router.Link to="news"><button className="navButton">news</button></Router.Link>
              <Router.Link to="join-us"><button className="navButton">join</button></Router.Link>
          </div>
        </div>

      </div>
    );
  }
};

export default Nav;
