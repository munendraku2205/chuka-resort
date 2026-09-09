"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, Wine, Leaf, Clock } from "lucide-react";

const highlights = [
  { icon: UtensilsCrossed, title: "Multi-Cuisine",   desc: "Indian, Continental & Chinese" },
  { icon: Leaf,             title: "Farm to Table",  desc: "Fresh organic ingredients daily" },
  { icon: Wine,             title: "Premium Bar",    desc: "Curated cocktails & fine wines" },
  { icon: Clock,            title: "All Day Dining", desc: "Breakfast to late-night supper" },
];

export default function RestaurantSection() {
  return (
    <section id="restaurant" className="py-12 md:py-16 lg:py-20 bg-white overflow-hidden" aria-labelledby="restaurant-heading">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

        {/* Mobile */}
        <div className="md:hidden">
          <span className="text-green-700 font-bold text-[11px] uppercase tracking-[0.12em]">Culinary Experience</span>
          <h2 id="restaurant-heading" className="mt-2 text-[26px] font-bold text-gray-900 leading-tight tracking-tight">
            Dine in the <span className="text-green-700">Wilderness</span>
          </h2>
          <p className="mt-2 text-[13.5px] text-gray-500 leading-relaxed">Award-winning fusion cuisine inspired by local traditions.</p>

          <div className="mt-4">
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=85" alt="Fine dining restaurant at Chuka Resort" className="rounded-[18px] w-full aspect-[16/10] object-cover shadow-card" loading="lazy" />
          </div>

          {/* Highlight strip — no overlap, sits below image */}
          <div className="mt-3 bg-white rounded-[14px] p-3.5 shadow-card border border-gray-100">
            <div className="grid grid-cols-4 gap-2">
              {highlights.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-8 h-8 mx-auto rounded-xl bg-green-50 flex items-center justify-center mb-1.5">
                    <item.icon size={14} className="text-green-700" aria-hidden="true" />
                  </div>
                  <p className="text-[9px] font-semibold text-gray-700 leading-tight">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="mt-4 w-full py-3 gradient-green text-white font-semibold rounded-xl active-scale shadow-sm shadow-green-700/15 text-[13.5px] min-h-[48px] hover:shadow-md hover:shadow-green-700/22 transition-shadow">
            View Full Menu
          </button>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span className="text-green-700 font-bold text-[11px] uppercase tracking-[0.12em]">Culinary Experience</span>
            <h2 id="restaurant-heading" className="mt-2 text-[1.75rem] lg:text-[2.125rem] font-bold text-gray-900 tracking-tight leading-tight">
              Dine in the <span className="text-green-700">Wilderness</span>
            </h2>
            <p className="mt-3.5 text-gray-500 text-[15px] leading-relaxed max-w-[420px]">
              Our award-winning restaurant serves a fusion of flavours. Forest dining, poolside barbecue, or candlelit dinners under the stars.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-3.5 bg-green-50/50 rounded-[14px] border border-green-100/60 hover:bg-green-50 transition-colors">
                  <div className="p-1.5 bg-green-100 rounded-lg shrink-0"><item.icon size={15} className="text-green-700" aria-hidden="true" /></div>
                  <div>
                    <p className="font-semibold text-gray-800 text-[12px]">{item.title}</p>
                    <p className="text-[10px] text-gray-500 mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-6 px-6 py-3 gradient-green text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-px active:scale-[0.97] text-[13px] min-h-[46px]">View Menu</button>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="relative">
            <div className="rounded-[22px] overflow-hidden shadow-premium-lg">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=85" alt="Fine dining restaurant" className="w-full aspect-[4/3] object-cover hover:scale-[1.03] transition-transform duration-700" loading="lazy" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-[16px] overflow-hidden shadow-card-hover border-[3px] border-white hidden lg:block">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&q=85" alt="Gourmet dish close-up" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
