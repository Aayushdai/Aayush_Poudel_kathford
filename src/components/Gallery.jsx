import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Gallery.css';

const Gallery = () => {
  return (
    <>
      <div className="bodi">
        {/* First Carousel */}
        <Carousel autoPlay interval={2000} infiniteLoop>
          <div>
            <img src="https://www.reuters.com/resizer/v2/NMX4XOBT4FMDNIMKS7C24IOGJA.jpg?auth=0ae56fe24f5c3fee46932feb34f35ac42b3bf4ece8d93c92da40f5270e613991&width=1080&quality=80" alt="Slide 1" />
          </div>
          <div>
            <img src="./b5.png" alt="Slide 2" />
          </div>
          <div>
            <img src="./sanke.png" alt="Slide 3" />
          </div>
          <div>
            <img src="./fish.png" alt="Slide 4" />
          </div>
          <div>
            <img src="./vird.png" alt="Slide 5" />
          </div>
        </Carousel>

        {/* Second Carousel */}
        <Carousel autoPlay interval={2000} infiniteLoop>
          <div>
            <img src="https://www.reuters.com/resizer/v2/NMX4XOBT4FMDNIMKS7C24IOGJA.jpg?auth=0ae56fe24f5c3fee46932feb34f35ac42b3bf4ece8d93c92da40f5270e613991&width=1080&quality=80" alt="Slide 1" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://image.petmd.com/files/styles/978x550/public/2024-07/greentreepython_0.jpg" alt="Slide 2" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="./1m.png" alt="Slide 3" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="./fox.png" alt="Slide 4" />
          </div>
          <div>
            <img src="./f10.png" alt="Slide 5" />
          </div>
        </Carousel>

        {/* Third Carousel */}
        <Carousel autoPlay interval={2000} infiniteLoop>
          <div>
            <img src="https://www.reuters.com/resizer/v2/NMX4XOBT4FMDNIMKS7C24IOGJA.jpg?auth=0ae56fe24f5c3fee46932feb34f35ac42b3bf4ece8d93c92da40f5270e613991&width=1080&quality=80" alt="Slide 1" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="./b2.png" alt="Slide 2" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="./9m" alt="Slide 3" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="./b10.png" alt="Slide 4" />
          </div>
          <div>
            <img src="./dog.png" alt="Slide 5" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Gallery;
