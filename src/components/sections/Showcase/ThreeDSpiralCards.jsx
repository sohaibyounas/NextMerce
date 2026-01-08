"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CARDS = [
  { id: 1, color: "bg-blue-500", text: "Innovation" },
  { id: 2, color: "bg-purple-500", text: "Design" },
  { id: 3, color: "bg-pink-500", text: "Speed" },
  { id: 4, color: "bg-orange-500", text: "Quality" },
  { id: 5, color: "bg-emerald-500", text: "Security" },
];

export default function ThreeDSpiralCards() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative h-[400vh] bg-[#050505] overflow-hidden"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center perspective-[2000px]">
        {CARDS.map((card, idx) => (
          <SpiralCard
            key={card.id}
            idx={idx}
            total={CARDS.length}
            progress={scrollYProgress}
            {...card}
          />
        ))}

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
          <motion.h2
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0, 0.2, 0.8, 1],
                [0, 1, 1, 0]
              ),
              scale: useTransform(scrollYProgress, [0, 0.5], [0.8, 1]),
            }}
            className="text-6xl md:text-9xl font-black text-white mix-blend-difference"
          >
            CORE
            <br />
            VALUES
          </motion.h2>
        </div>
      </div>
    </section>
  );
}

function SpiralCard({ idx, total, progress, color, text }) {
  // Each card has a slightly different rotation and delay based on scroll
  const offset = (idx / total) * 0.5;
  const start = offset;
  const end = offset + 0.4;

  const rotateZ = useTransform(
    progress,
    [start, end],
    [idx * 30, idx * 30 + 360]
  );
  const z = useTransform(progress, [start, end], [-1000, 200]);
  const opacity = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [0, 1, 1, 0]
  );
  const rotateX = useTransform(progress, [start, end], [45, 0]);

  return (
    <motion.div
      style={{
        rotateZ,
        z,
        opacity,
        rotateX,
      }}
      className={`absolute w-64 h-80 md:w-80 md:h-96 rounded-3xl ${color} flex items-end p-8 shadow-2xl origin-center border border-white/20`}
    >
      <span className="text-4xl font-black text-white uppercase">{text}</span>
    </motion.div>
  );
}
