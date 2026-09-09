"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Package } from "@/types";

interface PackageCardProps { pkg: Package; index: number; }

export default function PackageCard({ pkg, index }: PackageCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.38, delay: index * 0.09 }}
      whileHover={{ y: -4, transition: { duration: 0.22 } }}
      className={`relative bg-white rounded-[20px] overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 border w-full ${pkg.popular ? "border-green-200 ring-1 ring-green-500/15" : "border-gray-100"}`}
      aria-label={`${pkg.name} package — ₹${pkg.price.toLocaleString()} per person`}
    >
      {pkg.popular && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 gradient-green text-white text-[9px] font-bold rounded-full shadow-sm shadow-green-700/25">
          <Sparkles size={8} aria-hidden="true" />Popular
        </div>
      )}

      <div className="aspect-[16/9] overflow-hidden">
        <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-700" loading="lazy" />
      </div>

      <div className="p-4 md:p-5">
        <h3 className="text-[15px] font-bold text-gray-900 leading-snug">{pkg.name}</h3>
        <p className="mt-1.5 text-gray-500 text-[12.5px] line-clamp-2 leading-relaxed">{pkg.description}</p>
        <p className="mt-1.5 text-[11px] text-green-700 font-semibold">{pkg.duration}</p>

        <ul className="mt-3 space-y-1.5" aria-label="Package includes">
          {pkg.includes.slice(0, 4).map((item) => (
            <li key={item} className="flex items-center gap-2 text-[12px] text-gray-600">
              <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <Check size={8} className="text-green-700" aria-hidden="true" />
              </div>
              {item}
            </li>
          ))}
          {pkg.includes.length > 4 && (
            <li className="text-[11px] text-green-700 font-semibold pl-6">+{pkg.includes.length - 4} more included</li>
          )}
        </ul>

        <div className="mt-4 flex items-center justify-between pt-3.5 border-t border-gray-100">
          <div>
            <span className="text-[1.25rem] font-extrabold text-gray-900 leading-none">₹{pkg.price.toLocaleString()}</span>
            <span className="block text-[10px] text-gray-400 mt-1 font-medium">per person</span>
          </div>
          <button className="px-5 py-2.5 gradient-green text-white font-semibold rounded-xl text-[12px] shadow-sm shadow-green-700/15 hover:shadow-md hover:shadow-green-700/22 hover:-translate-y-px transition-all active:scale-[0.97] min-h-[44px]">
            Book Package
          </button>
        </div>
      </div>
    </motion.article>
  );
}
