"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const ITEMS = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=800",
    title: "Project Alpha",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
    title: "Project Beta",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
    title: "Project Gamma",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800",
    title: "Project Delta",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    title: "Project Epsilon",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&q=80&w=800",
    title: "Project Zeta",
  },
];

export default function HorizontalScrollGallery() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-12">
          {ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative h-[450px] w-[350px] md:h-[600px] md:w-[600px] overflow-hidden rounded-3xl bg-neutral-200"
            >
              <img
                src={item.url}
                alt={item.title}
                className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="bg-linear-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
                  {item.title}
                </p>
              </div>
              <div className="absolute inset-x-0 bottom-0 z-20 h-1/2 bg-linear-to-t from-black/50 to-transparent" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
