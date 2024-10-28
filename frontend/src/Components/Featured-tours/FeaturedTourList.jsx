import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TourCard from '../../Shared/TourCard'
import tourData from '../../assets/data/tours'
import {Col} from 'reactstrap'


const FeaturedTourList = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return(
    <>
      <Slider {...settings}>
      {tourData?.map(tour=>(
        <Col lg='3' className="mb-4" key={tour.id}>
            <TourCard tour={tour} />
        </Col>
      ))}
      </Slider>
    </>
  )
}

export default FeaturedTourList
