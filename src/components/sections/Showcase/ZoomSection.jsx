"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ZoomSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 25]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        {/* The Central Image that Zooms */}
        <motion.div
          style={{ scale }}
          className="relative w-80 h-96 md:w-[600px] md:h-[400px] overflow-hidden rounded-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
            alt="Space"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay Content */}
        <motion.div
          style={{ opacity, scale: textScale }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center pointer-events-none"
        >
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase drop-shadow-2xl">
            Go Beyond
          </h2>
          <p className="text-xl text-blue-400 mt-4 font-mono">
            INITIATING DEEP SPACE TRAVERSAL
          </p>
        </motion.div>

        {/* Subtle Vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black pointer-events-none z-10" />
      </div>
    </section>
  );
}
