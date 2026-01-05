"use client";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
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
    readTime: "5 min read",
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
    readTime: "8 min read",
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
    readTime: "10 min read",
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
    readTime: "6 min read",
  },
];

export default function LatestPosts() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#1C274C] text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Latest Insights & Stories
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Stay ahead of the curve with our latest blog posts, expert guides,
              and tech reviews designed to keep you informed.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              {blogPosts.map(
                (post) =>
                  post.id <= 2 && (
                    <div
                      key={post.id}
                      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col md:flex-row h-full"
                    >
                      <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          {post.category}
                        </div>
                      </div>
                      <div className="md:w-1/2 p-8 flex flex-col">
                        <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt className="text-blue-500" />{" "}
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaUser className="text-blue-500" /> {post.author}
                          </span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-6 flex-grow">
                          {post.excerpt}
                        </p>
                        <Link
                          href={`/blogs/${post.id}`}
                          className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
                        >
                          Read More <FaArrowRight />
                        </Link>
                      </div>
                    </div>
                  )
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {blogPosts.map(
                (post) =>
                  post.id > 2 && (
                    <div
                      key={post.id}
                      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt /> {post.date}
                          </span>
                          <span className="text-xs">• {post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-6 flex-grow">
                          {post.excerpt}
                        </p>
                        <Link
                          href={`/blogs/${post.id}`}
                          className="inline-flex items-center gap-2 text-blue-600 text-sm font-bold hover:gap-3 transition-all uppercase tracking-wide"
                        >
                          Read Full Article <FaArrowRight fontSize={12} />
                        </Link>
                      </div>
                    </div>
                  )
              )}
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
                Never Miss an Update
              </h2>
              <p className="text-blue-100 mb-8 max-w-xl mx-auto relative z-10">
                Subscribe to our newsletter and get the latest tech reviews,
                guides, and e-commerce insights delivered straight to your
                inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto relative z-10">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-400 transition-all font-medium"
                  required
                />
                <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:scale-105 active:scale-95">
                  Subscribe Now
                </button>
              </form>
              <p className="mt-6 text-blue-200 text-xs relative z-10">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
