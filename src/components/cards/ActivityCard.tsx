"use client";

import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";
import { Activity } from "@/types";

interface ActivityCardProps {
  activity: Activity;
  index: number;
}

export default function ActivityCard({ activity, index }: ActivityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className="group relative rounded-[16px] overflow-hidden shadow-premium hover:shadow-premium-lg transition-shadow duration-300"
    >
      {/* Image with consistent aspect ratio */}
      <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden">
        <img
          src={activity.image}
          alt={activity.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          loading="lazy"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Card content */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <div className="flex items-end justify-between gap-2">
          <div className="min-w-0">
            <h3 className="text-[12px] sm:text-[13px] font-bold text-white leading-tight truncate">
              {activity.name}
            </h3>
            <p className="mt-0.5 text-white/55 text-[9px] line-clamp-1 hidden sm:block">
              {activity.description}
            </p>
            <div className="mt-1.5 flex items-center gap-2 text-[9px] text-white/45">
              <span className="flex items-center gap-0.5">
                <Clock size={9} />
                {activity.duration}
              </span>
              <span className="font-semibold text-green-300">
                {activity.price === 0 ? "Free" : `₹${activity.price}`}
              </span>
            </div>
          </div>
          {/* CTA button — always visible on mobile, hover on desktop */}
          <button
            className="shrink-0 w-7 h-7 bg-white/12 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/15 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 hover:bg-white/20 active:scale-90"
            aria-label={`Explore ${activity.name}`}
          >
            <ArrowUpRight size={13} className="text-white" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
