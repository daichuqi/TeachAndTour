'use strict';
import React from 'react';
import Waypoint from 'react-waypoint';
import HomeAction from '../actions/homeActionCreators'

var whatStyle = {
    'background': 'url("../assets/images/bg2.jpg") no-repeat center center',
    'background-size': 'cover;'
};

class Whatwedo extends React.Component {
  constructor() {
    super();
    this._handleWaypointEnter = this._handleWaypointEnter.bind(this);
    this._handleWaypointLeave = this._handleWaypointLeave.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount(){
    HomeAction.SetNavActive('what');
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
        <div className='sectionBanner' style={whatStyle}>
          <div className='sectionBannerTitle'>What We Do</div>
          <div className='sectionBannerSubtitle'>What We Do What We Do What We Do</div>
        </div>
      </div>
    )
  }
}

export default Whatwedo;
