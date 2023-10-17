import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import image1 from "./../assets/img1.jpg";
import image2 from "./../assets/img2.jpg";
import image3 from "./../assets/img3.jpg";

SwiperCore.use([Autoplay, Navigation]); 

const Success = () => {
  return (
    <div className="md:px-20 md:py-10 my-10 mx-2">
        <h1 className="text-4xl font-bold text-center pb-10">Success <span className="text-red-700">Stories</span></h1>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
            768: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 3, 
            },
          }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 2500, 
          disableOnInteraction: false, 
        }}
      >
        <SwiperSlide>
          <div>
            <img src={image1} alt="" />
            <h1 className="text-3xl font-bold py-4">Ahmed & Mim</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              accusantium architecto aut magni consectetur ipsa, laborum aliquid
              perferendis dignissimos labore obcaecati, aperiam optio? Sequi,
              magni!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" />
          <h1 className="text-3xl font-bold py-4">Kawsar & Sab</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
            accusantium architecto aut magni consectetur ipsa, laborum aliquid
            perferendis dignissimos labore obcaecati, aperiam optio? Sequi,
            magni!
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={image1} alt="" />
            <h1 className="text-3xl font-bold py-4">Ahmed & Mim</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              accusantium architecto aut magni consectetur ipsa, laborum aliquid
              perferendis dignissimos labore obcaecati, aperiam optio? Sequi,
              magni!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" />
          <h1 className="text-3xl font-bold py-4">Adeeb & Munni</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
            accusantium architecto aut magni consectetur ipsa, laborum aliquid
            perferendis dignissimos labore obcaecati, aperiam optio? Sequi,
            magni!
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={image1} alt="" />
            <h1 className="text-3xl font-bold py-4">Ahmed & Mim</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              accusantium architecto aut magni consectetur ipsa, laborum aliquid
              perferendis dignissimos labore obcaecati, aperiam optio? Sequi,
              magni!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Success;
