// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import ProductCart from "./ProductCart";

const Products_Slider = () => {
  return (
    <div className="products_slider_container">
      <Swiper
        slidesPerView={4}
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
