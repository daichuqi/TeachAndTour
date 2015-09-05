'use strict';
import React from 'react';
import Carousel from './carousel';
import Waypoint from 'react-waypoint';

class Home extends React.Component {
  constructor() {
    super();
    this._handleWaypointEnter = this._handleWaypointEnter.bind(this);
    this._handleWaypointLeave = this._handleWaypointLeave.bind(this);
  }

  _handleWaypointEnter(){
    console.log('big header');
  }

  _handleWaypointLeave(){
    console.log('small header');
  }


  render() {
    return (
      <div className="homepage">
        <div className="CarouselBoxOut">
        <div className="CarouselBoxIn">
          <Waypoint onEnter={this._handleWaypointEnter} onLeave={this._handleWaypointLeave} threshold={0.3} />
          <Carousel bsSize="large"/>
        </div>
        </div>
      </div>
    );
  }
}

export default Home;

