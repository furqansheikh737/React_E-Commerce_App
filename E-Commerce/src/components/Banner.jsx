import React, { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          {data.map((img, index) => (
            <img
              key={index}
              className="w-screen h-full object-cover"
              src={img}
              alt={`Slide ${index + 1}`}
              loading={index === 0 ? "priority" : "lazy"}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-6 bottom-12 sm:bottom-16 md:bottom-20">
          <div
            onClick={prevSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-700 flex items-center justify-center hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300 cursor-pointer"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-700 flex items-center justify-center hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300 cursor-pointer"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default banner;
