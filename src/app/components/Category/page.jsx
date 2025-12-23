"use client";

import Mobile from "@/assets/products/mobile1.png";
import Watch from "@/assets/products/watch.webp";
import Iphone from "@/assets/products/1phone.webp";
import BlackTV from "@/assets/products/black-tv.webp";
import ColorLCD from "@/assets/products/color-cd.webp";
import Juicer from "@/assets/products/juicer.webp";
import Headphone from "@/assets/products/new-headphone.webp";
import Workout from "@/assets/products/workout.webp";
import Slider from "react-slick";
import style from "../Category/category.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";

const categories = [
  { name: "Mobile", img: Mobile },
  { name: "Watch", img: Watch },
  { name: "Health & Sports", img: Iphone },
  { name: "Workout", img: Workout },
  { name: "ColorLCD", img: ColorLCD },
  { name: "BlackTV", img: BlackTV },
  { name: "Juicer", img: Juicer },
  { name: "Headphone", img: Headphone },
];

export default function Category() {
  const sliderRef = useRef(null);

  // slider styles
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      // xl
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },

      // lg
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },

      // md
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },

      // sm
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },

      // xs
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <main className="pt-10 md:pt-20 pb-10 md:pb-20 border-b border-[#F2F3F8]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1C274C] text-center sm:text-start">
            Browse by Category
          </h2>
          {/* custom arrow */}
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="border border-gray-400 rounded-full cursor-pointer p-[7px] hover:bg-sky-700 delay-150 duration-300 ease-in-out"
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={handleNext}
              className="border border-gray-400 rounded-full cursor-pointer p-[7px] hover:bg-sky-700 delay-150 duration-300 ease-in-out"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        {/* images sliders */}
        <div>
          <Slider ref={sliderRef} {...settings}>
            {categories.map((category, index) => (
              <div key={index} className={` flex-shrink-0 w-28 text-center`}>
                <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] mx-auto bg-white rounded-full overflow-hidden shadow-md">
                  <img
                    src={category.img.src}
                    alt={category.name}
                    className="w-full h-full object-contain bg-[#F2F3F8]"
                  />
                </div>
                <p
                  className={`${style.categoryName} mt-3 text-[#1C274C] font-semibold text-[16px] hover:text-blue-600`}
                >
                  {category.name}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </main>
  );
}
