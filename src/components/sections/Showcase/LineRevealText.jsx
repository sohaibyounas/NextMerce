"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TEXT =
  "Everything we do is designed to help you succeed. We build products that scale. We create designs that inspire. We develop features that matter.";

export default function LineRevealText() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const words = TEXT.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-white dark:bg-black overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-3xl md:text-5xl font-medium leading-[1.2] tracking-tight">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} range={[start, end]} progress={scrollYProgress}>
                {word}
              </Word>
            );
          })}
        </h3>
      </div>

      {/* Background Parallax Shape */}
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [-100, 100]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, 45]),
        }}
        className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10"
      />
    </section>
  );
}

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <span className="relative inline-block mr-3">
      <span className="absolute opacity-10">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
