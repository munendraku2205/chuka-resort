"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { reviews } from "@/data/reviews";

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={11} fill={i < rating ? "#f59e0b" : "none"} className={i < rating ? "text-amber-400" : "text-gray-200"} aria-hidden="true" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white" aria-labelledby="reviews-heading">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.42 }}
          className="px-4 sm:px-6 md:px-8 lg:px-12 mb-6 md:mb-10 md:text-center"
        >
          <span className="text-green-700 font-bold text-[11px] uppercase tracking-[0.12em]">What Guests Say</span>
          <h2 id="reviews-heading" className="mt-2 text-[26px] md:text-[2rem] lg:text-[2.25rem] font-bold text-gray-900 tracking-tight leading-tight">
            Guest <span className="text-green-700">Reviews</span>
          </h2>
          <p className="mt-2 text-gray-500 text-[13.5px] md:text-[15px] max-w-md md:mx-auto leading-relaxed">
            Unforgettable experiences shared by our guests.
          </p>
        </motion.div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto scroll-x pb-4 px-4 sm:px-6">
            {reviews.map((review) => (
              <article key={review.id} className="min-w-[268px] max-w-[288px] bg-gray-50 rounded-[18px] p-4 border border-gray-100 shadow-card shrink-0 active-scale" aria-label={`Review by ${review.name}`}>
                <div className="flex items-center gap-3 mb-3">
                  <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-green-100 shrink-0" loading="lazy" />
                  <div className="min-w-0">
                    <p className="font-bold text-gray-900 text-[13px] truncate">{review.name}</p>
                    <p className="text-[10.5px] text-gray-500 mt-0.5">{review.location}</p>
                  </div>
                </div>
                <StarRow rating={review.rating} />
                <p className="mt-2.5 text-gray-600 text-[12.5px] leading-relaxed line-clamp-4">{review.comment}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-8 lg:px-12">
          {reviews.map((review, index) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              whileHover={{ y: -3, transition: { duration: 0.22 } }}
              className="bg-white rounded-[20px] p-5 border border-gray-100 shadow-card hover:shadow-card-hover transition-shadow duration-300 border-l-[3px] border-l-green-200"
              aria-label={`Review by ${review.name}`}
            >
              <Quote size={18} className="text-green-200 mb-3" aria-hidden="true" />
              <p className="text-gray-700 leading-relaxed text-[13px]">{review.comment}</p>
              <div className="mt-3"><StarRow rating={review.rating} /></div>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <img src={review.avatar} alt={review.name} className="w-9 h-9 rounded-full object-cover ring-2 ring-green-50" loading="lazy" />
                <div>
                  <p className="font-bold text-gray-900 text-[12px]">{review.name}</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">{review.location}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
