'use strict';
import React from 'react';
import Waypoint from 'react-waypoint';
import HomeAction from '../actions/homeActionCreators'

var whoStyle = {
    'background': 'url("../assets/images/bg1.jpg") no-repeat center center',
    'background-size': 'cover;'
};


class Whoweare extends React.Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
    this._handleWaypointEnter = this._handleWaypointEnter.bind(this);
    this._handleWaypointLeave = this._handleWaypointLeave.bind(this);
  }
  componentDidMount(){
    HomeAction.SetNavActive('who');
  }
  _handleWaypointEnter(){
    HomeAction.resizeHeader(true);
  }
  _handleWaypointLeave(){
    HomeAction.resizeHeader(false);
  }
  render() {
    return (
      <div className='page section'>
        <Waypoint onEnter={this._handleWaypointEnter} onLeave={this._handleWaypointLeave} threshold={0.3} />
        <div className='sectionBanner' style={whoStyle}>
          <div className='sectionBannerTitle'>Who We Are</div>
          <div className='sectionBannerSubtitle'>Teach & Tour is a platform for foreign teachers</div>
        </div>
      </div>
    )
  }
}

export default Whoweare;
