'use strict';
import React from 'react';
import {Carousel,CarouselItem} from 'react-bootstrap';


var img =
['../assets/images/bg5.jpg',
'../assets/images/bg6.jpg',
'../assets/images/bg7.jpg',
'../assets/images/bg8.jpg',
];

class ControlledCarousel extends React.Component{
  constructor(){
    super();
  }

  render() {
    return (
      <Carousel>
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

        <CarouselItem>
            <img className="bannerImg" src={img[1]}/>
            <div className='carousel-caption'>
              <div className="carousel-title">Explore China by teaching English</div>
              <span className="imageLocation">
                <i className="fa fa-map-marker"></i> Shanghai China
              </span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </CarouselItem>

        <CarouselItem>
            <img className="bannerImg" src={img[2]}/>
            <div className='carousel-caption'>
              <div className="carousel-title">Explore China by teaching English</div>
              <span className="imageLocation">
                <i className="fa fa-map-marker"></i> Shanghai China
              </span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </CarouselItem>

        <CarouselItem>
            <img className="bannerImg" src={img[3]}/>
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
