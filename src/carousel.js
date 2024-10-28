import Carousel from "react-bootstrap/Carousel";

function ControlCarousel() {
  return (
    <Carousel id="carousel-container" >
      <Carousel.Item>
        <div className="slidercontents">
          <img src="dress1.jpg"/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slidercontents">
        <img src="dress4.jpg"/>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="slidercontents">
        <img src="dress6.jpg"/>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}


export default ControlCarousel;