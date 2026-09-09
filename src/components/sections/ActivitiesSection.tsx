"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { activities } from "@/data/activities";
import ActivityCard from "@/components/cards/ActivityCard";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all",           label: "All" },
  { id: "water",         label: "Water" },
  { id: "adventure",     label: "Adventure" },
  { id: "entertainment", label: "Fun" },
  { id: "nature",        label: "Nature" },
  { id: "family",        label: "Family" },
];

export default function ActivitiesSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredActivities = activeCategory === "all" ? activities : activities.filter((a) => a.category === activeCategory);

  return (
    <section id="activities" className="py-12 md:py-16 lg:py-20 bg-white" aria-labelledby="activities-heading">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.42 }}
          className="px-4 sm:px-6 md:px-8 lg:px-12 mb-5 md:mb-7 md:text-center"
        >
          <span className="text-green-700 font-bold text-[11px] uppercase tracking-[0.12em]">Things To Do</span>
          <h2 id="activities-heading" className="mt-2 text-[26px] md:text-[2rem] lg:text-[2.25rem] font-bold text-gray-900 tracking-tight leading-tight">
            Exciting <span className="text-green-700">Activities</span>
          </h2>
          <p className="mt-2 text-gray-500 text-[13.5px] md:text-[15px] max-w-md md:mx-auto leading-relaxed">
            From jungle safaris to poolside relaxation — something for everyone.
          </p>
        </motion.div>

        {/* Filter pills */}
        <div className="flex gap-2 overflow-x-auto scroll-x pb-3 px-4 sm:px-6 md:px-8 lg:px-12 md:justify-center mb-5 md:mb-7" role="tablist" aria-label="Filter activities by category">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn("pill shrink-0", activeCategory === cat.id ? "pill-active" : "pill-inactive")}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Mobile: 2-col grid */}
        <div className="grid grid-cols-2 md:hidden gap-3 px-4 sm:px-6">
          {filteredActivities.slice(0, 6).map((activity, index) => (
            <ActivityCard key={activity.id} activity={activity} index={index} />
          ))}
        </div>

        {/* Desktop: 3–4 col grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-5 px-8 lg:px-12">
          {filteredActivities.slice(0, 8).map((activity, index) => (
            <ActivityCard key={activity.id} activity={activity} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
