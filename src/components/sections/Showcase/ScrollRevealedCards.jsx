"use client";
import { motion } from "framer-motion";

const CARDS = [
  {
    title: "Mountain peaks",
    desc: "Explore the highest summits of the world.",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Dense Forests",
    desc: "Venture into the heart of the wild.",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Golden Deserts",
    desc: "Witness the endless beauty of dunes.",
    img: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Ocean Depths",
    desc: "Discover what lies beneath the waves.",
    img: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=800",
  },
];

export default function ScrollRevealedCards() {
  return (
    <section className="py-24 bg-[#0B1120] px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 text-center">
          Explore Nature
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CARDS.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-colors group"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-400">{card.desc}</p>
                <div className="mt-6 w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="h-full bg-blue-500"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
