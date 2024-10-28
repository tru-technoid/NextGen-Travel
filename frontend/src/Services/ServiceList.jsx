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
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
]


const ServiceList = () => {
  return (
    <>
      {servicesData.map((item,index)=>(
        <Col lg='3' key={index}>
            <ServiceCard item={item} />
        </Col>        
      ))}
    </>
  )
}

export default ServiceList
