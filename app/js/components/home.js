'use strict';
import React from 'react';
import Carousel from './carousel';
import Waypoint from 'react-waypoint';

import HomeAction from '../actions/homeActionCreators'
import HomeStore from '../stores/homeStore';

class Home extends React.Component {
  constructor() {
    super();
    this._handleWaypointEnter = this._handleWaypointEnter.bind(this);
    this._handleWaypointLeave = this._handleWaypointLeave.bind(this);
  }

  _handleWaypointEnter(){
    HomeAction.resizeHeader('bigheader');
  }

  _handleWaypointLeave(){
    HomeAction.resizeHeader('smallheader');
  }


  render() {
    return (
      <div className="homepage">
        <div className="CarouselBoxOut">
        <div className="CarouselBoxIn">
          <Waypoint onEnter={this._handleWaypointEnter} onLeave={this._handleWaypointLeave} threshold={0.1} />
          <Carousel bsSize="large"/>
        </div>
        </div>
      </div>
    );
  }
}

export default Home;

