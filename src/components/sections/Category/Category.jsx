"use client";

import Mobile from "@/assets/products/mobile1.png";
import Watch from "@/assets/products/watch.webp";
import Iphone from "@/assets/products/1phone.webp";
import BlackTV from "@/assets/products/black-tv.webp";
import ColorLCD from "@/assets/products/color-cd.webp";
import Juicer from "@/assets/products/juicer.webp";
import Headphone from "@/assets/products/new-headphone.webp";
import Workout from "@/assets/products/workout.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "./category.module.css";
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
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <main className="pt-10 md:pt-20 pb-10 md:pb-20 border-b border-[#F2F3F8]">
      <div className="container">
        <div className="flex flex-row items-center justify-between gap-4 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1C274C] dark:text-gray-100 text-center sm:text-start">
            Browse by Category
          </h2>
          {/* custom arrow */}
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="border border-gray-400 dark:border-gray-600 rounded-full cursor-pointer p-[7px] hover:bg-sky-700 dark:hover:bg-blue-600 text-[#1C274C] dark:text-gray-100 transition-all duration-300"
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={handleNext}
              className="border border-gray-400 dark:border-gray-600 rounded-full cursor-pointer p-[7px] hover:bg-sky-700 dark:hover:bg-blue-600 text-[#1C274C] dark:text-gray-100 transition-all duration-300"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        {/* images sliders */}
        <div>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Pagination, Autoplay]}
            navigation={false}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
              1280: {
                slidesPerView: 6,
              },
            }}
            className={style.mySwiper}
          >
            {categories.map((category, index) => (
              <SwiperSlide key={index}>
                <div className={`flex-shrink-0 w-full text-center`}>
                  <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] mx-auto bg-white dark:bg-gray-800 rounded-full overflow-hidden shadow-md">
                    <img
                      src={category.img.src}
                      alt={category.name}
                      className="w-full h-full object-contain bg-[#F2F3F8] dark:bg-gray-700"
                    />
                  </div>
                  <p
                    className={`${style.categoryName} mt-3 text-[#1C274C] dark:text-gray-200 font-semibold text-[16px] hover:text-blue-600 dark:hover:text-blue-400`}
                  >
                    {category.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
}
