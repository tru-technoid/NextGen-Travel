import React from 'react'
import './Newsletter.css'

import {Container,Row,Col} from 'reactstrap'
import maleTourist from '../assets/images/subscribe.png'


const Newsletter = () => {
  return <>
   <section className="newsletter">
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter_content">
                    <h2>Subscribe now to get useful traveling information.</h2>

                    <div className="newsletter_input">
                        <input type="email" placeholder="Enter your email" />
                        <button className="btn newsletter_btn">Subscribe</button>
                    </div>
                    <p>It is very important for the customer to pay attention to the adipiscing process. 
                        Words never fail because resilience is itself!</p> 
                </div>
            </Col>
            <Col lg='6'>
                <div className="newsletter_img">
                    <img src={maleTourist} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
   </section>
</>
}

export default Newsletter
