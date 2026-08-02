"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, Wine, Leaf, Clock } from "lucide-react";

const highlights = [
  { icon: UtensilsCrossed, title: "Multi-Cuisine",  desc: "Indian, Continental & Chinese" },
  { icon: Leaf,             title: "Farm to Table", desc: "Fresh organic daily" },
  { icon: Wine,             title: "Premium Bar",   desc: "Curated cocktails & wines" },
  { icon: Clock,            title: "All Day Dining",desc: "Breakfast to late night" },
];

export default function RestaurantSection() {
  return (
    <section id="restaurant" className="py-10 md:py-14 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-[0.2rem] md:px-8 lg:px-12">

        {/* ── Mobile layout ── */}
        <div className="md:hidden">
          <span className="text-green-700 font-semibold text-[10px] uppercase tracking-[0.12em]">
            Culinary Experience
          </span>
          <h2 className="mt-1.5 text-[22px] font-bold text-gray-900 leading-tight tracking-tight">
            Dine in the <span className="text-green-700">Wilderness</span>
          </h2>
          <p className="mt-1.5 text-[12px] text-gray-400 leading-relaxed">
            Award-winning fusion cuisine inspired by local traditions.
          </p>

          {/* Image with glass highlight card below */}
          <div className="mt-4 relative">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"
              alt="Fine dining at Chuka Resort"
              className="rounded-[16px] w-full aspect-[16/10] object-cover shadow-premium"
              loading="lazy"
            />
            {/* Floating highlight strip */}
            <div className="mt-3 glass rounded-[13px] p-3 shadow-premium border border-white/40">
              <div className="grid grid-cols-4 gap-2">
                {highlights.map((item) => (
                  <div key={item.title} className="text-center">
                    <div className="w-7 h-7 mx-auto rounded-lg bg-green-50 flex items-center justify-center mb-1">
                      <item.icon size={13} className="text-green-700" />
                    </div>
                    <p className="text-[8px] font-semibold text-gray-700 leading-tight">{item.title}</p>
                    <p className="text-[7px] text-gray-400 mt-0.5 leading-tight hidden xs:block">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button className="mt-4 w-full py-3 gradient-green text-white font-semibold rounded-xl active-scale shadow-sm shadow-green-700/10 text-[13px] min-h-[48px]">
            View Full Menu
          </button>
        </div>

        {/* ── Desktop layout ── */}
        <div className="hidden md:grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <span className="text-green-700 font-semibold text-[11px] uppercase tracking-[0.12em]">
              Culinary Experience
            </span>
            <h2 className="mt-1.5 text-[26px] lg:text-[30px] font-bold text-gray-900 tracking-tight leading-tight">
              Dine in the <span className="text-green-700">Wilderness</span>
            </h2>
            <p className="mt-3 text-gray-400 text-[14px] leading-relaxed max-w-[400px]">
              Our award-winning restaurant serves a fusion of flavors. Forest dining, poolside
              barbecue, or candlelit dinners under the stars.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-2.5 p-3 bg-green-50/40 rounded-xl border border-green-100/30 hover:bg-green-50/70 transition-colors"
                >
                  <div className="p-1.5 bg-green-100/80 rounded-lg shrink-0">
                    <item.icon size={14} className="text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-[11px]">{item.title}</h4>
                    <p className="text-[9px] text-gray-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-5 px-5 py-2.5 gradient-green text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-green-500/12 active:scale-[0.97] text-[12px] min-h-[42px]">
              View Menu
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-[20px] overflow-hidden shadow-premium-lg">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"
                alt="Fine dining restaurant"
                className="w-full aspect-[4/3] object-cover hover:scale-[1.03] transition-transform duration-700"
                loading="lazy"
              />
            </div>
            {/* Picture-in-picture thumbnail */}
            <div className="absolute -bottom-3 -left-3 w-32 h-32 rounded-[16px] overflow-hidden shadow-premium-lg border-[3px] border-white hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&q=80"
                alt="Gourmet dish"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
