"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IoAlertCircleOutline,
  IoArrowBack,
  IoHomeOutline,
  IoRefreshOutline,
} from "react-icons/io5";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <>
      <Header />
      <div className="min-h-[30vh] flex items-center justify-center px-4 py-16 bg-white dark:bg-[#0B1120] transition-colors duration-500 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative w-full max-w-2xl animate-in fade-in zoom-in duration-700">
          <div className="bg-[#1C274C]/5 dark:bg-[#1E293B]/60 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Subtle pulse animation on top right */}
            <div className="absolute top-4 right-4">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-red-500/10 p-3 rounded-2xl">
                  <IoAlertCircleOutline className="text-3xl text-red-500" />
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#1C274C] dark:text-white tracking-tight">
                  Unknown error
                </h1>
              </div>

              <div className="space-y-2">
                <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
                  We couldn't load this page.
                </p>
                <p className="text-gray-500 dark:text-gray-500">
                  Try again or return to the dashboard.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <Link
                  href="/"
                  className="flex items-center justify-center gap-3 bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-blue-500/25"
                >
                  <IoHomeOutline className="text-xl" />
                  Go to dashboard
                </Link>

                <button
                  onClick={() => window.history.back()}
                  className="flex items-center justify-center gap-3 bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-800 text-[#1C274C] dark:text-gray-200 font-bold py-4 px-6 rounded-2xl border border-transparent dark:border-gray-700 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <IoArrowBack className="text-xl" />
                  Go back
                </button>

                <button
                  onClick={() => window.location.reload()}
                  className="flex items-center justify-center gap-3 bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-800 text-[#1C274C] dark:text-gray-200 font-bold py-4 px-6 rounded-2xl border border-transparent dark:border-gray-800 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <IoRefreshOutline className="text-xl" />
                  Try again
                </button>

                <button className="flex items-center justify-center gap-3 bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-800 text-[#1C274C] dark:text-gray-200 font-bold py-4 px-6 rounded-2xl border border-transparent dark:border-gray-700 transition-all duration-300 transform hover:scale-[1.02]">
                  Stay on this page
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                <p className="text-sm font-mono text-gray-500 dark:text-gray-600 truncate">
                  Path: <span className="text-blue-500/80">{pathname}</span>
                </p>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-700 font-bold">
                  Error Code: 404
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
