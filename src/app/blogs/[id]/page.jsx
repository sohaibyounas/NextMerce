"use client";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Breadcrumb from "@/components/sections/Breadcrumb/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { blogPosts, categories } from "@/lib/blogData";
import {
  FaCalendarAlt,
  FaUser,
  FaClock,
  FaArrowLeft,
  FaSearch,
} from "react-icons/fa";

export default function BlogDetails() {
  const params = useParams();
  const id = parseInt(params.id);

  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto py-32 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Blog Not Found
          </h1>
          <Link
            href="/blogs"
            className="text-blue-600 font-bold hover:underline"
          >
            Back to All Blogs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Breadcrumb title="Blog Details" />

      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 font-medium mb-8 transition-colors"
            >
              <FaArrowLeft size={12} /> Back to Blogs
            </Link>

            <article>
              <div className="relative h-[400px] w-full rounded-3xl overflow-hidden mb-10 shadow-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg">
                  {post.category}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-6 border-b border-gray-100 pb-6">
                <span className="flex items-center gap-2">
                  <FaCalendarAlt className="text-blue-600" /> {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <FaUser className="text-blue-600" /> {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <FaClock className="text-blue-600" /> {post.readTime}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1C274C] mb-8 leading-tight">
                {post.title}
              </h1>

              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
                {post.content.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Quote Example */}
              <div className="my-10 p-8 bg-blue-50 border-l-4 border-blue-600 rounded-r-2xl italic text-gray-700 text-xl font-medium">
                "The best way to predict the future is to create it. Innovations
                in technology are not just about new gadgets, but about how they
                empower people to solve real-world problems."
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <h4 className="text-xl font-bold text-[#1C274C] mb-6">
                  Share this post:
                </h4>
                <div className="flex gap-4">
                  {["Facebook", "Twitter", "LinkedIn", "WhatsApp"].map(
                    (platform) => (
                      <button
                        key={platform}
                        className="px-6 py-2 bg-gray-50 hover:bg-blue-600 hover:text-white rounded-full text-sm font-bold text-gray-600 transition-all border border-gray-100"
                      >
                        {platform}
                      </button>
                    )
                  )}
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-10">
              {/* Categories */}
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h4 className="text-xl font-bold text-[#1C274C] mb-6">
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
                          {Math.floor(Math.random() * 10) + 1}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h4 className="text-xl font-bold text-[#1C274C] mb-6">
                  Recent Posts
                </h4>
                <div className="space-y-6">
                  {blogPosts
                    .filter((p) => p.id !== id)
                    .slice(0, 3)
                    .map((recentPost) => (
                      <Link
                        key={recentPost.id}
                        href={`/blogs/${recentPost.id}`}
                        className="flex gap-4 group"
                      >
                        <div className="relative w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden shadow-sm">
                          <Image
                            src={recentPost.image}
                            alt={recentPost.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h5 className="text-[15px] font-bold text-[#1C274C] line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors mb-2">
                            {recentPost.title}
                          </h5>
                          <span className="text-[12px] text-gray-400 font-medium">
                            {recentPost.date}
                          </span>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-xl shadow-blue-200">
                <h4 className="text-xl font-bold mb-4">
                  Subscribe to Newsletter
                </h4>
                <p className="text-blue-100 text-sm mb-6">
                  Get the latest tech news and blog updates straight to your
                  inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button className="w-full py-3 bg-white text-blue-600 font-bold rounded-2xl hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
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
