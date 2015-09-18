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
    HomeAction.resizeHeader(true);
  }
  _handleWaypointLeave(){
    HomeAction.resizeHeader(false);
  }

  render() {
    return (
      <div className="homepage">
        <Waypoint onEnter={this._handleWaypointEnter} onLeave={this._handleWaypointLeave} threshold={0.1} />
        <div className="CarouselBoxOut">
          <div className="CarouselBoxIn">
            <Carousel bsSize="large"/>
          </div>
        </div>
         <div className="aboutSection">
            <div className="container ">
                    <div className="col-md-6 column aboutText">
                      <div className="aboutTitle">WHO WE ARE</div>
                      <p className="aboutP">As the official teacher resource for the State Administration of Foreign Expert Affairs (SAFEA) of the People’s  Republic of China, NAEC is committed to finding passionate, qualified teachers to fill the over 500 yearly teaching positions available in China. We are the only institution that welcomes new college graduates to this exciting cultural exchange opportunity. Teaching in China provides an amazing adventure for new teachers and those with teaching experience who are looking to share their knowledge and culture with students from a world away.</p>
                    </div>

                    <div className="col-md-6 column aboutImgs">
                      <div className="urgentcause-gallery  lightbox">
                        <div className="col-md-7"><a itemprop="url" href="http://placehold.it/1000x800" title=""><img itemprop="image" src="http://placehold.it/329x198" alt="" /></a></div>
                        <div className="col-md-5"><a itemprop="url" href="http://placehold.it/1000x800" title=""><img itemprop="image" src="http://placehold.it/239x202" alt="" /></a></div>
                        <div className="col-md-5"><a itemprop="url" href="http://placehold.it/1000x800" title=""><img itemprop="image" src="http://placehold.it/239x202" alt="" /></a></div>
                        <div className="col-md-7"><a itemprop="url" href="http://placehold.it/1000x800" title=""><img itemprop="image" src="http://placehold.it/329x198" alt="" /></a></div>
                      </div>
                    </div>
                </div>


        </div>






      </div>
    );
  }
}

export default Home;