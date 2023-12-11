import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://img1.oto.com.vn/2018/12/19/pgbOv26o/toyota-banxehoi-4-435c_wm.jpg",
    "https://canterburywreckers.co.nz/wp-content/uploads/2019/07/car-parts-and-car.jpg",
    "https://da2d2y78v2iva.cloudfront.net/168/153077402756002.png?_=1541391260",
    "https://www.motorsheba.com/public/uploads/alaWRlSHOXNcpjS5YGpppBu5Q4mOGxfWcvzEUZ6dIy.jpg",
  ];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="h-[650px] w-screen relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          <img
            className="w-screen h-full object-cover"
            src={data[0]}
            alt="ImageOne"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt="ImageTwo"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[2]}
            alt="ImageThree"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[3]}
            alt="ImageFour"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-52">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
