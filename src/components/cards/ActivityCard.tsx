"use client";

import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";
import { Activity } from "@/types";

interface ActivityCardProps { activity: Activity; index: number; }

export default function ActivityCard({ activity, index }: ActivityCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.32, delay: index * 0.045 }}
      whileHover={{ y: -3, transition: { duration: 0.22 } }}
      className="group relative rounded-[18px] overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 cursor-pointer"
      aria-label={`${activity.name} — ${activity.price === 0 ? "Free" : `₹${activity.price}`}`}
    >
      <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden">
        <img src={activity.image} alt={activity.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]" loading="lazy" />
      </div>

      {/* Stronger scrim for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/22 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-3.5">
        <div className="flex items-end justify-between gap-2">
          <div className="min-w-0 flex-1">
            <h3 className="text-[13px] font-bold text-white leading-tight truncate">{activity.name}</h3>
            <p className="mt-0.5 text-white/65 text-[10px] line-clamp-1 hidden sm:block leading-snug">{activity.description}</p>
            <div className="mt-1.5 flex items-center gap-3">
              <span className="flex items-center gap-1 text-[10px] text-white/60">
                <Clock size={9} aria-hidden="true" />{activity.duration}
              </span>
              {/* Solid pill for contrast */}
              <span className="px-2 py-0.5 rounded-md bg-green-600/90 text-white text-[9.5px] font-bold">
                {activity.price === 0 ? "Free" : `₹${activity.price}`}
              </span>
            </div>
          </div>
          <button className="shrink-0 w-8 h-8 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/28 transition-all active:scale-90 md:opacity-0 md:group-hover:opacity-100" aria-label={`Explore ${activity.name}`}>
            <ArrowUpRight size={14} className="text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
