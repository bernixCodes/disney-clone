import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <div className="relative mt-7 shadow-2xl max-w-screen-2xl mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      >
        <div>
          <img loading="lazy" src="/images/slider-1.jpg" alt="" />
        </div>

        <div>
          <img loading="lazy" src="/images/slider-2.jpg" alt="" />
        </div>

        <div>
          <img loading="lazy" src="/images/slider-3.jpg" alt="" />
        </div>

        <div>
          <img loading="lazy" src="/images/slider-4.jpeg" alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
