import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slide1 from "./../assets/slide1.jpg";
import slide2 from "./../assets/slide2.jpg";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

const Banner = () => {
  return (
    <section>
    <Swiper
      spaceBetween={0} // Remove space between slides
      slidesPerView={1} // Display one slide at a time
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 5000, // Set the delay in milliseconds for the next slide
        disableOnInteraction: false, // Allow user interactions to control autoplay
      }}
    >
      <SwiperSlide>
        <img src={slide1} alt="" className="w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" className="w-full" />
      </SwiperSlide>
    </Swiper>
    </section>
  );
};

export default Banner;
