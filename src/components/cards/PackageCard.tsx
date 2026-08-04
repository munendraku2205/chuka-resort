"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Package } from "@/types";

interface PackageCardProps {
  pkg: Package;
  index: number;
}

export default function PackageCard({ pkg, index }: PackageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className={`relative bg-white rounded-[20px] overflow-hidden shadow-premium hover:shadow-premium-lg transition-shadow duration-300 border w-full ${
        pkg.popular
          ? "border-green-200/80 ring-1 ring-green-500/10"
          : "border-gray-100/60"
      }`}
    >
      {/* Popular badge */}
      {pkg.popular && (
        <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1 px-2 py-0.5 gradient-green text-white text-[8px] font-bold rounded-full shadow-sm">
          <Sparkles size={8} />
          Popular
        </div>
      )}

      {/* Image */}
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-3.5 sm:p-4">
        <h3 className="text-[13px] sm:text-[14px] font-bold text-slate-900 leading-snug">
          {pkg.name}
        </h3>
        <p className="mt-1 text-slate-600 text-[11px] line-clamp-2 leading-relaxed">
          {pkg.description}
        </p>
        <p className="mt-1 text-[10px] text-green-700 font-medium">{pkg.duration}</p>

        {/* Includes list */}
        <div className="mt-2.5 space-y-1.5">
          {pkg.includes.slice(0, 4).map((item) => (
            <div key={item} className="flex items-center gap-2 text-[10px] text-gray-500">
              <div className="w-3.5 h-3.5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                <Check size={7} className="text-green-600" />
              </div>
              {item}
            </div>
          ))}
          {pkg.includes.length > 4 && (
            <p className="text-[8px] text-green-600 font-medium pl-5">
              +{pkg.includes.length - 4} more included
            </p>
          )}
        </div>

        {/* Price + CTA */}
        <div className="mt-3.5 flex items-center justify-between pt-3 border-t border-gray-100/80">
          <div>
            <span className="text-[18px] font-bold text-slate-900">
              ₹{pkg.price.toLocaleString()}
            </span>
            <span className="text-[9px] text-slate-500 block mt-0.5">/person</span>
          </div>
          <button className="px-4 py-2.5 gradient-green text-white font-semibold rounded-xl text-[11px] shadow-sm shadow-green-700/10 hover:shadow-md transition-shadow active:scale-[0.97] min-h-[44px]">
            Book Package
          </button>
        </div>
      </div>
    </motion.div>
  );
}
