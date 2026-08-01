"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TreePine, Shield, Leaf, Award } from "lucide-react";
import { STATS } from "@/constants";

const features = [
  { icon: TreePine, title: "Eco-Friendly", desc: "Sustainable harmony with nature" },
  { icon: Shield, title: "Safe & Secure", desc: "24/7 trained wildlife experts" },
  { icon: Leaf, title: "Organic Living", desc: "Farm-to-table local ingredients" },
  { icon: Award, title: "Award Winning", desc: "Excellence in eco-tourism" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section id="about" className="py-12 md:py-14 bg-white" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="md:hidden mb-6"
        >
          <h2 className="text-[22px] font-bold text-gray-900 leading-tight">
            Where Jungle Meets <span className="text-green-700">Luxury</span>
          </h2>
          <p className="text-[13px] text-gray-400 mt-1.5 leading-relaxed">Your gateway to the Pilibhit Tiger Reserve</p>
          <div className="flex gap-2.5 overflow-x-auto scroll-x pb-1 -mx-5 px-5 mt-4">
            {features.map((f) => (
              <div key={f.title} className="flex items-center gap-2 px-3 py-2.5 bg-green-50/70 rounded-[14px] shrink-0 border border-green-100/50">
                <div className="w-8 h-8 rounded-xl bg-green-700/8 flex items-center justify-center"><f.icon size={15} className="text-green-700" /></div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-[10px]">{f.title}</h4>
                  <p className="text-[8px] text-gray-400">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Images - fixed aspect ratios */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-2.5"
          >
            <div className="space-y-2.5">
              <div className="rounded-[16px] overflow-hidden"><img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80" alt="Resort" className="w-full aspect-[4/3] object-cover hover:scale-[1.03] transition-transform duration-700" loading="lazy" /></div>
              <div className="rounded-[16px] overflow-hidden"><img src="https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=400&q=80" alt="Pool" className="w-full aspect-[3/4] object-cover hover:scale-[1.03] transition-transform duration-700" loading="lazy" /></div>
            </div>
            <div className="space-y-2.5 pt-5">
              <div className="rounded-[16px] overflow-hidden"><img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&q=80" alt="Safari" className="w-full aspect-[3/4] object-cover hover:scale-[1.03] transition-transform duration-700" loading="lazy" /></div>
              <div className="rounded-[16px] overflow-hidden"><img src="https://images.unsplash.com/photo-1475483768296-6163e8f3e3b0?w=400&q=80" alt="Bonfire" className="w-full aspect-[4/3] object-cover hover:scale-[1.03] transition-transform duration-700" loading="lazy" /></div>
            </div>
          </motion.div>

          {/* Desktop Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:block"
          >
            <span className="text-green-700 font-semibold text-[11px] uppercase tracking-[0.12em]">About Our Resort</span>
            <h2 className="mt-1.5 text-[26px] lg:text-[30px] font-bold text-gray-900 tracking-tight leading-tight">
              Where Jungle Meets <span className="text-green-700">Luxury</span>
            </h2>
            <p className="mt-3 text-gray-400 leading-relaxed text-[14px] max-w-[420px]">
              Nestled at the edge of the Pilibhit Tiger Reserve, Chuka Eco Resort offers a unique blend of wilderness adventure and five-star comfort. Wake up to birdsong, dine under the stars.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-2.5">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-2.5 p-3 rounded-[14px] hover:bg-green-50/40 transition-colors border border-transparent hover:border-green-100/40">
                  <div className="p-2 bg-green-50 rounded-xl shrink-0"><f.icon size={14} className="text-green-700" /></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-[12px]">{f.title}</h4>
                    <p className="text-[10px] text-gray-400 mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-4 gap-3 p-4 bg-green-50/40 rounded-[16px] border border-green-100/30">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-[17px] font-bold text-green-800">{stat.value}</div>
                  <div className="text-[9px] text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile stats */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.2 }} className="md:hidden mt-5">
          <p className="text-[12px] text-gray-500 leading-relaxed">Nestled at the edge of the Pilibhit Tiger Reserve — where wilderness meets five-star comfort.</p>
          <div className="mt-4 grid grid-cols-4 gap-2 p-3.5 bg-green-50/60 rounded-[14px] border border-green-100/30">
            {STATS.map((stat) => (<div key={stat.label} className="text-center"><div className="text-[14px] font-bold text-green-800">{stat.value}</div><div className="text-[8px] text-gray-400 mt-0.5">{stat.label}</div></div>))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
