"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { reviews } from "@/data/reviews";

export default function TestimonialsSection() {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="px-[0.2rem] md:px-8 lg:px-12 mb-5 md:mb-8 md:text-center"
        >
          <span className="text-green-700 font-semibold text-[10px] md:text-[11px] uppercase tracking-[0.12em]">
            What Guests Say
          </span>
          <h2 className="mt-1.5 text-[22px] md:text-[26px] lg:text-[30px] font-bold text-gray-900 tracking-tight leading-tight">
            Guest <span className="text-green-700">Reviews</span>
          </h2>
          <p className="mt-1.5 text-gray-400 text-[12px] md:text-[14px] max-w-md md:mx-auto leading-relaxed">
            Unforgettable experiences shared by our guests.
          </p>
        </motion.div>

        {/* Mobile: horizontal scroll cards */}
        <div className="md:hidden">
          <div className="flex gap-3.5 overflow-x-auto scroll-x pb-3 px-[0.2rem]">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="min-w-[260px] max-w-[280px] bg-gray-50/70 rounded-[16px] p-4 border border-gray-100/60 shadow-premium shrink-0 active-scale"
              >
                {/* Reviewer info */}
                <div className="flex items-center gap-2.5 mb-2.5">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-9 h-9 rounded-full object-cover ring-2 ring-green-100/50 shrink-0"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-[12px] truncate">{review.name}</p>
                    <p className="text-[9px] text-gray-400">{review.location}</p>
                  </div>
                </div>
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={10}
                      fill={i < review.rating ? "#f59e0b" : "none"}
                      className={i < review.rating ? "text-amber-400" : "text-gray-200"}
                    />
                  ))}
                </div>
                <p className="text-gray-500 text-[11px] leading-relaxed line-clamp-4">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 lg:px-12">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className="bg-gray-50/50 rounded-[18px] p-5 border border-gray-100/60 hover:shadow-premium transition-shadow duration-300"
            >
              <Quote size={14} className="text-green-200/80 mb-2.5" />
              <p className="text-gray-600 leading-relaxed text-[12px]">{review.comment}</p>
              <div className="flex items-center gap-0.5 mt-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={10}
                    fill={i < review.rating ? "#f59e0b" : "none"}
                    className={i < review.rating ? "text-amber-400" : "text-gray-200"}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2.5 mt-3 pt-3 border-t border-gray-100/60">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-green-50"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-[11px]">{review.name}</p>
                  <p className="text-[9px] text-gray-400">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
