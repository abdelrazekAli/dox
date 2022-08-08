import "./slider.css";
import { useEffect, useState } from "react";

export default function Slider({ imgs }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = imgs.length;

  let slideInterval;
  let intervalTime = 3000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    auto();

    return () => clearInterval(slideInterval);
  }, [currentSlide]);
  // End

  return (
    <div className="slideshow-container">
      {imgs.length > 0 &&
        imgs.map((img, index) => (
          <div
            className={
              index === currentSlide ? "mySlides fade current" : "mySlides fade"
            }
            key={index}
          >
            <img src={`./assets/imgs/slider/${img}`} alt="slider" />
          </div>
        ))}
    </div>
  );
}
