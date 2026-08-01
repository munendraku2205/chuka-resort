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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group bg-white rounded-[20px] overflow-hidden shadow-premium hover:shadow-premium-lg transition-shadow duration-300 border border-gray-100/60"
    >
      {/* Image - fixed aspect ratio */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Price */}
        <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 glass rounded-lg">
          <span className="text-[12px] font-bold text-white">₹{room.price.toLocaleString()}</span>
          <span className="text-[8px] text-white/60 ml-0.5">/night</span>
        </div>

        {/* Rating */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 bg-white/95 rounded-lg shadow-sm">
          <Star size={9} fill="#f59e0b" className="text-amber-400" />
          <span className="text-[10px] font-bold text-gray-800">{room.rating}</span>
        </div>

        {/* Wishlist */}
        <button
          className="absolute top-2.5 right-2.5 w-7 h-7 bg-white/85 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white active:scale-90"
          aria-label="Add to wishlist"
        >
          <Heart size={12} className="text-gray-400" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-[14px] font-bold text-gray-900 group-hover:text-green-700 transition-colors leading-snug line-clamp-1">
          {room.name}
        </h3>
        <p className="mt-1 text-gray-400 text-[11px] line-clamp-2 leading-relaxed">{room.description}</p>

        {/* Meta */}
        <div className="mt-2.5 flex items-center gap-3 text-[10px] text-gray-400">
          <span className="flex items-center gap-1"><Users size={10} />{room.capacity} Guests</span>
          <span className="flex items-center gap-1"><Maximize size={10} />{room.area} sq.ft</span>
        </div>

        {/* Amenities */}
        <div className="mt-2.5 flex flex-wrap gap-1">
          {room.amenities.slice(0, 3).map((amenity) => (
            <span key={amenity} className="px-2 py-0.5 bg-gray-50 rounded-md text-[9px] text-gray-500 border border-gray-100/80">{amenity}</span>
          ))}
          {room.amenities.length > 3 && (
            <span className="px-2 py-0.5 bg-green-50 rounded-md text-[9px] text-green-700 font-medium border border-green-100/60">+{room.amenities.length - 3}</span>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-3.5 flex gap-2">
          <button className="flex-1 py-2 gradient-green text-white font-semibold rounded-xl text-[11px] shadow-sm shadow-green-700/10 hover:shadow-md hover:shadow-green-700/15 transition-shadow active:scale-[0.97]">
            Book Now
          </button>
          <button className="px-3.5 py-2 border border-gray-200 text-gray-500 font-medium rounded-xl text-[11px] hover:border-green-200 hover:text-green-700 hover:bg-green-50/30 transition-all active:scale-[0.97]">
            Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}
