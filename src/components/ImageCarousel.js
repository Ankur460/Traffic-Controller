import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = () => {
  return (
    <div className="w-full mx-auto">

      <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9M1lVnd9SA7F0bT10zs_OMO3yX37pzT0IHA&usqp=CAU" className='brightness-50 z-10' alt="Image 1" />
        </div>
        <div>
          <img src="image2.jpg" alt="Image 2" className='brightness-50 z-10' />
        </div>
        <div>
          <img src="image3.jpg" alt="Image 3" className='brightness-50 z-10'/>
        </div>
        {/* Add more images as needed */}
        
      </Carousel>
      <div className="grid grid-cols-3 gap-4 p-4 border border-gray-300 rounded-lg shadow-md bg-gray-100 ">
      <input type="text" placeholder="Search Menu" class="w-full"/>
    </div>
    </div>
  );
};

export default ImageCarousel;
