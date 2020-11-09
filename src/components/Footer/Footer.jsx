import React from 'react';
import { Col, Row } from 'react-bootstrap';
import logo from '../../images/logo.png'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-info">
            <Row style={{paddingTop:"70px"}}>
                <Col>
                <h4>Head Quarter -</h4>
                <h6>Gregory Hills</h6>
                <h6>New South Wales</h6>
                <h6>Australia</h6>
                <img src={logo} alt="" style={{height:"20px"}}/>
                </Col>
                <Col style={{textAlign:"right"}}>
                <h4>Development Centre -</h4>
                <h6>Bhuiyan Mansion</h6>
                <h6>Motijheel, Dhaka</h6>
                <h6>Bangladesh</h6>
                <div class="social-media">
                <FontAwesomeIcon icon={faFacebook} size="2x" style={{margin:"0 3px"}}/>
                <FontAwesomeIcon icon={faYoutube} size="2x" style={{margin:"0 3px"}}/>  
                <FontAwesomeIcon icon={faLinkedin} size="2x" style={{margin:"0 3px"}} />  
                </div>
                </Col>
            </Row>
            <p style={{marginTop:"30px"}}>© 2019 Krazy IT. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;