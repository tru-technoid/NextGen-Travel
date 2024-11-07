import React from 'react';
//import About_Us from '../assets/images/About_Us.png';
import Welcome_hand from '../assets/images/Welcome_hand.png';
import People_3 from '../assets/images/People_3.png';
import Mission_Logo from '../assets/images/Mission_Logo.png';
//import Mission_Achieved from '../assets/images/Mission_Achieved.jpg';
import Customize_Tour from '../assets/images/Customize_Tour.jpg';
import Expert_Guide from '../assets/images/Expert_Guide.png';
import Unique_Destination from '../assets/images/Unique_Destination.png';
import Seamless_Plan from '../assets/images/Seamless_Plan.png';
import Seamless_Service from '../assets/images/Seamless_Service.png';
import Quality from '../assets/images/Quality.png';
import Safety from '../assets/images/Safety.png';
import Sustainable from '../assets/images/Sustainable.png';

import "../Styles/about.css";

const About = () => {
  return (
    <div>
      <AboutUs />
      <OurMission />
      <WhatWeOffer />
      <WhyChooseUs />
      <Journey />
    </div>
  );
};

const AboutUs = () => (
  <section className="about-article" id="About10">
    <h2 className="about-heading">About US</h2>
    <div className="about-container">
      <div className="about-latest-article"></div>
      <div className="about-more-article">
        <ArticleBox
          imgSrc={Welcome_hand}
          title="Welcome to NextGen Tourism"
          content="At NextGen Tourism, we believe that travel is more than just a journey from one place to another; it is an opportunity to discover new horizons, create unforgettable memories, and experience the world in ways you never imagined. Our passion for exploration and our commitment to providing exceptional travel experiences are at the heart of everything we do."
        />
        <ArticleBox
          imgSrc={People_3}
          title="Who We Are?"
          content="Founded by a team of avid travelers and adventure enthusiasts, NextGen Tourism was born out of a desire to share our love for travel with others. With years of experience in the travel industry, we understand what makes a trip truly special. We curate unique itineraries that combine popular destinations with hidden gems, ensuring that every journey is a blend of excitement and discovery."
        />
      </div>
    </div>
  </section>
);

const ArticleBox = ({ imgSrc, title, content }) => (
  <div className="about-box">
    <div className="about-image">
      <img src={imgSrc} alt={title} />
    </div>
    <div className="about-text">
      <h3>{title}</h3>
      <li>{content}</li>
    </div>
  </div>
);

const OurMission = () => (
  <section className="about-article">
    <h2 className="about-heading">Our Mission</h2>
    <div className="about-container">
      <div className="about-more-article">
        <div className="about-box">
          <div className="about-image">
            <img src={Mission_Logo} alt="Mission" />
          </div>
          <div className="about-text">
            <li>At NextGen Tourism, we believe that travel is more than just a journey from one place to another; it is an opportunity to discover new horizons, create unforgettable memories, and experience the world in ways you never imagined. Our passion for exploration and our commitment to providing exceptional travel experiences are at the heart of everything we do.</li>
          </div>
        </div>
      </div>
      <div className="about-latest-article"></div>
    </div>
  </section>
);

const WhatWeOffer = () => (
  <section className="about-travel">
    <h2 className="about-heading">What We Offer?</h2>
    <div className="about-container">
      <ServiceBox
        imgSrc={Customize_Tour}
        title="Customizable Tours"
        content="Tailor your trip to match your interests, preferences, and budget. We offer a wide range of tour packages that can be customized to create your perfect itinerary."
      />
      <ServiceBox
        imgSrc={Expert_Guide}
        title="Expert Guides"
        content="Our knowledgeable and friendly guides are passionate about their regions and are dedicated to making your trip informative and enjoyable."
      />
      <ServiceBox
        imgSrc={Unique_Destination}
        title="Unique Destinations"
        content="From iconic landmarks to off-the-beaten-path locales, our tours include a mix of must-see attractions and lesser-known treasures."
      />
      <ServiceBox
        imgSrc={Seamless_Plan}
        title="Seamless Planning"
        content="We handle all the details, from transportation and accommodation to activities and dining, so you can focus on enjoying your trip."
      />
    </div>
  </section>
);

const ServiceBox = ({ imgSrc, title, content }) => (
  <div className="about-box">
    <img src={imgSrc} alt={title} />
    <div className="about-content">
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  </div>
);

const WhyChooseUs = () => (
  <section className="about-travel">
    <h2 className="about-heading">Why Choose Us?</h2>
    <div className="about-container">
      <ServiceBox
        imgSrc={Seamless_Service}
        title="Personalized Service"
        content="We take the time to understand your travel aspirations and create a journey that exceeds your expectations."
      />
      <ServiceBox
        imgSrc={Quality}
        title="Quality and Comfort"
        content="We partner with reputable hotels, airlines, and local vendors to ensure you enjoy the highest standards of comfort and service."
      />
      <ServiceBox
        imgSrc={Safety}
        title="Safety and Support"
        content="Your safety is our top priority. We provide 24/7 support and reliable assistance throughout your trip."
      />
      <ServiceBox
        imgSrc={Sustainable}
        title="Sustainable Travel"
        content="We are committed to responsible travel practices that protect the environment and support local communities."
      />
    </div>
  </section>
);

const Journey = () => (
  <div className="about-container">
    <div className="about-detail">
      <div>
        <h2>Join a Journey of a Lifetime</h2><br />
      </div>
      <p>At NextGen Tourism, we are more than just a travel company; we are your partners in adventure. Let us take you on a journey that will broaden your horizons, enrich your life, and leave you with lasting memories. Your next great adventure awaits – let's explore the world together!</p>
      <p>For more information or to start planning your trip, contact us today.</p>
    </div>
  </div>
);

export default About;
