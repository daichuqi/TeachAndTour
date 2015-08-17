'use strict';
import React from 'react';
import Carousel from './carousel';



class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="homepage">
        <div className="CarouselBoxOut">
        <div className="CarouselBoxIn">
          <Carousel bsSize="large"/>
        </div>
        </div>
      </div>
    );
  }
}

export default Home;

