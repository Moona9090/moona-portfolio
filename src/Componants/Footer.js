import React from "react";
import {Container , Row ,Col} from 'react-bootstrap';
import Letter from "./Letter";
import headLogo from "../Imges/half-moon.png";
import facebook from "../Imges/icons8-facebook.svg";
import instagram from "../Imges/icons8-instagram.svg";
import linkedin from "../Imges/icons8-linkedin.svg";

function Footer (){

    return(
        <footer>
            <Container>
                <Row className="c">
                    <Letter/>
                    <Col sm={6}>
                        <img src={headLogo} alt="logo" className="footer-logo" />
                    </Col>
                    <Col sm={6} className="footer-icons text-sm-end">
                        <div className="d-flex flex-row-reverse ">
                            <a href='https://www.linkedin.com/in/amany-gamil-38a453281' target='_blank' className='head-icon'><img src={linkedin} alt="logo" className='head-i'/></a>
                            <a href='https://www.facebook.com/profile.php?id=100069602287507' target='_blank' className='head-icon'><img src={facebook} alt="logo" className='head-i'/></a>
                            <a href='#' target='_blank' className='head-icon'><img src={instagram} alt="logo" className='head-i'/></a>
                        </div>
                        <p>--Copyrights 2023-- All Rights Reserved here By Amany Gamil Saber.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;