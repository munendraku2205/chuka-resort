"use client";

import { motion } from "framer-motion";
import { Phone, Sparkles } from "lucide-react";
import { CONTACT } from "@/constants";

export default function CTASection() {
  return (
    <section className="py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12" aria-labelledby="cta-heading">
      <div className="relative max-w-[1100px] mx-auto rounded-[22px] md:rounded-[28px] overflow-hidden">

        <div className="absolute inset-0" aria-hidden="true">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85" alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/88 via-green-800/82 to-emerald-900/88" />
        </div>

        <div className="relative z-10 px-6 sm:px-8 md:px-12 py-12 md:py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full mb-4">
              <Sparkles size={11} className="text-yellow-300" aria-hidden="true" />
              <span className="text-white/85 text-[11px] font-semibold tracking-wide">20% Off Weekday Bookings</span>
            </div>

            <h2 id="cta-heading" className="text-[1.75rem] sm:text-[2.125rem] md:text-[2.5rem] font-extrabold text-white leading-tight tracking-tight">
              Book Your Escape Today
            </h2>
            <p className="mt-3 text-[13.5px] md:text-[15px] text-white/65 max-w-[420px] mx-auto leading-relaxed">
              Leave the city behind and immerse yourself in nature's tranquility.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#rooms" className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 bg-white text-green-900 font-bold rounded-xl hover:bg-green-50 transition-all active-scale shadow-xl text-[14px] min-h-[52px] hover:-translate-y-px">
                Book a Room
              </a>
              <a href={`tel:${CONTACT.phone}`} className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 border-[1.5px] border-white/25 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/40 transition-all active-scale text-[14px] min-h-[52px]">
                <Phone size={15} aria-hidden="true" />Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
