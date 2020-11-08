import React from 'react';
import { Col, Row } from 'react-bootstrap';
import processFlow from '../../images/process-flow.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCube, faPlug, faRecycle, faFastForward
} from "@fortawesome/free-solid-svg-icons";
import "./Features.css"

const Features = () => {
    return (
        <div className="features">
            <div className="features-header">
            <h1>What Sets Our Services Apart</h1>
            <p>As shown, our services have some special perks and quirks which are essential in the fluidity and management of a company’s most focal factors.</p>
            </div>
            <Row>
                <Col style={{textAlign:"right"}}>
                <FontAwesomeIcon icon={faCube} size="3x" />
                <h3>Structure</h3> 
                <p>Top tier performance in ensured by analyzing, assessing, consulting, and eliminating any issues brought up by the customer and delivering exactly what they want.</p>
                    <br/>
                    <FontAwesomeIcon icon={faPlug} size="3x" />  
                <h3>Cross-Platform</h3> 
                <p>Not only do we provide technical support and develop apps for desktops, but also for iOS, android, and various other platforms.</p>
                </Col>

                <Col>
                    <img src={processFlow} alt=""/>
                </Col>

                <Col>
                <FontAwesomeIcon icon={faRecycle} size="3x" />
                <h3>Regular Checkups</h3> 
                <p>We allow the customer to keep associating with us in the long run by regularly maintaining and following up on the services we have provided and making sure everything is working fine.</p>
                    <br/>
                <FontAwesomeIcon icon={faFastForward} size="3x" />
                <h3>Fast Support</h3> 
                <p>Our technicians are always ready to listen and give out an immediate response so during times of crucial need, our clients get the quickest and the most efficient help they were promised.</p>
                </Col>
            </Row>
            
        </div>
    );
};

export default Features;