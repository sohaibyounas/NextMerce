"use client";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Breadcrumb from "@/components/sections/Breadcrumb/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import Gadgets from "@/assets/blogs/gadgets.png";
import Smartphones from "@/assets/blogs/smartphones.png";
import SmartHome from "@/assets/blogs/smarthome.png";
import Ecommerce from "@/assets/blogs/ecommerce.png";
import {
  FaArrowRight,
  FaCode,
  FaMobileAlt,
  FaHome,
  FaShoppingCart,
  FaLightbulb,
  FaCogs,
} from "react-icons/fa";

const categories = [
  {
    name: "Tech Trends",
    icon: <FaCode />,
    count: 24,
    image: Gadgets,
    color: "bg-blue-600",
    desc: "Stay updated with the latest in software, algorithms, and industry shifts.",
  },
  {
    name: "Mobile Guides",
    icon: <FaMobileAlt />,
    count: 18,
    image: Smartphones,
    color: "bg-purple-600",
    desc: "Expert advice on choosing and mastering your next handheld device.",
  },
  {
    name: "Smart Home",
    icon: <FaHome />,
    count: 12,
    image: SmartHome,
    color: "bg-green-600",
    desc: "Transform your living space with the power of IoT and automation.",
  },
  {
    name: "E-commerce",
    icon: <FaShoppingCart />,
    count: 15,
    image: Ecommerce,
    color: "bg-orange-600",
    desc: "Business insights and shopping tips for the modern digital consumer.",
  },
  {
    name: "Innovation",
    icon: <FaLightbulb />,
    count: 9,
    image: Gadgets,
    color: "bg-yellow-600",
    desc: "Exploring the boundary-pushing ideas that redefine our world.",
  },
  {
    name: "Reviews",
    icon: <FaCogs />,
    count: 32,
    image: Smartphones,
    color: "bg-red-600",
    desc: "Honest, hands-on evaluations of the latest market offerings.",
  },
];

export default function BlogCategories() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Breadcrumb title="Blog Categories" />

      <main className="container mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Browse by Interest
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto italic font-medium">
            Find the content that matters most to you through our curated
            categories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-[450px]"
            >
              {/* Image Background with Gradient Overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 p-10 mt-auto flex flex-col items-start h-full justify-end text-white">
                <div
                  className={`p-4 rounded-2xl ${cat.color} mb-6 text-2xl shadow-lg ring-4 ring-white/20 group-hover:scale-110 transition-transform`}
                >
                  {cat.icon}
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-3xl font-bold">{cat.name}</h3>
                  <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold ring-1 ring-white/30">
                    {cat.count} Posts
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-8 line-clamp-2 max-w-[280px]">
                  {cat.desc}
                </p>
                <Link
                  href={`/blogs?category=${cat.name
                    .toLowerCase()
                    .replace(" ", "-")}`}
                  className="inline-flex items-center gap-2 bg-white text-gray-900 py-3 px-8 rounded-full font-bold text-sm hover:bg-black hover:text-white transition-all shadow-xl active:scale-95 group-hover:translate-x-2"
                >
                  Explore Category <FaArrowRight size={12} />
                </Link>
              </div>

              {/* Hover highlight line */}
              <div
                className={`absolute bottom-0 left-0 h-2 w-0 group-hover:w-full transition-all duration-500 ${cat.color} z-20 shadow-[0_-10px_20px_rgba(0,0,0,0.2)]`}
              ></div>
            </div>
          ))}
        </div>

        {/* Explore all section */}
        <div className="mt-20 bg-white rounded-[50px] p-12 md:p-20 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Can't find what you're looking for?
            </h3>
            <p className="text-gray-600 text-lg mb-8 italic">
              Our search tool can help you find specific topics across all
              categories and dates.
            </p>
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search entire blog..."
                className="w-full px-8 py-4 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all font-medium"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all shadow-md">
                <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="h-40 bg-gray-100 rounded-[30px] flex items-center justify-center text-gray-400 font-bold text-sm uppercase tracking-widest border-2 border-dashed border-gray-200">
              New Content
            </div>
            <div className="h-40 bg-blue-50 rounded-[30px] flex items-center justify-center text-blue-300 font-bold text-sm uppercase tracking-widest border-2 border-dashed border-blue-100 mt-8">
              Weekly Updates
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
