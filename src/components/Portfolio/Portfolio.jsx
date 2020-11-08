import React from "react";
import "./Portfolio.css";
import InfiniteCarousel from "react-leaf-carousel";
import "react-multi-carousel/lib/styles.css";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.jpg";
import slide4 from "../../images/slide4.jpg";
import slide5 from "../../images/slide5.jpg";
import slide6 from "../../images/slide6.jpg";
import slide7 from "../../images/slide7.jpg";
import slide8 from "../../images/slide8.jpg";
import slide9 from "../../images/slide9.jpg";

const Portfolio = () => {
  return (
    <div className="portfolio">
        <div className="portfolio-info">
        <h1>Our Major Clients</h1>
        <p>Some of our largest backers, who continue to work with us and are extremely satisfied with our service delivery, playing a major part in jumpstarting their respective business’ overall infrastructure.</p>
        </div>
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ]}
        dots={true}
        showSides={true}
        sidesOpacity={0.5}
        sideSize={0.1}
        slidesToScroll={4}
        slidesToShow={4}
        scrollOnDevice={true}
      >
        <div>
          <img alt="" src={slide1} />
        </div>
        <div>
          <img alt="" src={slide2} />
        </div>
        <div>
          <img alt="" src={slide3} />
        </div>
        <div>
          <img alt="" src={slide4} />
        </div>
        <div>
          <img alt="" src={slide5} />
        </div>
        <div>
          <img alt="" src={slide6} />
        </div>
        <div>
          <img alt="" src={slide7} />
        </div>
        <div>
          <img alt="" src={slide8} />
        </div>
        <div>
          <img alt="" src={slide9} />
        </div>
      </InfiniteCarousel>
    </div>
  );
};

export default Portfolio;
