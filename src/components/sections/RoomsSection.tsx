"use client";

import { motion } from "framer-motion";
import { rooms } from "@/data/rooms";
import RoomCard from "@/components/cards/RoomCard";
import { ArrowRight } from "lucide-react";

export default function RoomsSection() {
  const featuredRooms = rooms.filter((r) => r.featured);

  return (
    <section id="rooms" className="py-12 md:py-16 lg:py-20 bg-gray-50/50" aria-labelledby="rooms-heading">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.42 }}
          className="px-4 sm:px-6 md:px-8 lg:px-12 mb-6 md:mb-10 md:text-center"
        >
          <span className="text-green-700 font-bold text-[11px] uppercase tracking-[0.12em]">Our Accommodations</span>
          <h2 id="rooms-heading" className="mt-2 text-[26px] md:text-[2rem] lg:text-[2.25rem] font-bold text-gray-900 tracking-tight leading-tight">
            Featured <span className="text-green-700">Rooms &amp; Suites</span>
          </h2>
          <p className="mt-2 text-gray-500 text-[13.5px] md:text-[15px] max-w-md md:mx-auto leading-relaxed">
            Each room brings you closer to nature with world-class comfort.
          </p>
        </motion.div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto scroll-x pb-4 px-4 sm:px-6">
            {featuredRooms.map((room, index) => (
              <div key={room.id} className="min-w-[280px] max-w-[300px] shrink-0">
                <RoomCard room={room} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 lg:px-12">
          {featuredRooms.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))}
        </div>

        <div className="mt-8 md:mt-10 text-center px-4">
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 border-[1.5px] border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-semibold rounded-xl transition-all duration-200 active-scale text-[13px] min-h-[46px] hover:shadow-md hover:shadow-green-700/20">
            View All Rooms <ArrowRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
