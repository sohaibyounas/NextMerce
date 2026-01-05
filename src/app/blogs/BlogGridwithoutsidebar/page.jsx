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
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Essential Gadgets for Every Tech Enthusiast in 2024",
    excerpt:
      "Discover the must-have gadgets that will redefine your digital lifestyle this year, from AI-powered wearables to next-gen workspace tools.",
    image: Gadgets,
    date: "Dec 30, 2023",
    author: "Alex Rivers",
    category: "Tech Trends",
  },
  {
    id: 2,
    title: "Mastering the Choice: How to Pick Your Next Smartphone",
    excerpt:
      "With so many options on the market, choosing a smartphone can be overwhelming. We break down the key features to look for based on your needs.",
    image: Smartphones,
    date: "Dec 28, 2023",
    author: "Sarah J. Miller",
    category: "Guides",
  },
  {
    id: 3,
    title: "Building the Ultimate Smart Home: From Bulbs to Bridges",
    excerpt:
      "Learn how to create a seamless, voice-controlled living space that enhances security, comfort, and energy efficiency across your entire home.",
    image: SmartHome,
    date: "Dec 25, 2023",
    author: "David Chen",
    category: "Smart Home",
  },
  {
    id: 4,
    title: "The Future of E-commerce: What to Expect in the Next Decade",
    excerpt:
      "Explore the emerging trends in online shopping, including virtual try-ons, hyper-personalization, and the role of sustainable practices.",
    image: Ecommerce,
    date: "Dec 22, 2023",
    author: "Emily Watson",
    category: "E-commerce",
  },
  {
    id: 5,
    title: "Why Sustainability is the New Must-Have in Tech",
    excerpt:
      "As environmental concerns grow, tech companies are pivoting towards greener manufacturing and longer product lifecycles.",
    image: Gadgets,
    date: "Dec 15, 2023",
    author: "Michael Green",
    category: "Opinion",
  },
  {
    id: 6,
    title: "The Rise of Augmented Reality in Everyday Gadgets",
    excerpt:
      "AR is no longer just for gaming. From smart glasses to navigation, learn how AR is integrating into our daily lives.",
    image: Smartphones,
    date: "Dec 10, 2023",
    author: "Chris Tech",
    category: "Futurism",
  },
];

export default function BlogGridWithoutSidebar() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Breadcrumb title="Blog Grid Full Width" />

      <main className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Explore Our Full Story Collection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dive deep into our articles without distractions. Pure content, pure
            insight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {post.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
                  <span className="flex items-center gap-1 font-medium italic">
                    <FaUser className="text-blue-500" /> {post.author}
                  </span>
                  <span className="flex items-center gap-1 font-medium italic">
                    <FaCalendarAlt className="text-blue-500" /> {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 line-clamp-3 mb-6 flex-grow text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blogs/${post.id}`}
                  className="inline-flex items-center justify-center gap-2 bg-gray-50 text-blue-600 py-3 px-6 rounded-xl font-bold text-sm group-hover:bg-blue-600 group-hover:text-white transition-all w-full"
                >
                  Read Article <FaArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-16 text-center">
          <button className="px-10 py-4 bg-white border-2 border-blue-600 text-blue-600 font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-md hover:shadow-lg active:scale-95">
            Load More Content
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
