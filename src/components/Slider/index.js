// import React from "react";
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Anakin from "../../images/anakin-skywalker.jpg";
import Yoda from "../../images/baby-yoda.jpg";
import BobaFett from "../../images/bobafet.jpg";
import "./slider.css";

function Slider() {
  return (
    <div class="images">
        <center>
    <Carousel>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={Anakin}
          alt="First slide"
          class="img"
        />
        <Carousel.Caption>
          <h3>VALHALLA</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={Yoda}
          alt="Second slide"
          class="img"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img
          className="d-block w-100"
          src={BobaFett}
          alt="Third slide"
          class="img"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </center>
    </div>
  );
}

export default Slider;