import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/VvPbThR/toy-banner.png"
              alt="Toy Banner 1"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-orange bg-opacity-40 flex flex-col justify-center items-center text-white">
              <h2 className="text-4xl font-bold mb-2">Fun & Creative Toys</h2>
              <p className="text-lg">Let your kids explore imagination!</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/8jg4QqL/toy-banner2.jpg"
              alt="Toy Banner 2"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-orange bg-opacity-40 flex flex-col justify-center items-center text-white">
              <h2 className="text-4xl font-bold mb-2">Locally Made with Love ❤️</h2>
              <p className="text-lg">Support local toy creators today!</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/6bt1yC2/toy-3.png"
              alt="Toy Banner 3"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-orange bg-opacity-40 flex flex-col justify-center items-center text-white">
              <h2 className="text-4xl font-bold mb-2">Toys that Inspire Joy 🎉</h2>
              <p className="text-lg">Find the perfect gift for your child.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
