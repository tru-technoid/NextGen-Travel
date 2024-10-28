import React from 'react'
import Slider from "react-slick"
import p1 from "../../assets/images/p-1.jpg"
import p2 from "../../assets/images/p-2.jpg"
import p3 from "../../assets/images/p-3.jpg"
import p4 from "../../assets/images/p-4.jpg"
import p5 from "../../assets/images/p-5.jpg"



const Testimonials = () => {

    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }
  return (
    <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Voluptates unde consequuntur repellat, totam ullam odit suscipit quidem vitae dicta. 
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={p1} className="w-40 h-40 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>



        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Voluptates unde consequuntur repellat, totam ullam odit suscipit quidem vitae dicta.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={p2} className="w-40 h-40 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>



        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Voluptates unde consequuntur repellat, totam ullam odit suscipit quidem vitae dicta. 
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={p3} className="w-40 h-40 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>



        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Voluptates unde consequuntur repellat, totam ullam odit suscipit quidem vitae dicta. 
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={p4} className="w-40 h-40 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>



        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Voluptates unde consequuntur repellat, totam ullam odit suscipit quidem vitae dicta. 
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={p5} className="w-40 h-40 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

    </Slider>
    
  )
}

export default Testimonials
