import React from 'react'
import ava01 from '../../../../images/ava-1.jpg'
import ava02 from '../../../../images/ava-2.jpg'
import ava03 from '../../../../images/ava-3.jpg'
import '../../../../../styles/slider.css'
import Slider from "react-slick";

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        autoplay:true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed:3000,
        swipeToSlide:1
      };
  return (
    <div>
      <Slider {...settings}>
      <div>
            <p  className='review_text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum error, inventore facilis debitis maiores recusandae voluptates esse veniam amet reiciendis?</p>
            <div  className=' slider_content d-flex align-items-center gap-3'>
                <img src={ava01} alt="avatar"  className='rounded' />
                <h6>John Doe</h6>
            </div>
          </div>
          <div>
            <p  className='review_text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum error, inventore facilis debitis maiores recusandae voluptates esse veniam amet reiciendis?</p>
            <div  className=' slider_content d-flex align-items-center gap-3'>
                <img src={ava02} alt="avatar"  className='rounded' />
                <h6> MichleMarks  </h6>
            </div>
          </div>
          <div>
            <p className='review_text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum error, inventore facilis debitis maiores recusandae voluptates esse veniam amet reiciendis?</p>
            <div  className=' slider_content d-flex align-items-center gap-3'>
                <img src={ava03} alt="avatar"  className='rounded' />
                <h6>Steven Crock </h6>
            </div>
          </div>
      </Slider>
    </div>
  )
}

export default TestimonialSlider
