'use strict';
import React from 'react';
import {Carousel,CarouselItem} from 'react-bootstrap';


var img = ['../assets/images/bg1.jpg']

const ControlledCarousel = React.createClass({
  getInitialState() {
    return {
      index: 0,
      direction: null
    };
  },

  handleSelect(selectedIndex, selectedDirection) {
    this.setState({
      index: selectedIndex,
      direction: selectedDirection
    });
  },

  render() {
    return (
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
        <CarouselItem>
          <img width={900} height={500} alt='900x500' src={img[0]}/>
        </CarouselItem>
      </Carousel>
    );
  }
});



export default ControlledCarousel;
