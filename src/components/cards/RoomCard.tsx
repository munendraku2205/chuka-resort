"use client";

import { motion } from "framer-motion";
import { Star, Users, Maximize, Heart } from "lucide-react";
import { Room } from "@/types";

interface RoomCardProps {
  room: Room;
  index: number;
}

export default function RoomCard({ room, index }: RoomCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group bg-white rounded-[20px] overflow-hidden shadow-premium hover:shadow-premium-lg transition-shadow duration-300 border border-slate-100/80 w-full"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Price badge */}
        <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 glass rounded-lg shadow-sm">
          <span className="text-[12px] font-bold text-white">₹{room.price.toLocaleString()}</span>
          <span className="text-[8px] text-white/60 ml-0.5">/night</span>
        </div>

        {/* Rating badge */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 bg-white/95 rounded-lg shadow-sm">
          <Star size={9} fill="#f59e0b" className="text-amber-400" />
          <span className="text-[10px] font-bold text-gray-800">{room.rating}</span>
        </div>

        {/* Wishlist button — always visible on mobile, hover on desktop */}
        <button
          className="absolute top-2.5 right-2.5 w-7 h-7 bg-white/85 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 hover:bg-white active:scale-90"
          aria-label={`Save ${room.name} to wishlist`}
        >
          <Heart size={12} className="text-gray-400" />
        </button>
      </div>

      {/* Content */}
      <div className="p-3.5 sm:p-4">
        <h3 className="text-[13px] sm:text-[14px] font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-1">
          {room.name}
        </h3>
        <p className="mt-1 text-slate-600 text-[11px] line-clamp-2 leading-relaxed">
          {room.description}
        </p>

        {/* Capacity & area */}
        <div className="mt-2 flex items-center gap-3 text-[10px] text-slate-500">
          <span className="flex items-center gap-1">
            <Users size={10} />
            {room.capacity} Guests
          </span>
          <span className="flex items-center gap-1">
            <Maximize size={10} />
            {room.area} sq.ft
          </span>
        </div>

        {/* Amenities */}
        <div className="mt-2.5 flex flex-wrap gap-1">
          {room.amenities.slice(0, 3).map((amenity) => (
            <span
              key={amenity}
              className="px-2 py-0.5 bg-slate-50 rounded-md text-[9px] text-slate-600 border border-slate-100/80"
            >
              {amenity}
            </span>
          ))}
          {room.amenities.length > 3 && (
            <span className="px-2 py-0.5 bg-green-50 rounded-md text-[9px] text-green-700 font-medium border border-green-100/60">
              +{room.amenities.length - 3}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="mt-3.5 flex gap-2">
          <button className="flex-1 py-2.5 gradient-green text-white font-semibold rounded-xl text-[11px] shadow-sm shadow-green-700/10 hover:shadow-md hover:shadow-green-700/15 transition-shadow active:scale-[0.97] min-h-[44px]">
            Book Now
          </button>
          <button className="px-3.5 py-2.5 border border-slate-200 text-slate-600 font-medium rounded-xl text-[11px] hover:border-emerald-200 hover:text-emerald-700 hover:bg-emerald-50/30 transition-all active:scale-[0.97] min-h-[44px]">
            Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}
