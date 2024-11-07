import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from 'reactstrap'

import weatherImg from '../assets/images/weather.webp'
import guideImg from '../assets/images/tourguide.png'
import customizationImg from '../assets/images/customization.jpg'

const servicesData=[
    {
        imgUrl: weatherImg,
        title: "Calculate weather",
        desc: "This section provides real-time data on the local weather, including temperature.",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: " This feature offers an informative experience for exploring destinations.",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Users can create personalized travel itineraries based on preferences.",
    },
]


const ServiceList = () => {
  return (
    <>
      {servicesData.map((item,index)=>(
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
            <ServiceCard item={item} />
        </Col>        
      ))}
    </>
  )
}

export default ServiceList
