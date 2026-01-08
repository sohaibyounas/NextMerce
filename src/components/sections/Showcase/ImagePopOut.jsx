"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ImagePopOut() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  return (
    <section
      ref={containerRef}
      className="py-48 bg-gray-100 dark:bg-neutral-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="order-2 md:order-1">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-blue-500 font-bold tracking-widest uppercase mb-4 block"
          >
            Creative Perspective
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-bold dark:text-white mb-8">
            Breaking the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Boundaries
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Our UI systems aren't just flat layers; they're immersive
            environments that respond to your movement. Experience depth like
            never before with our advanced parallax engine.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-xl shadow-blue-500/20"
          >
            Launch Experience
          </motion.button>
        </div>

        <div className="relative order-1 md:order-2 h-[500px] flex items-center justify-center">
          {/* Main Container Frame */}
          <div className="relative w-80 h-[450px] bg-gray-200 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
            <img
              src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800"
              alt="Background"
              className="w-full h-full object-cover scale-125"
            />
          </div>

          {/* Popping Out Image Element */}
          <motion.div
            style={{ y, scale }}
            className="absolute top-0 right-0 w-64 h-64 z-20"
          >
            <div className="w-full h-full bg-blue-500 rounded-2xl shadow-2xl flex items-center justify-center p-4 transform rotate-12 overflow-hidden border-2 border-white">
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=500"
                alt="Tech"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 150]) }}
            className="absolute bottom-10 left-[-20px] w-48 h-48 z-30"
          >
            <div className="w-full h-full bg-purple-500 rounded-full shadow-2xl flex items-center justify-center p-2 transform -rotate-12 border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=500"
                alt="Laptop"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
