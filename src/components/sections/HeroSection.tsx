"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown, Play, MapPin, Search,
  BedDouble, Waves, Music, Flame,
  UtensilsCrossed, TreePine, Camera, PartyPopper,
  Star, Heart, ChevronRight, Sparkles,
} from "lucide-react";
import { STATS } from "@/constants";
import { banners } from "@/data/banners";
import { rooms } from "@/data/rooms";

const quickActions = [
  { icon: BedDouble,       label: "Rooms",    href: "#rooms",      color: "bg-green-50  text-green-700" },
  { icon: Waves,           label: "Pool",     href: "#activities", color: "bg-blue-50   text-blue-700" },
  { icon: Music,           label: "DJ Night", href: "#activities", color: "bg-purple-50 text-purple-700" },
  { icon: Flame,           label: "Bonfire",  href: "#activities", color: "bg-orange-50 text-orange-700" },
  { icon: UtensilsCrossed, label: "Dining",   href: "#restaurant", color: "bg-red-50    text-red-700" },
  { icon: TreePine,        label: "Safari",   href: "#activities", color: "bg-emerald-50 text-emerald-700" },
  { icon: Camera,          label: "Gallery",  href: "#gallery",    color: "bg-pink-50   text-pink-700" },
  { icon: PartyPopper,     label: "Events",   href: "#packages",   color: "bg-amber-50  text-amber-700" },
];

export default function HeroSection() {
  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActiveBanner((p) => (p + 1) % banners.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* ═══════════════ MOBILE HERO ═══════════════ */}
      <section className="md:hidden bg-[#fdfcfa]" aria-label="Welcome to Chuka Resort">

        {/* Hero image */}
        <div className="relative h-[42vh] min-h-[260px] max-h-[360px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=85"
            alt="Aerial view of Chuka Eco Resort surrounded by lush forest"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-black/70" />

          {/* Location pill */}
          <div className="absolute top-16 left-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/28 backdrop-blur-md rounded-full border border-white/20">
              <MapPin size={10} className="text-green-400 shrink-0" aria-hidden="true" />
              <span className="text-white/90 text-[11px] font-medium">Pilibhit Tiger Reserve</span>
            </div>
          </div>

          {/* Welcome overlay */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.45 }}
            className="absolute bottom-4 left-4 right-4"
          >
            <div className="glass-dark rounded-[18px] px-4 py-3.5">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-sm leading-none" aria-hidden="true">🌿</span>
                <span className="text-green-300 text-[10px] font-bold uppercase tracking-[0.14em]">Welcome to</span>
              </div>
              <h1 className="text-white font-extrabold text-[22px] leading-tight tracking-tight">
                Chuka Eco Resort
              </h1>
              <p className="text-white/60 text-[12px] mt-1 font-medium">
                Stay&nbsp;•&nbsp;Relax&nbsp;•&nbsp;Explore
              </p>
            </div>
          </motion.div>
        </div>

        {/* Booking card — 16px margin, floats above fold */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.38 }}
          className="mx-4 -mt-5 relative z-10"
        >
          <div className="bg-white rounded-[18px] p-4 shadow-premium-lg border border-gray-100">
            <p className="text-[11px] font-bold text-gray-800 mb-3 uppercase tracking-wider">Check Availability</p>
            <div className="grid grid-cols-2 gap-2.5 mb-2.5">
              <div>
                <label htmlFor="m-checkin" className="block text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-1.5">Check-in</label>
                <input id="m-checkin" type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-400 transition-all" aria-label="Check-in date" />
              </div>
              <div>
                <label htmlFor="m-checkout" className="block text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-1.5">Check-out</label>
                <input id="m-checkout" type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-400 transition-all" aria-label="Check-out date" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2.5 mb-3.5">
              <div>
                <label htmlFor="m-guests" className="block text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-1.5">Guests</label>
                <select id="m-guests" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-400" aria-label="Number of guests">
                  <option>2 Guests</option><option>1 Guest</option><option>3 Guests</option><option>4+ Guests</option>
                </select>
              </div>
              <div>
                <label htmlFor="m-rooms" className="block text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-1.5">Rooms</label>
                <select id="m-rooms" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-400" aria-label="Number of rooms">
                  <option>1 Room</option><option>2 Rooms</option><option>3 Rooms</option>
                </select>
              </div>
            </div>
            <button className="w-full py-3 gradient-green text-white font-semibold rounded-xl flex items-center justify-center gap-2 active-scale shadow-sm shadow-green-700/20 text-[13.5px] min-h-[48px] hover:shadow-md hover:shadow-green-700/25 transition-shadow">
              <Search size={14} aria-hidden="true" />Search Rooms
            </button>
          </div>
        </motion.div>

        {/* Special Offers */}
        <div className="mt-6 px-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[14px] font-bold text-gray-900">Special Offers</h2>
            <button className="text-[12px] text-green-700 font-semibold hover:text-green-800 transition-colors">View All</button>
          </div>
          <div className="flex gap-3 overflow-x-auto scroll-x pb-2 -mx-4 px-4">
            {banners.map((banner) => (
              <div key={banner.id} className="relative min-w-[220px] h-[122px] rounded-[16px] overflow-hidden shrink-0 active-scale">
                <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" loading="lazy" />
                <div className={`absolute inset-0 bg-gradient-to-br ${banner.gradient}`} />
                <div className="absolute inset-0 p-3 flex flex-col justify-between">
                  <span className="self-start px-2 py-0.5 bg-white/20 backdrop-blur-sm rounded-md text-[9px] font-bold text-white uppercase tracking-wider">{banner.offer}</span>
                  <div>
                    <h3 className="text-white font-bold text-[13px] leading-tight">{banner.title}</h3>
                    <p className="text-white/70 text-[10px] mt-0.5">{banner.subtitle}</p>
                    <button className="mt-1.5 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-[10px] font-semibold text-white border border-white/30 active-scale min-h-[28px]">{banner.cta}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 px-4">
          <div className="flex gap-4 overflow-x-auto scroll-x pb-2 -mx-4 px-4">
            {quickActions.map((action) => (
              <a key={action.label} href={action.href} className="flex flex-col items-center gap-1.5 min-w-[58px] active-scale" aria-label={action.label}>
                <div className={`w-11 h-11 rounded-[14px] flex items-center justify-center shadow-card border border-gray-100/60 ${action.color}`}>
                  <action.icon size={17} aria-hidden="true" />
                </div>
                <span className="text-[10px] font-medium text-gray-500 whitespace-nowrap">{action.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Featured Stays */}
        <div className="mt-6 px-4 pb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[14px] font-bold text-gray-900">Featured Stays</h2>
            <a href="#rooms" className="flex items-center gap-0.5 text-[12px] text-green-700 font-semibold hover:text-green-800 transition-colors">
              See All <ChevronRight size={12} aria-hidden="true" />
            </a>
          </div>
          <div className="flex gap-3 overflow-x-auto scroll-x pb-2 -mx-4 px-4">
            {rooms.slice(0, 4).map((room) => (
              <div key={room.id} className="min-w-[178px] max-w-[200px] bg-white rounded-[16px] overflow-hidden shadow-card border border-gray-100 shrink-0 active-scale hover:shadow-card-hover transition-shadow duration-200">
                <div className="relative h-[98px] overflow-hidden">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover" loading="lazy" />
                  <button className="absolute top-2 right-2 w-6 h-6 bg-white/85 backdrop-blur-sm rounded-full flex items-center justify-center active:scale-90" aria-label={`Save ${room.name} to wishlist`}>
                    <Heart size={11} className="text-gray-400" aria-hidden="true" />
                  </button>
                  <div className="absolute bottom-1.5 left-2 flex items-center gap-1 px-1.5 py-0.5 bg-white/95 rounded-md">
                    <Star size={9} fill="#f59e0b" className="text-amber-400" aria-hidden="true" />
                    <span className="text-[9px] font-bold text-gray-800">{room.rating}</span>
                  </div>
                </div>
                <div className="p-2.5">
                  <p className="font-semibold text-gray-900 text-[11.5px] leading-tight line-clamp-1">{room.name}</p>
                  <div className="flex items-center justify-between mt-1.5">
                    <div>
                      <span className="text-[13px] font-bold text-gray-900">₹{room.price.toLocaleString()}</span>
                      <span className="text-[9px] text-gray-400">/night</span>
                    </div>
                    <button className="px-2.5 py-1 gradient-green text-white text-[10px] font-semibold rounded-lg active-scale min-h-[28px]">Book</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ DESKTOP HERO ═══════════════ */}
      <section
        className="relative hidden md:flex items-center h-[74vh] min-h-[540px] max-h-[740px] w-full overflow-hidden"
        aria-label="Welcome to Chuka Resort"
      >
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=85" alt="Chuka Eco Resort surrounded by dense forest canopy" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_400px] gap-10 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.12 }}>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-full mb-5">
                <MapPin size={11} className="text-green-400" aria-hidden="true" />
                <span className="text-white/80 text-[11.5px] font-medium">Near Pilibhit Tiger Reserve, Uttar Pradesh</span>
              </div>
              <h1 className="text-[2.75rem] lg:text-[3.5rem] font-extrabold text-white leading-[1.06] tracking-[-0.03em]">
                Experience{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300">Luxury</span>
                <br />in Nature
              </h1>
              <p className="mt-4 text-[15px] lg:text-[16px] text-white/60 max-w-[440px] leading-relaxed">
                Stay, Explore, Celebrate — and create memories at Chuka Eco Resort where the jungle meets five-star comfort.
              </p>
              <div className="mt-6 flex items-center gap-3 flex-wrap">
                <a href="#rooms" className="px-6 py-2.5 gradient-green text-white text-[13px] font-semibold rounded-xl min-h-[44px] flex items-center gap-2 hover:shadow-lg hover:shadow-green-700/25 hover:-translate-y-px transition-all active:scale-[0.97]">Book Now</a>
                <a href="#about" className="px-6 py-2.5 bg-white/10 hover:bg-white/18 backdrop-blur-sm border border-white/20 text-white text-[13px] font-semibold rounded-xl min-h-[44px] flex items-center transition-all active:scale-[0.97]">Explore Resort</a>
                <button className="flex items-center gap-2 px-4 py-2.5 text-white/65 hover:text-white text-[13px] font-medium transition-colors min-h-[44px]">
                  <span className="flex items-center justify-center w-8 h-8 bg-white/15 backdrop-blur-sm rounded-full border border-white/20">
                    <Play size={11} fill="white" aria-hidden="true" />
                  </span>
                  Watch Video
                </button>
              </div>
              <div className="mt-8 flex items-center gap-6 flex-wrap">
                {STATS.map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-5">
                    <div className="text-center">
                      <div className="text-[1.375rem] font-extrabold text-white leading-none">{stat.value}</div>
                      <div className="text-[10px] text-white/45 uppercase tracking-widest mt-1">{stat.label}</div>
                    </div>
                    {i < STATS.length - 1 && <div className="w-px h-8 bg-white/12" aria-hidden="true" />}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.28 }} className="hidden lg:flex flex-col gap-4">
              <div className="bg-white/[0.07] backdrop-blur-2xl border border-white/12 rounded-[22px] p-5 shadow-2xl">
                <h2 className="text-white font-bold text-[14px] mb-4 flex items-center gap-2">
                  <Search size={14} className="text-green-400" aria-hidden="true" />Quick Booking
                </h2>
                <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                  <div>
                    <label htmlFor="d-checkin" className="block text-[9.5px] text-white/50 font-semibold uppercase tracking-widest mb-1.5">Check In</label>
                    <input id="d-checkin" type="date" className="w-full bg-white/8 border border-white/12 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-green-500/40 focus:border-green-500/40 transition-all" aria-label="Check-in date" />
                  </div>
                  <div>
                    <label htmlFor="d-checkout" className="block text-[9.5px] text-white/50 font-semibold uppercase tracking-widest mb-1.5">Check Out</label>
                    <input id="d-checkout" type="date" className="w-full bg-white/8 border border-white/12 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-green-500/40 focus:border-green-500/40 transition-all" aria-label="Check-out date" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2.5 mb-4">
                  <div>
                    <label htmlFor="d-guests" className="block text-[9.5px] text-white/50 font-semibold uppercase tracking-widest mb-1.5">Guests</label>
                    <select id="d-guests" className="w-full bg-white/8 border border-white/12 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-green-500/40" aria-label="Number of guests"><option>2 Guests</option><option>1 Guest</option><option>3 Guests</option><option>4+</option></select>
                  </div>
                  <div>
                    <label htmlFor="d-roomcount" className="block text-[9.5px] text-white/50 font-semibold uppercase tracking-widest mb-1.5">Rooms</label>
                    <select id="d-roomcount" className="w-full bg-white/8 border border-white/12 rounded-xl px-3 py-2.5 text-white focus:outline-none focus:ring-1 focus:ring-green-500/40" aria-label="Number of rooms"><option>1 Room</option><option>2 Rooms</option><option>3 Rooms</option></select>
                  </div>
                </div>
                <button className="w-full py-3 gradient-green text-white font-semibold rounded-xl text-[13px] flex items-center justify-center gap-2 min-h-[46px] hover:shadow-lg hover:shadow-green-500/20 active:scale-[0.97] transition-all">
                  <Search size={14} aria-hidden="true" />Search Availability
                </button>
              </div>
              <div className="relative rounded-[18px] overflow-hidden h-[104px]">
                <img src={banners[activeBanner].image} alt={banners[activeBanner].title} className="w-full h-full object-cover transition-opacity duration-700" loading="lazy" />
                <div className={`absolute inset-0 bg-gradient-to-r ${banners[activeBanner].gradient}`} />
                <div className="absolute inset-0 p-3.5 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1"><Sparkles size={10} className="text-yellow-300" aria-hidden="true" /><span className="text-[9px] font-bold text-white/85 uppercase tracking-widest">{banners[activeBanner].offer}</span></div>
                    <p className="text-white font-bold text-[13.5px] leading-tight">{banners[activeBanner].title}</p>
                    <p className="text-white/65 text-[10px] mt-0.5">{banners[activeBanner].subtitle}</p>
                  </div>
                  <button className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-xl text-[10.5px] font-semibold text-white border border-white/25 whitespace-nowrap hover:bg-white/30 transition-colors min-h-[34px]">{banners[activeBanner].cta}</button>
                </div>
              </div>
              <div className="flex justify-center gap-1.5">
                {banners.map((_, i) => (
                  <button key={i} onClick={() => setActiveBanner(i)} aria-label={`Go to offer ${i + 1}`} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeBanner ? "bg-white w-5" : "bg-white/30 w-1.5 hover:bg-white/50"}`} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-white/40" aria-hidden="true">
          <ChevronDown size={18} className="animate-bounce" />
        </div>
      </section>
    </>
  );
}
