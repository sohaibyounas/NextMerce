"use client";

import Image from "next/image";
import CCTV from "@/assets/products/cctv.png";
import Mobile1 from "@/assets/products/mobile1.png";
import Handphone from "@/assets/products/handphone.png";
import Mobile2 from "@/assets/products/mobile2.png";
import MobileWallpaper from "@/assets/products/mobile-wallpaper.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Icon1 from "@/assets/icons/icon-01.svg";
import Icon2 from "@/assets/icons/icon-02.svg";
import Icon3 from "@/assets/icons/icon-03.svg";
import Icon4 from "@/assets/icons/icon-04.svg";
import Category from "../Category/page";
import Shop from "../shop-slider/page";
import Phonedetail from "../Phonedetail/page";
import Seller from "../BestSeller/page";
import Fitness from "@/assets/newarrivals/fitness-runner.png";
import GrayLCD from "@/assets/newarrivals/graylcd.png";
import Iphone from "@/assets/newarrivals/iphone17.png";
import Juicer from "@/assets/newarrivals/juicer.png";
import Monitor from "@/assets/newarrivals/monitor.png";
import Screen from "@/assets/newarrivals/lcdscreen.png";
import Explore from "../Explore/page";
import Feedback from "../Feedback/page";
import Footer from "../Footer/page";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Mainarea() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((response) => {
        console.log("respone", response.data);
        setImages(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
        setLoading(false);
      });
  }, []);

  // slider styles
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  return (
    <>
      {/* slider and cards */}
      <div className="grid grid-cols-12 gap-4 pt-4 md:pt-8">
        {/* Image Slider */}
        <div className="col-span-12 lg:col-span-8 px-4 lg:px-2">
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-lg custom_slide bg-gray-100 flex items-center justify-center">
            {loading ? (
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <Slider {...settings} className="w-full h-full">
                {images.map((img) => (
                  <div
                    key={img.id}
                    className="relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-lg overflow-hidden"
                  >
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${img.url})` }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30" />
                    {/* Content */}
                    <div className="relative z-10 h-full flex items-center justify-start p-6 md:p-8">
                      <div className="text-white max-w-md">
                        <p className="text-xs md:text-sm uppercase tracking-wide mb-3 md:mb-6">
                          LIMITED EDITION
                        </p>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                          {img.title}
                        </h1>
                        <p className="text-sm md:text-lg mb-6 line-clamp-2 md:line-clamp-none">
                          Featuring A18 Chip, Liquid Glass, and AI-Powered
                          Innovation
                        </p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold transition-colors duration-200 text-sm md:text-base">
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>

        {/* Products */}
        <div className="col-span-12 lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 px-4 lg:px-0 lg:pr-2">
          {/* First card */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col flex-1">
            <div className="flex items-start justify-between flex-1">
              <div className="flex-1">
                <div className="max-w-[180px]">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 leading-tight mb-4">
                    Smart Security Home Camera
                  </h3>
                </div>
              </div>
              <div className="relative w-24 h-24 sm:w-32 sm:h-24 ml-4">
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
                <span className="text-lg text-blue-600 font-bold ml-2">
                  $450
                </span>
              </p>
            </div>
          </div>

          {/* Second card */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col flex-1">
            <div className="flex items-start justify-between flex-1">
              <div className="flex-1">
                <div className="max-w-[180px]">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 leading-tight mb-4">
                    Top Trending Smart Mobiles
                  </h3>
                </div>
              </div>
              <div className="relative w-24 h-24 sm:w-32 sm:h-24 ml-4">
                <Image
                  src={Mobile1}
                  alt="Smart Mobile"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-700 font-medium">
                Save up to
                <span className="text-lg text-blue-600 font-bold ml-2">
                  $450
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* value propositions section */}
      <div className="container mx-auto px-4 mt-8 md:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
          {/* 1st image */}
          <div className="flex flex-row items-center gap-4 justify-center sm:justify-start">
            <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full">
              <Image src={Icon1} alt="Icon1" width={32} height={32} />
            </div>
            <div>
              <h2 className="text-base font-bold text-[#1C274C]">
                Free Shipping
              </h2>
              <p className="text-sm text-gray-500">For all orders over $200</p>
            </div>
          </div>

          {/* 2nd image */}
          <div className="flex flex-row items-center gap-4 justify-center sm:justify-start">
            <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full">
              <Image src={Icon2} alt="Icon1" width={32} height={32} />
            </div>
            <div>
              <h2 className="text-base font-bold text-[#1C274C]">
                1 & 1 Returns
              </h2>
              <p className="text-sm text-gray-500">Cancellation after 1 day</p>
            </div>
          </div>

          {/* 3rd image */}
          <div className="flex flex-row items-center gap-4 justify-center sm:justify-start">
            <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full">
              <Image src={Icon3} alt="Icon1" width={32} height={32} />
            </div>
            <div>
              <h2 className="text-base font-bold text-[#1C274C]">
                100% Secure Payments
              </h2>
              <p className="text-sm text-gray-500">Guarantee secure payments</p>
            </div>
          </div>

          {/* 4th image */}
          <div className="flex flex-row items-center gap-4 justify-center sm:justify-start">
            <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full">
              <Image src={Icon4} alt="Icon1" width={32} height={32} />
            </div>
            <div>
              <h2 className="text-base font-bold text-[#1C274C]">
                24/7 Support
              </h2>
              <p className="text-sm text-gray-500">Anywhere & anytime</p>
            </div>
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
