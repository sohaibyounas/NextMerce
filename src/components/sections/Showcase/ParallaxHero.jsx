"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const midgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[120vh] overflow-hidden bg-black flex items-center justify-center pt-20"
    >
      {/* Background Layer (Sky/Stars) */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
        <img
          src="/parallax_bg_sky_1767853338110.png"
          alt="Sky"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Midground Layer (Mountains) */}
      <motion.div style={{ y: midgroundY }} className="absolute inset-0 z-10">
        <img
          src="/parallax_mid_mountains_1767853353674.png"
          alt="Mountains"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Hero Text */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-20 text-center px-4"
      >
        <h1 className="text-6xl md:text-[10rem] font-black text-white uppercase leading-none tracking-tighter drop-shadow-2xl">
          Ethereal
          <br />
          Heights
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mt-4 tracking-[0.5em] font-light">
          BEYOND THE HORIZON
        </p>
      </motion.div>

      {/* Foreground Layer (Trees/Rocks) */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <img
          src="/parallax_fore_hills_1767853369108.png"
          alt="Foreground"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Fade to Bottom */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-40" />
    </section>
  );
}
