"use client";

import { motion } from "framer-motion";
import { rooms } from "@/data/rooms";
import RoomCard from "@/components/cards/RoomCard";
import { ArrowRight } from "lucide-react";

export default function RoomsSection() {
  const featuredRooms = rooms.filter((r) => r.featured);

  return (
    <section id="rooms" className="py-12 md:py-14 bg-gray-50/30">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="px-5 md:px-8 lg:px-12 mb-6 md:mb-8 md:text-center"
        >
          <span className="text-green-700 font-semibold text-[10px] md:text-[11px] uppercase tracking-[0.12em]">Our Accommodations</span>
          <h2 className="mt-1.5 text-[22px] md:text-[26px] lg:text-[30px] font-bold text-gray-900 tracking-tight leading-tight">
            Featured <span className="text-green-700">Rooms & Suites</span>
          </h2>
          <p className="mt-2 text-gray-400 text-[13px] md:text-[14px] max-w-md md:mx-auto leading-relaxed">
            Each room brings you closer to nature with world-class comfort.
          </p>
        </motion.div>

        {/* Mobile: Scroll */}
        <div className="md:hidden">
          <div className="flex gap-3.5 overflow-x-auto scroll-x pb-3 px-5">
            {featuredRooms.map((room, index) => (
              <div key={room.id} className="min-w-[265px] max-w-[265px]">
                <RoomCard room={room} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-8 lg:px-12">
          {featuredRooms.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-7 md:mt-8 text-center px-5">
          <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 border border-green-700/70 text-green-700 hover:bg-green-700 hover:text-white font-semibold rounded-xl transition-all duration-200 active-scale text-[12px]">
            View All Rooms <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
