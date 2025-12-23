"use client";

import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Sidebar - Contact Information */}
            <div className="md:col-span-1 bg-purple-50 p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MdEmail className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600">Email:</p>
                    <p className="text-base font-medium text-gray-900">
                      james@example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MdPhone className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600">Phone:</p>
                    <p className="text-base font-medium text-gray-900">
                      1234 567890
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MdLocationOn className="h-6 w-6 text-blue-700 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600">Address:</p>
                    <p className="text-base font-medium text-gray-900">
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
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="John"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Doe"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="Type your subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter your phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Type your message"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>

                <div className="text-center">
                  <button
                    // type="submit"
                    className="inline-flex items-center px-8 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition duration-200"
                  >
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
