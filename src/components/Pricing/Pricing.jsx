import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./Pricing.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons";

const Pricing = () => {
  return (
    <div className="pricing">
      <Row>
        <Col className="price-info-container" style={{marginLeft:"50px"}}>
          <h2>
            Packages designed to work in conjunction with each other to serve
            one common purpose
          </h2>
          <p>Find in depth details below:</p>
          <button style={{margin:"15px 10px 0px 0px"}}>Website</button>
          <button>Application</button>
          <p style={{marginTop:"20px"}}>
            We have installed packages with certain combinations using
            technology such as Laravel, Wordpress, MySQL, iOS and Android etc in
            a perfect sync so as to maximize the client’s outcome from each
            package.
          </p>
        </Col>
        <Col className="price-info-container">
          <Card style={{ width: "22rem" , textAlign:"center", marginLeft:"30px" }}>
            <Card.Body style={{textAlign:"center"}}>
              <Card.Title>WordPress</Card.Title>
              <h3>$1150</h3>           
               <h6> <FontAwesomeIcon icon={faAngleDoubleRight} style={{color:"#57BE8E"}} size="1x" /> Full Responsive Design</h6>
                <h6> <FontAwesomeIcon icon={faAngleDoubleRight} style={{color:"#57BE8E"}} size="1x" />Multiple Page Styles</h6>
                <h6> <FontAwesomeIcon icon={faAngleDoubleRight} style={{color:"#57BE8E"}} size="1x" />Product on Sales</h6>
                <h6> <FontAwesomeIcon icon={faAngleDoubleRight} style={{color:"#57BE8E"}} size="1x" />Inventory Management</h6>
                <h6> <FontAwesomeIcon icon={faAngleDoubleRight} style={{color:"#57BE8E"}} size="1x" />Online Payment Gateway</h6>
                <h6> <FontAwesomeIcon icon={faAngleDoubleRight} style={{color:"#57BE8E"}} size="1x" /> Category Management</h6>
                <h6> <FontAwesomeIcon icon={faAngleDoubleRight} style={{color:"#57BE8E"}} size="1x" /> Coupon/Offer Management</h6>
                <h6> <FontAwesomeIcon icon={faAngleDoubleRight} style={{color:"#57BE8E"}} size="1x" />SEO Optimized</h6>         
              <button>Get Started</button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="price-info-container">
        <Card style={{ width: "22rem" , textAlign:"center" }}>
            <Card.Body style={{textAlign:"center"}}>
              <Card.Title>Laravel</Card.Title>
              <h3>$2500</h3>           
               <h6> <FontAwesomeIcon icon={faAngleDoubleRight} style={{color:"#57BE8E"}} size="1x" /> Full Responsive Design</h6>
                <h6> <FontAwesomeIcon icon={faAngleDoubleRight} style={{color:"#57BE8E"}} size="1x" />Multiple Page Styles</h6>
                <h6> <FontAwesomeIcon icon={faAngleDoubleRight} style={{color:"#57BE8E"}} size="1x" />Product on Sales</h6>
                <h6> <FontAwesomeIcon icon={faAngleDoubleRight} style={{color:"#57BE8E"}} size="1x" />Inventory Management</h6>
                <h6> <FontAwesomeIcon icon={faAngleDoubleRight} style={{color:"#57BE8E"}} size="1x" />Online Payment Gateway</h6>
                <h6> <FontAwesomeIcon icon={faAngleDoubleRight} style={{color:"#57BE8E"}} size="1x" /> Category Management</h6>
                <h6> <FontAwesomeIcon icon={faAngleDoubleRight} style={{color:"#57BE8E"}} size="1x" /> Coupon/Offer Management</h6>
                <h6> <FontAwesomeIcon icon={faAngleDoubleRight} style={{color:"#57BE8E"}} size="1x" />SEO Optimized</h6>         
              <button>Get Started</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Pricing;
