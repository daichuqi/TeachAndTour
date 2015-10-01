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
      <div className='page'>
        <Waypoint onEnter={this._handleWaypointEnter} onLeave={this._handleWaypointLeave} threshold={0.3} />
        <div className='tempBigTitle'>
          Who we are
        </div>
      </div>
    )
  }
}

export default Whoweare;
