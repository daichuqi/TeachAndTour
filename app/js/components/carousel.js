'use strict';
import React from 'react';
import {Carousel,CarouselItem} from 'react-bootstrap';


var img = ['../assets/images/bg2.jpeg'];

class ControlledCarousel extends React.Component{
  constructor(){
    super();
    this.state = {
      index: 0,
      direction: null
    }
  }

  handleSelect(selectedIndex, selectedDirection){
    this.setState({
      index: selectedIndex,
      direction: selectedDirection
    })
  }

  render() {
    return (
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
        <CarouselItem>
            <img className="bannerImg" src={img[0]}/>
            <div className='carousel-caption'>
              <div className="carousel-title">Explore China by teaching English</div>
              <span className="imageLocation">
                <i className="fa fa-map-marker"></i> Shanghai China
              </span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </CarouselItem>
      </Carousel>
    );
  }
}



export default ControlledCarousel;
