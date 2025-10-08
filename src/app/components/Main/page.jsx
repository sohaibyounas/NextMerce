"use client";

import Image from "next/image";
import CCTV from "@/assets/products/cctv.png";
import Handphone from "@/assets/products/handphone.png";
import Mobile1 from "@/assets/products/mobile1.png";
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

export default function Mainarea() {
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
      <div className="grid grid-cols-12 gap-4 pt-8">
        {/* Image Slider */}
        <div className="col-span-8 px-2">
          <div className="relative w-full h-full overflow-hidden rounded-lg custom_slide">
            <Slider {...settings}>
              {/* image 1 */}
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Handphone.src})`,
                  }}
                />
                <div className="absolute" />
                {/* Content  */}
                <div className="relative z-10 h-full flex items-center justify-start p-8">
                  <div className="text-white max-w-md">
                    <p className="text-sm uppercase tracking-wide mb-6">
                      LIMITED EDITION
                    </p>
                    <h1 className="text-4xl font-bold mb-4 leading-tight">
                      Apple Airpod Max
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

              {/* img2 */}
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${MobileWallpaper.src})`,
                  }}
                />
                <div className="absolute" />
                {/* Content  */}
                <div className="relative z-10 h-full flex items-center justify-start p-8">
                  <div className="text-white max-w-md">
                    <p className="text-sm uppercase tracking-wide mb-6">
                      LIMITED EDITION
                    </p>
                    <h1 className="text-4xl font-bold mb-4 leading-tight">
                      iPhone 16 Pro Max
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

              {/* img3 */}
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Mobile2.src})`,
                  }}
                />
                <div className="absolute" />
                {/* Content  */}
                <div className="relative z-10 h-full flex items-center justify-start p-8">
                  <div className="text-white max-w-md">
                    <p className="text-sm uppercase tracking-wide mb-6">
                      LIMITED EDITION
                    </p>
                    <h1 className="text-4xl font-bold mb-4 leading-tight">
                      Apple Watch Ultra
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
              {/* slider ends */}
            </Slider>
          </div>
        </div>

        {/* Products */}
        <div className="col-span-4 grid grid-rows-2 gap-4 pr-2">
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

      {/* general texts */}
      <div className="flex items-center flex-wrap gap-4 xl-gap-12.5 mt-10 mx-[100px]">
        <div className="flex flex-row items-center gap-4 ">
          <div>
            <Image src={Icon1} alt="Icon1" width={40} height={41} />
          </div>
          <div>
            <h2>Free Shipping</h2>
            <p>For all orders $200</p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-4 ">
          <div>
            <Image src={Icon2} alt="Icon1" width={40} height={41} />
          </div>
          <div>
            <h2>1 & 1 Returns</h2>
            <p>Cancellation after 1 day</p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-4 ">
          <div>
            <Image src={Icon3} alt="Icon1" width={40} height={41} />
          </div>
          <div>
            <h2>100% Secure Payments</h2>
            <p>Gurantee secure payments</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div>
            <Image src={Icon4} alt="Icon1" width={40} height={41} />
          </div>
          <div>
            <h2>24/7 Dedicated </h2>
            <p>Support Anywhere & anytime</p>
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
      {/* <Feedback /> */}
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
