"use client";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Breadcrumb from "@/components/sections/Breadcrumb/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import Gadgets from "@/assets/blogs/gadgets.png";
import Smartphones from "@/assets/blogs/smartphones.png";
import {
  FaCalendarAlt,
  FaUser,
  FaQuoteLeft,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export default function BlogDetails() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Breadcrumb title="The Future of Wearable Technology" />

      <main className="container mx-auto py-16 px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Article Content */}
          <article className="lg:w-2/3">
            <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden mb-8 shadow-xl">
              <Image
                src={Gadgets}
                alt="Main Blog Image"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-500 text-sm border-b pb-8">
              <span className="flex items-center gap-2">
                <FaUser className="text-blue-600" /> By Alex Rivers
              </span>
              <span className="flex items-center gap-2">
                <FaCalendarAlt className="text-blue-600" /> December 30, 2023
              </span>
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-bold text-xs">
                TECH TRENDS
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
              Top 10 Essential Gadgets for Every Tech Enthusiast in 2024
            </h1>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6 leading-relaxed">
              <p>
                As we step into 2024, the landscape of technology continues to
                evolve at an unprecedented pace. From the integration of
                advanced Artificial Intelligence into our daily wearables to the
                emergence of revolutionary workspace tools, the gadgets of today
                are more than just electronics; they are essential companions in
                our digital lives.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
                The AI Revolution in Wearables
              </h2>
              <p>
                Smartwatches and fitness trackers are no longer just for
                counting steps. In 2024, they have become sophisticated health
                monitors capable of providing real-time insights into sleep
                quality, stress levels, and even early signs of illness using
                predictive AI algorithms.
              </p>

              <blockquote className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-600 my-10 relative">
                <FaQuoteLeft className="text-blue-100 absolute top-4 right-4 text-6xl opacity-20" />
                <p className="text-xl font-medium text-blue-900 italic relative z-10">
                  "Technology is most powerful when it empowers individuals to
                  understand themselves better and live more efficiently."
                </p>
                <cite className="block mt-4 text-blue-600 font-bold not-italic">
                  — Tech Visionary Weekly
                </cite>
              </blockquote>

              <p>
                Next on our list is the rise of foldable smartphones. While
                they've been around for a few years, 2024 marks the year they've
                finally hit their stride in durability and software
                optimization. Multitasking on a pocketable tablet has never been
                more seamless.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={Smartphones}
                    alt="Sub content"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Connectivity Beyond Limits
                  </h3>
                  <p className="text-sm">
                    With the global rollout of 6G prototypes and widespread
                    satellite SOS features, staying connected in the remotest
                    parts of the world is now a reality for the average
                    consumer.
                  </p>
                </div>
              </div>

              <p>
                In conclusion, whether you're a hardcore developer or just
                someone who loves cool tech, 2024 offers a plethora of
                innovations that promise to make our lives easier, healthier,
                and more connected. Stay tuned as we dive deeper into each of
                these gadgets in our upcoming individual reviews.
              </p>
            </div>

            {/* Share & Tags */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex gap-2">
                {["Gadgets", "Innovation", "2024"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-all cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-gray-400">
                  SHARE THIS:
                </span>
                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-all">
                    <FaFacebook />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:scale-110 transition-all">
                    <FaTwitter />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:scale-110 transition-all">
                    <FaLinkedin />
                  </button>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 bg-gray-50 rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-center border border-gray-100">
              <div className="w-24 h-24 rounded-full overflow-hidden relative border-4 border-white shadow-md">
                <Image
                  src="https://i.pravatar.cc/150?img=68"
                  alt="Author"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold text-gray-800 mb-1">
                  Alex Rivers
                </h4>
                <p className="text-blue-600 text-sm font-bold mb-3">
                  Senior Tech Editor
                </p>
                <p className="text-gray-500 text-sm italic">
                  Alex has been covering the tech industry for over a decade,
                  specializing in consumer electronics and future trends. When
                  not writing, he's probably testing a new espresso machine.
                </p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-24 space-y-10">
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h4 className="text-xl font-bold text-gray-800 mb-6">
                  Recent Posts
                </h4>
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-4 group cursor-pointer">
                      <div className="w-20 h-20 rounded-xl overflow-hidden relative flex-shrink-0">
                        <Image
                          src={Smartphones}
                          alt="Recent"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                          How to pick your next flagship smartphone...
                        </h5>
                        <p className="text-xs text-gray-400 mt-2">
                          Dec 28, 2023
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#1C274C] to-[#3C50E0] p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-4 leading-tight">
                    Join our Tech Community
                  </h4>
                  <p className="text-blue-100 text-sm mb-6">
                    Get weekly updates on the coolest gadgets and best
                    e-commerce deals delivered to your inbox.
                  </p>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:bg-white/20 mb-4"
                  />
                  <button className="w-full py-3 bg-yellow-400 text-blue-900 font-bold rounded-full hover:bg-yellow-500 transition-all shadow-lg active:scale-95">
                    Subscribe Now
                  </button>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
