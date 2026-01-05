"use client";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Link from "next/link";
import {
  FaInfoCircle,
  FaServicestack,
  FaQuestionCircle,
  FaShoppingBag,
  FaBlog,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const pagesList = [
  {
    title: "About Us",
    description:
      "Learn more about our mission, values, and the team behind NextMerce.",
    icon: <FaInfoCircle className="text-3xl" />,
    href: "/about",
    bg: "bg-blue-50",
    text: "text-blue-500",
    hoverBg: "group-hover:bg-blue-500",
    hoverBorder: "hover:border-blue-500",
  },
  {
    title: "Our Services",
    description:
      "Explore the wide range of services we offer to help your business grow.",
    icon: <FaServicestack className="text-3xl" />,
    href: "/services",
    bg: "bg-purple-50",
    text: "text-purple-500",
    hoverBg: "group-hover:bg-purple-500",
    hoverBorder: "hover:border-purple-500",
  },
  {
    title: "FAQ",
    description:
      "Find answers to commonly asked questions about our products and services.",
    icon: <FaQuestionCircle className="text-3xl" />,
    href: "/faq",
    bg: "bg-green-50",
    text: "text-green-500",
    hoverBg: "group-hover:bg-green-500",
    hoverBorder: "hover:border-green-500",
  },
  {
    title: "Shop",
    description:
      "Browse our extensive collection of high-quality products and gadgets.",
    icon: <FaShoppingBag className="text-3xl" />,
    href: "/shop",
    bg: "bg-orange-50",
    text: "text-orange-500",
    hoverBg: "group-hover:bg-orange-500",
    hoverBorder: "hover:border-orange-500",
  },
  {
    title: "Latest Blogs",
    description:
      "Stay updated with the latest tech trends, guides, and industry news.",
    icon: <FaBlog className="text-3xl" />,
    href: "/blogs/latest",
    bg: "bg-red-50",
    text: "text-red-500",
    hoverBg: "group-hover:bg-red-500",
    hoverBorder: "hover:border-red-500",
  },
  {
    title: "Contact Us",
    description:
      "Get in touch with our support team for any inquiries or assistance.",
    icon: <FaEnvelope className="text-3xl" />,
    href: "/contact",
    bg: "bg-indigo-50",
    text: "text-indigo-500",
    hoverBg: "group-hover:bg-indigo-500",
    hoverBorder: "hover:border-indigo-500",
  },
];

export default function Pages() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Navigation Breadcrumb - Optional but nice */}
        <div className="bg-white border-b border-gray-200 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Pages</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-[#1C274C] text-white py-20 px-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

          <div className="container mx-auto text-center relative z-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Explore Our Site
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Find everything you need in one place. Navigate through our
              different sections to discover products, services, and expert
              insights.
            </p>
          </div>
        </section>

        {/* Grid Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pagesList.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className={`group bg-white rounded-3xl p-8 shadow-sm hover:shadow-[0_10px_30px_rgba(60,80,224,0.1)] transition-all duration-300 border border-gray-100 ${item.hoverBorder} flex flex-col h-full transform hover:-translate-y-[5px]`}
                >
                  <div
                    className={`icon-box w-16 h-16 ${item.bg} ${item.text} rounded-2xl flex items-center justify-center mb-6 ${item.hoverBg} group-hover:text-white transition-all duration-300`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-bold gap-2 group-hover:gap-4 transition-all">
                    Explore Now <FaArrowRight />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="bg-white py-20 px-4 border-t border-gray-100">
          <div className="container mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-800 rounded-[3rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

              <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between gap-12 relative">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-3xl font-bold mb-4">
                    Can't find what you're looking for?
                  </h2>
                  <p className="text-blue-100 text-lg max-w-xl">
                    Our support team is here to help you 24/7. Reach out to us
                    for any custom requests or technical issues.
                  </p>
                </div>
                {/* support + visit buttons */}
                <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
                  <Link
                    href="/contact"
                    className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-center hover:bg-gray-100 transition-all shadow-lg active:scale-95 whitespace-nowrap w-fit"
                  >
                    Contact Support
                  </Link>
                  <Link
                    href="/faq"
                    className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-center hover:bg-white/10 transition-all active:scale-95 whitespace-nowrap w-fit"
                  >
                    Visit FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
