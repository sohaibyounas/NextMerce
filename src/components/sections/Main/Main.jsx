"use client";

import Image from "next/image";
import CCTV from "@/assets/products/cctv.png";
import Mobile1 from "@/assets/products/mobile1.png";
import Handphone from "@/assets/products/handphone.png";
import Mobile2 from "@/assets/products/mobile2.png";
import MobileWallpaper from "@/assets/products/mobile-wallpaper.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Icon1 from "@/assets/icons/icon-01.svg";
import Icon2 from "@/assets/icons/icon-02.svg";
import Icon3 from "@/assets/icons/icon-03.svg";
import Icon4 from "@/assets/icons/icon-04.svg";
import Category from "@/components/sections/Category/Category";
import Shop from "@/components/sections/ShopSlider/ShopSlider";
import Phonedetail from "@/components/sections/Phonedetail/Phonedetail";
import Seller from "@/components/sections/BestSeller/BestSeller";
import Fitness from "@/assets/newarrivals/fitness-runner.png";
import GrayLCD from "@/assets/newarrivals/graylcd.png";
import Iphone from "@/assets/newarrivals/iphone17.png";
import Juicer from "@/assets/newarrivals/juicer.png";
import Monitor from "@/assets/newarrivals/monitor.png";
import Screen from "@/assets/newarrivals/lcdscreen.png";
import Explore from "@/components/sections/Explore/Explore";
import Feedback from "@/components/sections/Feedback/Feedback";
import Footer from "@/components/layout/Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Mainarea() {
  const [images, setImages] = useState([]);

  // api call
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((response) => {
        console.log("respone", response.data);
        setImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  return (
    <>
      {/* slider and cards */}
      <div className="grid grid-cols-12 gap-4 pt-8">
        {/* Image Slider */}
        <div className="col-span-12 lg:col-span-8 px-2">
          <div className="relative w-full h-full overflow-hidden rounded-lg custom_slide">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="h-full"
            >
              {images.map((img) => (
                <SwiperSlide key={img.id}>
                  <div className="relative h-[450px] sm:h-[400px] rounded-lg overflow-hidden">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${img.url})` }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30" />

                    {/* Content */}
                    <div className="relative z-10 h-full flex items-center justify-start px-6 py-10 pb-20 sm:p-8">
                      <div className="text-white max-w-md">
                        <p className="text-sm uppercase tracking-wide mb-6">
                          LIMITED EDITION
                        </p>
                        <h1 className="text-2xl sm:text-4xl font-bold mb-4 leading-tight">
                          {img.title}
                        </h1>
                        <p className="text-lg mb-6">
                          Featuring A18 Chip, Liquid Glass, and AI-Powered
                          Innovation
                        </p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Products */}
        <div className="col-span-12 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-4 px-2 lg:px-0 lg:pr-2">
          {/* First card */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col h-full">
            <div className="flex items-start justify-between flex-1">
              <div className="flex-1">
                <div className="max-w-[180px]">
                  <h3 className="text-xl font-semibold text-gray-800 leading-tight mb-4">
                    Smart Security Home Camera
                  </h3>
                </div>
              </div>
              <div className="relative w-32 h-24 ml-4">
                <Image
                  src={CCTV}
                  alt="Security Camera"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-700 font-medium">
                Save up to
                <span className="text-lg text-blue-600 font-bold">$450</span>
              </p>
            </div>
          </div>

          {/* Second card */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col h-full">
            <div className="flex items-start justify-between flex-1">
              <div className="flex-1">
                <div className="max-w-[180px]">
                  <h3 className="text-xl font-semibold text-gray-800 leading-tight mb-4">
                    Smart Security Home Camera
                  </h3>
                </div>
              </div>
              <div className="relative w-32 h-24 ml-4">
                <Image
                  src={Mobile1}
                  alt="Security Camera"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-700 font-medium">
                Save up to
                <span className="text-lg text-blue-600 font-bold">$450</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* general texts / value propositions */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-start justify-between gap-8 sm:gap-6 lg:gap-10 mt-6 px-2">
        {/* 1st */}
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <Image
              src={Icon1}
              alt="Free Shipping"
              width={45}
              height={45}
              className="w-10 h-10 sm:w-11 sm:h-11"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[17px] sm:text-[18px] font-bold text-[#1C274C] leading-none mb-1.5">
              Free Shipping
            </h3>
            <p className="text-[14px] text-[#606882] font-medium leading-none">
              For all orders $200
            </p>
          </div>
        </div>

        {/* 2nd */}
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <Image
              src={Icon2}
              alt="1 & 1 Returns"
              width={45}
              height={45}
              className="w-10 h-10 sm:w-11 sm:h-11"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[17px] sm:text-[18px] font-bold text-[#1C274C] leading-none mb-1.5">
              1 & 1 Returns
            </h3>
            <p className="text-[14px] text-[#606882] font-medium leading-none">
              Cancellation after 1 day
            </p>
          </div>
        </div>

        {/* 3rd */}
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <Image
              src={Icon3}
              alt="Secure Payments"
              width={45}
              height={45}
              className="w-10 h-10 sm:w-11 sm:h-11"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[17px] sm:text-[18px] font-bold text-[#1C274C] leading-none mb-1.5">
              100% Secure Payments
            </h3>
            <p className="text-[14px] text-[#606882] font-medium leading-none">
              Guarantee secure payments
            </p>
          </div>
        </div>

        {/* 4th */}
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <Image
              src={Icon4}
              alt="Dedicated Support"
              width={45}
              height={45}
              className="w-10 h-10 sm:w-11 sm:h-11"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[17px] sm:text-[18px] font-bold text-[#1C274C] leading-none mb-1.5">
              24/7 Dedicated Support
            </h3>
            <p className="text-[14px] text-[#606882] font-medium leading-none">
              Support Anywhere & anytime
            </p>
          </div>
        </div>
      </div>

      {/* category slides */}
      <Category />

      {/* shop slider */}
      <Shop />

      {/* phone details */}
      <Phonedetail />

      {/* Best Seller product detail */}
      <Seller data={cardData} />

      {/* explore page */}
      <Explore />

      {/* User Feedback  */}
      <Feedback />

      {/* Footer */}
      <Footer />
    </>
  );
}

// images array
const cardData = [
  {
    id: 1,
    image: Fitness,
    description: "This is the finess runner machine.",
    price: "$200",
    priceCut: "$150",
  },
  {
    id: 2,
    image: GrayLCD,
    description: "This is the gray LCD.",
    price: "$150",
    priceCut: "$100",
  },
  {
    id: 3,
    image: Iphone,
    description: "This is the gray LCD.",
    price: "$150",
    priceCut: "$100",
  },
  {
    id: 4,
    image: Juicer,
    description: "This is the gray LCD.",
    price: "$150",
    priceCut: "$100",
  },
  {
    id: 5,
    image: Monitor,
    description: "This is the gray LCD.",
    price: "$150",
    priceCut: "$100",
  },
  {
    id: 6,
    image: Screen,
    description: "This is the gray LCD.",
    price: "$150",
    priceCut: "$100",
  },
  {
    id: 7,
    image: Monitor,
    description: "This is the gray LCD.",
    price: "$150",
    priceCut: "$100",
  },
  {
    id: 8,
    image: Screen,
    description: "This is the gray LCD.",
    price: "$150",
    priceCut: "$100",
  },
];

// dummy data
const dummyimages = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
  },
  {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
    thumbnailUrl: "https://via.placeholder.com/150/d32776",
  },
  {
    albumId: 1,
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url: "https://via.placeholder.com/600/f66b97",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97",
  },
  {
    albumId: 1,
    id: 6,
    title: "accusamus ea aliquid et amet sequi nemo",
    url: "https://via.placeholder.com/600/56a8c2",
    thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
  },
  {
    albumId: 1,
    id: 7,
    title: "officia delectus consequatur vero aut veniam explicabo molestias",
    url: "https://via.placeholder.com/600/b0f7cc",
    thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
  },
  {
    albumId: 1,
    id: 8,
    title: "aut porro officiis laborum odit ea laudantium corporis",
    url: "https://via.placeholder.com/600/54176f",
    thumbnailUrl: "https://via.placeholder.com/150/54176f",
  },
  {
    albumId: 1,
    id: 9,
    title: "qui eius qui autem sed",
    url: "https://via.placeholder.com/600/51aa97",
    thumbnailUrl: "https://via.placeholder.com/150/51aa97",
  },
  {
    albumId: 1,
    id: 10,
    title: "beatae et provident et ut vel",
    url: "https://via.placeholder.com/600/810b14",
    thumbnailUrl: "https://via.placeholder.com/150/810b14",
  },
];
