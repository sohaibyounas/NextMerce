"use client";

import { useAppTheme } from "@/hooks/useAppTheme";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Contact() {
  const { mounted, isDark } = useAppTheme();

  if (!mounted) return null;
  console.info("mounted info", mounted, isDark);

  return (
    <div
      className={`min-h-screen py-12 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`shadow-lg rounded-lg overflow-hidden ${
            isDark ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Sidebar - Contact Information */}
            <div
              className={`md:col-span-1 p-8 lg:p-12 ${
                isDark ? "bg-gray-700" : "bg-purple-50"
              }`}
            >
              <h2
                className={`text-2xl font-bold mb-8 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Contact Information
              </h2>

              <div className="space-y-8">
                {/* email info */}
                <div className="flex items-start gap-4">
                  <MdEmail
                    className={`h-6 w-6 shrink-0 mt-1 ${
                      isDark ? "text-white" : "text-blue-700"
                    }`}
                  />
                  <div>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Email:
                    </p>
                    <p
                      className={`text-base font-medium ${
                        isDark ? "text-gray-200" : "text-gray-900"
                      }`}
                    >
                      james@example.com
                    </p>
                  </div>
                </div>

                {/* phone info */}
                <div className="flex items-start gap-4">
                  <MdPhone
                    className={`h-6 w-6 shrink-0 mt-1 ${
                      isDark ? "text-white" : "text-blue-700"
                    }`}
                  />
                  <div>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Phone:
                    </p>
                    <p
                      className={`text-base font-medium ${
                        isDark ? "text-gray-200" : "text-gray-900"
                      }`}
                    >
                      1234 567890
                    </p>
                  </div>
                </div>

                {/* address info */}
                <div className="flex items-start gap-4">
                  <MdLocationOn
                    className={`h-6 w-6 shrink-0 mt-1 ${
                      isDark ? "text-white" : "text-blue-700"
                    }`}
                  />
                  <div>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Address:
                    </p>
                    <p
                      className={`text-base font-medium ${
                        isDark ? "text-gray-200" : "text-gray-900"
                      }`}
                    >
                      7398 Smoke Ranch Road
                      <br />
                      Las Vegas, Nevada 89128
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Form */}
            <div className="md:col-span-2 p-8 lg:p-12">
              <form className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className={`block text-sm font-medium mb-1 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="John"
                      required
                      className={`w-full px-4 py-3 border rounded-[30px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        isDark
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          : "bg-white border-gray-300 text-gray-900"
                      }`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className={`block text-sm font-medium mb-1 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Doe"
                      required
                      className={`w-full px-4 py-3 border rounded-[30px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        isDark
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          : "bg-white border-gray-300 text-gray-900"
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="subject"
                      className={`block text-sm font-medium mb-1 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="Type your subject"
                      required
                      className={`w-full px-4 py-3 border rounded-[30px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        isDark
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          : "bg-white border-gray-300 text-gray-900"
                      }`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className={`block text-sm font-medium mb-1 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter your phone"
                      required
                      className={`w-full px-4 py-3 border rounded-[30px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        isDark
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          : "bg-white border-gray-300 text-gray-900"
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-1 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Type your message"
                    required
                    className={`w-full px-4 py-3 border rounded-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                      isDark
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-900"
                    }`}
                  />
                </div>

                <div className="text-center">
                  <button className="inline-flex items-center px-8 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition duration-200">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
