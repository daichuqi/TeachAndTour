'use strict';
import React from 'react';
import Waypoint from 'react-waypoint';
import HomeAction from '../actions/homeActionCreators'

class Whoweare extends React.Component {
  constructor() {
    super();
    this._handleWaypointEnter = this._handleWaypointEnter.bind(this);
    this._handleWaypointLeave = this._handleWaypointLeave.bind(this);
  }
  _handleWaypointEnter(){
    HomeAction.resizeHeader(true);
  }
  _handleWaypointLeave(){
    HomeAction.resizeHeader(false);
  }
  render() {
    return (
      <div className='page whoweare'>
        <Waypoint onEnter={this._handleWaypointEnter} onLeave={this._handleWaypointLeave} threshold={0.3} />
        <div id='whoweareBanner'>
          <div id='whoweareBannerTitle'>Who We Are</div>
          <div id='whoweareBannerSubtitle'>Teach & Tour is a platform for foreign teachers</div>
        </div>
      </div>
    )
  }
}

export default Whoweare;
