import { useState } from "react";
import Img01 from "../assets/nike01.png";
import Img02 from "../assets/nike02.avif";
import Img03 from "../assets/nike03.avif";
import Img04 from "../assets/nike04.avif";
import Img05 from "../assets/nike05.avif";

const ImageSlider = () => {
  //state
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      i: 1,
      url: Img01,
    },
    {
      i: 2,
      url: Img02,
    },
    {
      i: 3,
      url: Img03,
    },
    {
      i: 4,
      url: Img04,
    },
    {
      i: 5,
      url: Img05,
    },
  ];
  return (
    <div className="image_slider_container">
      <div className="left">
        {images.map((img, index) => (
          <img
            key={img.i}
            src={img.url}
            alt="img"
            className={currentIndex === index ? "active_img" : ""}
            onMouseEnter={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <div className="right">
        {images.map((img, index) => (
          <img
            key={img.i}
            src={img.url}
            alt="img"
            className={currentIndex === index ? "img_show" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
