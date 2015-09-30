'use strict';
import React from 'react';
import Carousel from './carousel';
import Waypoint from 'react-waypoint';

import HomeAction from '../actions/homeActionCreators'
import HomeStore from '../stores/homeStore';
import UserStore from '../stores/userProfileStore';


var img =
['../assets/images/bg0.jpg',
'../assets/images/bg6.jpg',
'../assets/images/bg7.jpg',
'../assets/images/bg8.jpg',
];

var divStyle = {
  backgroundImage: 'url(' + img[0] + ')',
};

class Home extends React.Component {
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
      <div className="homepage">
        <Waypoint onEnter={this._handleWaypointEnter} onLeave={this._handleWaypointLeave} threshold={0.3} />

        <div id='homeleft' style={divStyle}>
        </div>

        <div id='homeright'>
          <div id='topBlock'>
            <div id='topLeft'></div>
            <div id='topRight'></div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;