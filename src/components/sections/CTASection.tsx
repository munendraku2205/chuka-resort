"use client";

import { motion } from "framer-motion";
import { Phone, Sparkles } from "lucide-react";
import { CONTACT } from "@/constants";

export default function CTASection() {
  return (
    <section className="py-10 md:py-12 px-5 md:px-8 lg:px-12">
      <div className="relative max-w-[1100px] mx-auto rounded-[22px] overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80" alt="Mountain landscape" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/85 via-green-800/80 to-emerald-900/85" />
        </div>
        <div className="relative z-10 px-6 py-10 md:py-12 text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/8 backdrop-blur-sm border border-white/12 rounded-full mb-3">
              <Sparkles size={10} className="text-yellow-300" />
              <span className="text-white/75 text-[9px] md:text-[10px] font-medium">20% Off Weekday Bookings</span>
            </div>
            <h2 className="text-[22px] md:text-[28px] lg:text-[32px] font-bold text-white leading-tight tracking-tight">Book Your Escape Today</h2>
            <p className="mt-2 text-[12px] md:text-[14px] text-green-100/60 max-w-sm mx-auto leading-relaxed">Leave the city behind and immerse yourself in tranquility.</p>
            <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <a href="#rooms" className="w-full sm:w-auto px-6 py-2.5 bg-white text-green-800 font-semibold rounded-xl hover:bg-green-50 transition-all active-scale shadow-lg text-[12px]">Book Room</a>
              <a href={`tel:${CONTACT.phone}`} className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-6 py-2.5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/8 transition-all active-scale text-[12px]"><Phone size={14} />Contact Us</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
