"use client";

import { motion } from "framer-motion";
import { Star, Users, Maximize, Heart } from "lucide-react";
import { Room } from "@/types";

interface RoomCardProps { room: Room; index: number; }

export default function RoomCard({ room, index }: RoomCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.38, delay: index * 0.07 }}
      whileHover={{ y: -4, transition: { duration: 0.22 } }}
      className="group bg-white rounded-[20px] overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-gray-100 w-full"
      aria-label={`${room.name} — ₹${room.price.toLocaleString()} per night`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={room.image} alt={`Interior of ${room.name}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        {/* Price badge — solid bg for readability */}
        <div className="absolute bottom-3 left-3 px-2.5 py-1.5 bg-black/60 backdrop-blur-md rounded-lg">
          <span className="text-[13px] font-bold text-white">₹{room.price.toLocaleString()}</span>
          <span className="text-[9.5px] text-white/70 ml-0.5">/night</span>
        </div>

        {/* Rating badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 bg-white rounded-lg shadow-sm">
          <Star size={10} fill="#f59e0b" className="text-amber-400" aria-hidden="true" />
          <span className="text-[10.5px] font-bold text-gray-800">{room.rating}</span>
        </div>

        {/* Wishlist */}
        <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm md:opacity-0 md:group-hover:opacity-100 transition-all duration-200 hover:bg-white hover:scale-110 active:scale-90" aria-label={`Save ${room.name} to wishlist`}>
          <Heart size={13} className="text-gray-400" aria-hidden="true" />
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-[14.5px] font-bold text-gray-900 group-hover:text-green-700 transition-colors leading-snug line-clamp-1">
          {room.name}
        </h3>
        <p className="mt-1 text-gray-500 text-[12.5px] line-clamp-2 leading-relaxed">{room.description}</p>

        <div className="mt-2.5 flex items-center gap-4 text-[11px] text-gray-500">
          <span className="flex items-center gap-1.5"><Users size={11} aria-hidden="true" />{room.capacity} Guests</span>
          <span className="flex items-center gap-1.5"><Maximize size={11} aria-hidden="true" />{room.area} sq.ft</span>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {room.amenities.slice(0, 3).map((amenity) => (
            <span key={amenity} className="px-2.5 py-1 bg-gray-50 rounded-lg text-[10.5px] text-gray-600 border border-gray-200 font-medium">{amenity}</span>
          ))}
          {room.amenities.length > 3 && (
            <span className="px-2.5 py-1 bg-green-50 rounded-lg text-[10.5px] text-green-700 font-semibold border border-green-100">+{room.amenities.length - 3} more</span>
          )}
        </div>

        <div className="mt-4 flex gap-2.5">
          <button className="flex-1 py-2.5 gradient-green text-white font-semibold rounded-xl text-[12px] shadow-sm shadow-green-700/15 hover:shadow-md hover:shadow-green-700/22 hover:-translate-y-px transition-all active:scale-[0.97] min-h-[44px]">
            Book Now
          </button>
          <button className="px-4 py-2.5 border border-gray-200 text-gray-600 font-semibold rounded-xl text-[12px] hover:border-green-200 hover:text-green-700 hover:bg-green-50 transition-all active:scale-[0.97] min-h-[44px]">
            Details
          </button>
        </div>
      </div>
    </motion.article>
  );
}
