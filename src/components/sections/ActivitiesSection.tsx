"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { activities } from "@/data/activities";
import ActivityCard from "@/components/cards/ActivityCard";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All" },
  { id: "water", label: "Water" },
  { id: "adventure", label: "Adventure" },
  { id: "entertainment", label: "Fun" },
  { id: "nature", label: "Nature" },
  { id: "family", label: "Family" },
];

export default function ActivitiesSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredActivities = activeCategory === "all" ? activities : activities.filter((a) => a.category === activeCategory);

  return (
    <section id="activities" className="py-12 md:py-14 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="px-5 md:px-8 lg:px-12 mb-5 md:mb-6 md:text-center"
        >
          <span className="text-green-700 font-semibold text-[10px] md:text-[11px] uppercase tracking-[0.12em]">Things To Do</span>
          <h2 className="mt-1.5 text-[22px] md:text-[26px] lg:text-[30px] font-bold text-gray-900 tracking-tight leading-tight">
            Exciting <span className="text-green-700">Activities</span>
          </h2>
          <p className="mt-2 text-gray-400 text-[13px] md:text-[14px] max-w-md md:mx-auto leading-relaxed">
            From jungle safaris to poolside relaxation, something for everyone.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto scroll-x pb-3 px-5 md:px-8 lg:px-12 md:justify-center mb-5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-3.5 py-1.5 rounded-lg text-[11px] font-medium transition-all duration-200 shrink-0 active-scale",
                activeCategory === cat.id
                  ? "gradient-green text-white shadow-sm shadow-green-700/12"
                  : "bg-gray-100/70 text-gray-500 hover:bg-gray-150 hover:text-gray-700"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Mobile */}
        <div className="grid grid-cols-2 md:hidden gap-2.5 px-5">
          {filteredActivities.slice(0, 6).map((activity, index) => (
            <ActivityCard key={activity.id} activity={activity} index={index} />
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 px-8 lg:px-12">
          {filteredActivities.slice(0, 8).map((activity, index) => (
            <ActivityCard key={activity.id} activity={activity} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
