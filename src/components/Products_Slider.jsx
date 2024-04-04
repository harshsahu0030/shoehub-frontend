// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import ProductCart from "./ProductCart";
import { useEffect, useState } from "react";

const Products_Slider = () => {
  //state
  const [inWidth, setInWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setInWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="products_slider_container">
      <Swiper
        slidesPerView={inWidth && inWidth >= 1024 ? 4 : inWidth >= 481 ? 3 : 2}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProductCart />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCart />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCart />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCart />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCart />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCart />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCart />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCart />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCart />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Products_Slider;
