"use client";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";

export default function Feedback() {
  const sliderRef = useRef(null);
  // slider styles
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
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
    <>
      <main className="pt-[60px] pb-[70px] border-b-1 border-[#F2F3F8]">
        <div className="container mx-auto px-4">
          <h2 className="text-[30px] font-semibold text-[#1C274C] mb-8 text-start next_arrow">
            Browse by Category
          </h2>
          <div className="relative">
            {/* custom arrow */}
            <div className="absolute right-[-10px] top-[-50px] flex gap-2">
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
            <Slider ref={sliderRef} {...settings}>
              {categories.map((category, index) => (
                <div key={index} className={` flex-shrink-0 w-28 text-center`}>
                  <div className="w-[200px] h-[200px] mx-auto bg-white rounded-full overflow-hidden shadow-md">
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
    </>
  );
}
