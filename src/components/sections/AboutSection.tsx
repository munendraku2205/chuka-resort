"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TreePine, Shield, Leaf, Award } from "lucide-react";
import { STATS } from "@/constants";

const features = [
  { icon: TreePine, title: "Eco-Friendly",   desc: "Sustainable harmony with nature" },
  { icon: Shield,   title: "Safe & Secure",  desc: "24/7 trained wildlife experts" },
  { icon: Leaf,     title: "Organic Living", desc: "Farm-to-table local ingredients" },
  { icon: Award,    title: "Award Winning",  desc: "Excellence in eco-tourism" },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" ref={ref} className="py-12 md:py-16 lg:py-20 bg-white" aria-labelledby="about-heading">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

        {/* Mobile header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="md:hidden mb-6"
        >
          <span className="text-green-700 font-bold text-[11px] uppercase tracking-[0.12em]">About Our Resort</span>
          <h2 id="about-heading" className="mt-2 text-[26px] font-bold text-gray-900 leading-tight tracking-tight">
            Where Jungle Meets <span className="text-green-700">Luxury</span>
          </h2>
          <p className="text-[13.5px] text-gray-500 mt-2 leading-relaxed">
            Your gateway to the Pilibhit Tiger Reserve
          </p>
          {/* Feature chips */}
          <div className="flex gap-3 overflow-x-auto scroll-x pb-2 -mx-4 px-4 mt-4" role="list">
            {features.map((f) => (
              <div key={f.title} role="listitem" className="flex items-center gap-2.5 px-3.5 py-2.5 bg-green-50 rounded-[14px] shrink-0 border border-green-100">
                <div className="w-7 h-7 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                  <f.icon size={14} className="text-green-700" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-[11px] leading-tight">{f.title}</p>
                  <p className="text-[9.5px] text-gray-500 mt-0.5 leading-tight">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="grid grid-cols-2 gap-2.5"
          >
            <div className="space-y-2.5">
              <div className="rounded-[16px] overflow-hidden shadow-card">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=85" alt="Aerial view of Chuka Resort" className="w-full aspect-[4/3] object-cover hover:scale-[1.03] transition-transform duration-700" loading="lazy" />
              </div>
              <div className="rounded-[16px] overflow-hidden shadow-card">
                <img src="https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=500&q=85" alt="Resort infinity pool" className="w-full aspect-[3/4] object-cover hover:scale-[1.03] transition-transform duration-700" loading="lazy" />
              </div>
            </div>
            <div className="space-y-2.5 pt-6">
              <div className="rounded-[16px] overflow-hidden shadow-card">
                <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&q=85" alt="Jungle safari experience" className="w-full aspect-[3/4] object-cover hover:scale-[1.03] transition-transform duration-700" loading="lazy" />
              </div>
              <div className="rounded-[16px] overflow-hidden shadow-card">
                <img src="https://images.unsplash.com/photo-1475483768296-6163e8f3e3b0?w=500&q=85" alt="Bonfire gathering at night" className="w-full aspect-[4/3] object-cover hover:scale-[1.03] transition-transform duration-700" loading="lazy" />
              </div>
            </div>
          </motion.div>

          {/* Desktop text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="hidden md:block"
          >
            <span className="text-green-700 font-bold text-[11px] uppercase tracking-[0.12em]">About Our Resort</span>
            <h2 id="about-heading" className="mt-2 text-[1.75rem] lg:text-[2.125rem] font-bold text-gray-900 tracking-tight leading-tight">
              Where Jungle Meets <span className="text-green-700">Luxury</span>
            </h2>
            <p className="mt-3.5 text-gray-500 leading-relaxed text-[15px] max-w-[440px]">
              Nestled at the edge of the Pilibhit Tiger Reserve, Chuka Eco Resort offers a unique
              blend of wilderness adventure and five-star comfort. Wake up to birdsong, dine under the stars.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3" role="list">
              {features.map((f) => (
                <div key={f.title} role="listitem" className="flex items-start gap-3 p-3.5 rounded-[14px] hover:bg-green-50 transition-colors border border-transparent hover:border-green-100 group">
                  <div className="p-2 bg-green-50 group-hover:bg-green-100 rounded-xl shrink-0 transition-colors">
                    <f.icon size={15} className="text-green-700" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-[13px]">{f.title}</p>
                    <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-7 grid grid-cols-4 gap-2 p-5 bg-green-50 rounded-[18px] border border-green-100" role="list" aria-label="Resort statistics">
              {STATS.map((stat) => (
                <div key={stat.label} role="listitem" className="text-center">
                  <div className="text-[1.375rem] font-extrabold text-green-800 leading-none">{stat.value}</div>
                  <div className="text-[10px] text-gray-500 mt-1.5 leading-tight font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="md:hidden mt-5"
        >
          <p className="text-[13.5px] text-gray-600 leading-relaxed">
            Nestled at the edge of the Pilibhit Tiger Reserve — where wilderness meets five-star comfort.
          </p>
          <div className="mt-4 grid grid-cols-4 gap-2 p-4 bg-green-50 rounded-[14px] border border-green-100" role="list" aria-label="Resort statistics">
            {STATS.map((stat) => (
              <div key={stat.label} role="listitem" className="text-center">
                <div className="text-[15px] font-extrabold text-green-800 leading-none">{stat.value}</div>
                <div className="text-[9.5px] text-gray-500 mt-1.5 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
