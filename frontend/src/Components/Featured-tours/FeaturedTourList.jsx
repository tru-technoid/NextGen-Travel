import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TourCard from "../../Shared/TourCard";
import { Col } from "reactstrap";
import useFetch from "../../Hooks/useFetch";
import { BASE_URL } from "../../Utils/config";

const FeaturedTourList = () => {
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,         // Enable auto-scrolling
    autoplaySpeed: 3000,    // Time between slides in milliseconds (3 seconds)
    pauseOnHover: true,     // Pause sliding when the user hovers over a slide
  };

  const {
    data: featuredTours,
    loading,
    error
  } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

  return (
    <>
      <Slider {...settings}>
        {loading && <h4>Loading........</h4>}
        {error && <h4>{error}</h4>}
        {!loading &&
          !error &&
          featuredTours?.map((tour) => (
            <Col lg="3" className="mb-4" key={tour._id}>
              <TourCard tour={tour} />
            </Col>
          ))}
      </Slider>
    </>
  );
};

export default FeaturedTourList;