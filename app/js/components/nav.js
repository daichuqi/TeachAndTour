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
            <span className='fa fa-phone'> (765) 432-109</span>
          </div>
        </div>
          <div>
            <Router.Link to="home" className="navLogo"><img className="logo" src="../assets/logo2.png"></img></Router.Link>
            <LoginButton className="loginButton"/>
            <div className="navButtonGroup">
              <Router.Link to="home"><button className="navButton2 navButton4 fa fa-home"></button></Router.Link>
              <Router.Link to="home"><button className="navButton2">home</button></Router.Link>
              <Router.Link to="maps"><button className="navButton2">maps</button></Router.Link>
              <Router.Link to="news"><button className="navButton2">news</button></Router.Link>
              <Router.Link to="join-us"><button className="navButton2 navButton3">join</button></Router.Link>
            </div>
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
