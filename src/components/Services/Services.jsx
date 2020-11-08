import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faSearch,
  faChartBar,
  faLaptopCode,
  faMobile,
  faBraille,
} from "@fortawesome/free-solid-svg-icons";
import { Row } from "react-bootstrap";

const Services = () => {
  return (
    <div className="services">
      <div className="service-container">
        <h1>What We Offer</h1>
        <p>
          We offer unlimited solutions to all your business needs. In the
          installation package we prepare search engine optimization, social
          media support, we provide corporate identity and graphic design
          services. Just to name a few more:
        </p>
        <div>
          <Row className="justify-content-md-center">
            <div className="single-item">
              <FontAwesomeIcon icon={faCode} size="6x" />
              <p>Web Design & </p>
              <p>Development</p>
            </div>

            <div className="single-item">
              <FontAwesomeIcon icon={faMobile} size="6x" />
              <p>Mobile Apps </p>
              <p>Development</p>
            </div>

            <div className="single-item">
              <FontAwesomeIcon icon={faBraille} size="6x" />
              <p>WEB APPLICATION </p>
              <p>Development</p>
            </div>
          </Row>

          <Row className="justify-content-md-center">
            <div className="single-item">
              <FontAwesomeIcon icon={faLaptopCode} size="6x" />
              <p>CORE IT </p>
              <p>Solution</p>
            </div>

            <div className="single-item">
              <FontAwesomeIcon icon={faChartBar} size="6x" />
              <p>MANAGED IT </p>
              <p>Services</p>
            </div>

            <div className="single-item">
              <FontAwesomeIcon icon={faSearch} size="6x" />
              <p>SEARCH ENGINE </p>
              <p>OPTIMIZATION (SEO)</p>
            </div>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Services;
