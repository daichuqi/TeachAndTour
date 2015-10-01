'use strict';
import React from 'react';
import Router from 'react-router';
import LoginModal from './loginmodal';
import LoginButton from './loginbutton';

import HomeStore from '../stores/homeStore';
import UserProfile from '../stores/userProfileStore';
import ModalStore from '../stores/modalStore';
import UserActions from '../actions/UserActionCreators';


class Nav extends React.Component {
  constructor() {
    super();
    this.changeNavState = this.changeNavState.bind(this);
    this.changeHeaderState = this.changeHeaderState.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.state = {
      bigheader:true,
      header:'hideSmallHeader',
      activeNav:null
    }
  }
  componentDidMount() {
    HomeStore.addChangeListener(this.changeHeaderState);
    HomeStore.addNavActiveListener(this.changeNavState);
  }
  componentWillUnmount() {
    HomeStore.removeChangeListener(this.changeHeaderState);
    HomeStore.removeNavActiveListener(this.changeNavState);
  }
  changeHeaderState(){
    this.setState({header: HomeStore.getHeaderState()});
  }
  changeNavState(){
    this.setState({activeNav: HomeStore.getNavState()});
  }
  render() {
    return (
      <div>
        <div className ='bigheader' >
        <div className ='contactHeader'>
          <div className='contactHeaderContainer'>
            <span className='fa fa-home'> 425 Street Name, Washington DC</span>
            <span className='fa fa-phone'> (765) 432-109</span>
          </div>
        </div>
          <div>
            <Router.Link to="home" className="navLogo"><img className="logo" src="../assets/logo2.png"></img></Router.Link>
            <LoginButton className="loginButton"/>
            <div className="navButtonGroup">
              <Router.Link to="home"><button className="navButton2 navButton4 fa fa-home"></button></Router.Link>
              <Router.Link to="who"><button className={this.state.activeNav === 'who' ? 'navButton2 activeNav' : 'navButton2'}>WHO WE ARE</button></Router.Link>
              <Router.Link to="what"><button className={this.state.activeNav === 'what' ? 'navButton2 activeNav' : 'navButton2'}>WHAT WE DO</button></Router.Link>
              <Router.Link to="join-us"><button className={this.state.activeNav === 'join' ? 'navButton2 activeNav' : 'navButton2'}>JOIN US</button></Router.Link>
              <Router.Link to="news"><button className={this.state.activeNav === 'contact' ? 'navButton2 navButton3 activeNav' : 'navButton2 navButton3'}>CONTACT US</button></Router.Link>
            </div>
          </div>
        </div>

        <div className={this.state.header ? 'hideSmallHeader':'displaySmallHeader'}>
          <div className="navButtonGroup2">
              <Router.Link to="home"><button className="navButton">home</button></Router.Link>
              <Router.Link to="who"><button className="navButton">WHO WE ARE</button></Router.Link>
              <Router.Link to="what"><button className="navButton">WHAT WE DO</button></Router.Link>
              <Router.Link to="join-us"><button className="navButton">JOIN US</button></Router.Link>
              <Router.Link to="news"><button className="navButton">CONTACT US</button></Router.Link>
          </div>
        </div>

      </div>
    );
  }
};

export default Nav;
