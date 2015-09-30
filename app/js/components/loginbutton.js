'use strict';
import React from 'react';
import Router from 'react-router';
import LoginModal from './loginmodal';

import HomeStore from '../stores/homeStore';
import UserProfile from '../stores/userProfileStore';
import ModalStore from '../stores/modalStore';
import UserActions from '../actions/UserActionCreators';

class LoginButton extends React.Component {
  constructor() {
    super();
    this.changeLoginStatus = this.changeLoginStatus.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.changeHeaderState = this.changeHeaderState.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.state = {
      open:false,
      header:false,
      login:'login'
    }
  }
  componentDidMount() {
    UserProfile.addChangeListener(this.changeLoginStatus);
    ModalStore.addChangeListener(this.close);
    HomeStore.addChangeListener(this.changeHeaderState);
    if(UserProfile.isLoggedIn()){
      this.setState({login:' logout'})
    }
  }
  componentWillUnmount() {
    ModalStore.removeChangeListener(this.close);
    HomeStore.removeChangeListener(this.changeHeaderState);
    UserProfile.removeChangeListener(this.changeLoginStatus);
  }
  changeHeaderState(){
    this.setState({header: HomeStore.getHeaderState()});
  }
  changeLoginStatus(){
    if(UserProfile.isLoggedIn()){
      this.setState({login:' logout'});
    }else{
      this.setState({login:' login'})
    }
  }
  open(){
    if(UserProfile.isLoggedIn()){
      UserActions.logoutUser();
      this.context.router.transitionTo('home');
    }else{
      this.setState({open:true});
    }
  }
  close(){
    this.setState({open:false});
  }

  render() {
    return (
      <button className='bigheaderlogin loginbutton' onClick={this.open}>
        <i className="fa fa-power-off" ></i>
        <span> {this.state.login}</span>
        <LoginModal className="modal" show={this.state.open}/>
      </button>
    );
  }
};

LoginButton.contextTypes = {
  router: React.PropTypes.func.isRequired
};


export default LoginButton;
