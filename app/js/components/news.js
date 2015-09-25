'use strict';
import React from 'react';
import Waypoint from 'react-waypoint';
import HomeAction from '../actions/homeActionCreators'
import UserProfile from '../stores/userProfileStore';

class News extends React.Component {
  constructor() {
    super();
    this._handleWaypointEnter = this._handleWaypointEnter.bind(this);
    this._handleWaypointLeave = this._handleWaypointLeave.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      username:'null'
    }
  }
  componentDidMount(){
    this.setState({username: UserProfile.getCookieName()});
  }
  _handleWaypointEnter(){
    HomeAction.resizeHeader(true);
  }
  _handleWaypointLeave(){
    HomeAction.resizeHeader(false);
  }
  render() {
    return (
      <div className='page'>
        <Waypoint onEnter={this._handleWaypointEnter} onLeave={this._handleWaypointLeave} threshold={0.3} />
        <div className='tempBigTitle'>
          Hello {this.state.username}
        </div>
      </div>
    )
  }
}

export default News;