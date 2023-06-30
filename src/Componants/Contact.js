import React from "react";
import {Container , Row ,Col} from 'react-bootstrap';
import contact from "../Imges/customer-service.png";
function Contact (){

    return(
        <section className="contact" id="contact">
            <Container>
                <Row>
                    <Col md={6}>
                         <img src={contact} width="100%"/>
                    </Col>
                    <Col md={6}>
                         <h2>Get in tuch with me</h2>
                         <form>
                            <Row>
                                <Col sm={6}>
                                     <input className="contant-item" type="text" placeholder="Frist Name"/>
                                </Col>
                                <Col sm={6}>
                                     <input className="contant-item" type="text" placeholder="Last Name"/>
                                </Col>
                                <Col sm={6}>
                                     <input className="contant-item" type="email" placeholder="E-mail"/>
                                </Col>
                                <Col sm={6}>
                                     <input className="contant-item" type="tel" placeholder="Phone No."/>
                                </Col>
                                <Col >
                                     <textarea row={5}  className="contant-item" placeholder="Massage"></textarea>
                                     <button type="submit">Send</button>
                                </Col>
                            </Row>
                         </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}



export default Contact;