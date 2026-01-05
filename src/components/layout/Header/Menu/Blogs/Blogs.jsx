"use client";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Image from "next/image";
import Link from "next/link";
import Gadgets from "@/assets/blogs/gadgets.png";
import Smartphones from "@/assets/blogs/smartphones.png";
import SmartHome from "@/assets/blogs/smarthome.png";
import Ecommerce from "@/assets/blogs/ecommerce.png";
import Breadcrumb from "@/components/sections/Breadcrumb/Breadcrumb";
import { FaCalendarAlt, FaUser, FaArrowRight, FaSearch } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Essential Gadgets for Every Tech Enthusiast in 2024",
    excerpt:
      "Discover the must-have gadgets that will redefine your digital lifestyle this year.",
    image: Gadgets,
    date: "Dec 30, 2023",
    author: "Alex Rivers",
    category: "Tech Trends",
  },
  {
    id: 2,
    title: "Mastering the Choice: How to Pick Your Next Smartphone",
    excerpt:
      "With so many options on the market, choosing a smartphone can be overwhelming.",
    image: Smartphones,
    date: "Dec 28, 2023",
    author: "Sarah J. Miller",
    category: "Guides",
  },
  {
    id: 3,
    title: "Building the Ultimate Smart Home: From Bulbs to Bridges",
    excerpt: "Learn how to create a seamless, voice-controlled living space.",
    image: SmartHome,
    date: "Dec 25, 2023",
    author: "David Chen",
    category: "Smart Home",
  },
  {
    id: 4,
    title: "The Future of E-commerce: What to Expect in the Next Decade",
    excerpt:
      "Explore the emerging trends in online shopping, including virtual try-ons.",
    image: Ecommerce,
    date: "Dec 22, 2023",
    author: "Emily Watson",
    category: "E-commerce",
  },
];

const categories = [
  "Tech Trends",
  "Guides",
  "Smart Home",
  "E-commerce",
  "Reviews",
  "General",
];

export default function Blogs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Breadcrumb title="Our Blogs" />

      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-blue-600 font-bold uppercase tracking-wider mb-3">
                      {post.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-3 text-gray-500 text-sm mb-4">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt size={12} /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaUser size={12} /> {post.author}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blogs/${post.id}`}
                      className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-3 transition-all"
                    >
                      READ MORE <FaArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold shadow-md">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                3
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                <FaArrowRight size={12} />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-10">
              {/* Search */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h4 className="text-xl font-bold text-gray-800 mb-6">
                  Search Blogs
                </h4>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search keywords..."
                    className="w-full px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    <FaSearch size={14} />
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h4 className="text-xl font-bold text-gray-800 mb-6 font-primary">
                  Categories
                </h4>
                <ul className="space-y-4">
                  {categories.map((cat, i) => (
                    <li key={i}>
                      <Link
                        href="#"
                        className="flex items-center justify-between text-gray-600 hover:text-blue-600 transition-colors group"
                      >
                        <span className="font-medium">{cat}</span>
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-100 text-xs font-bold group-hover:bg-blue-600 group-hover:text-white transition-all">
                          0{i + 1}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h4 className="text-xl font-bold text-gray-800 mb-6 font-primary">
                  Recent Posts
                </h4>
                <div className="space-y-6">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div
                      key={post.id}
                      className="flex gap-4 group cursor-pointer"
                    >
                      <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h5 className="text-[15px] font-bold text-gray-800 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors mb-2">
                          {post.title}
                        </h5>
                        <span className="text-[12px] text-gray-400 font-medium">
                          {post.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h4 className="text-xl font-bold text-gray-800 mb-6 font-primary">
                  Popular Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Technology",
                    "Gadgets",
                    "Smart Home",
                    "Mobile",
                    "Shopping",
                    "Reviews",
                    "Lifestyle",
                    "Future",
                  ].map((tag, i) => (
                    <Link
                      key={i}
                      href="#"
                      className="px-4 py-2 bg-white border border-gray-100 rounded-lg text-sm text-gray-600 font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
