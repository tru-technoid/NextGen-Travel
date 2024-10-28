import React, {useState} from 'react'
import '../Styles/Home.css'
import {Container, Row, Col} from 'reactstrap';
import Img1 from '../assets/images/img1.jpg'
import Img2 from '../assets/images/img2.jpg'
import Img3 from '../assets/images/img3.webp'
import Subtitle from './../Shared/Subtitle';
import experienceImg from '../assets/images/experience.png'

import SearchBar from '../Shared/SearchBar';
import ServiceList from "../Services/ServiceList"
import FeaturedTourList from '../Components/Featured-tours/FeaturedTourList';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import MasonryImagesGallery from '../Components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../Components/Testimonial/Testimonials';
import Newsletter from '../Shared/Newsletter';

const Home = () => {

  const [counterOn, setCounterOn] = useState(false);
  return <>
    {/*--------------------------section start------------------------*/}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="content">
              <div className="subtitle d-flex align-items-center">
                <Subtitle subtitle={'Discover the India through new eyes'}/>
              </div>
              <h1>
                Welcome to your unforgettable Indian escape."
              </h1>
              <p>
              Each journey unveils a tapestry of new experiences, each destination reveals a mosaic of vibrant stories, and each fleeting moment weaves a thread into the rich fabric of our memories. 
              Embrace the adventure, cherish the stories, and hold each memory close, for they shape the essence of who we are. 
              </p>
            </div>
          </Col>
          
          <Col lg='2'>
            <div className="img-box">
              <img src={Img1} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="img-box mt-5">
              <img src={Img2} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="img-box">
              <img src={Img3} alt="" />
            </div>
          </Col>

          <SearchBar/>
        </Row>
      </Container>
    </section>
    {/*--------------------------section end------------------------*/}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services_subtitle">What we serve</h5>
            <h2 className="services_title">We offer our best services</h2>
          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>

    {/*--------------------------Featured tour section start ------------------------*/}

    <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
            <Subtitle subtitle={'Explore'} />
            <h2 className="featured_tour-title">Our featured tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>

    {/*--------------------------Featured tour section end------------------------*/}

    {/*--------------------------Experience section start------------------------*/}

    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="experience_content">
              <Subtitle subtitle={"Experience"} />

              <h2>With our all experience <br /> we will serve you</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Consequatur, sequi?
              </p>
            </div>

            <div className="counter_wrapper d-flex align-items-center gap-6">
            <ScrollTrigger className="d-flex align-items-center gap-5" onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
              <div className="counter_box">
                <span>{counterOn && <CountUp start={0} end={10} duration={3} delay={0} />} <span>k+</span> </span>
                <h6>Successful Trip</h6>
              </div>

              <div className="counter_box">
                <span>{counterOn && <CountUp start={0} end={2} duration={3} delay={0} />} <span>k+</span> </span>
                <h6>Regular Client</h6>
              </div>

              <div className="counter_box">
                <span>{counterOn && <CountUp start={0} end={10} duration={3} delay={0}/> } <span>+</span> </span>
                <h6>Year experience</h6>
              </div>
            </ScrollTrigger>
            </div>
          </Col>

          <Col lg="6">
            <div className="experience_img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    {/*--------------------------Experience section end------------------------*/}

    {/*--------------------------Gallery section start------------------------*/}

    <section>
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={"Gallery"} />
            <h2 className="gallery_title">
              Visit our customers tour gallery
            </h2>
          </Col>
          <Col lg="12">
            <MasonryImagesGallery/>
          </Col>
        </Row>
      </Container>
    </section>



    {/*--------------------------Gallery section end------------------------*/}

    {/*--------------------------Testimonial section start------------------------*/}

    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Fans Love'}/>
            <h2 className="testimonial_title">What our fans say about us</h2>
          </Col>
          <Col lg="12">
            <Testimonials/>
          </Col>
        </Row>
      </Container>
    </section>

    {/*--------------------------Testimonial section end------------------------*/}
    <Newsletter/>
  </>
}

export default Home
