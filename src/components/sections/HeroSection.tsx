"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Play, MapPin, Search, BedDouble, Waves, Music, Flame, UtensilsCrossed, TreePine, Camera, PartyPopper, Star, Heart, ChevronRight, Sparkles } from "lucide-react";
import { STATS } from "@/constants";
import { banners } from "@/data/banners";
import { rooms } from "@/data/rooms";

const quickActions = [
  { icon: BedDouble, label: "Rooms", href: "#rooms", color: "bg-green-50 text-green-700" },
  { icon: Waves, label: "Pool", href: "#activities", color: "bg-blue-50 text-blue-700" },
  { icon: Music, label: "DJ Night", href: "#activities", color: "bg-purple-50 text-purple-700" },
  { icon: Flame, label: "Bonfire", href: "#activities", color: "bg-orange-50 text-orange-700" },
  { icon: UtensilsCrossed, label: "Dining", href: "#restaurant", color: "bg-red-50 text-red-700" },
  { icon: TreePine, label: "Safari", href: "#activities", color: "bg-emerald-50 text-emerald-700" },
  { icon: Camera, label: "Gallery", href: "#gallery", color: "bg-pink-50 text-pink-700" },
  { icon: PartyPopper, label: "Events", href: "#packages", color: "bg-amber-50 text-amber-700" },
];

export default function HeroSection() {
  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % banners.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ===== MOBILE HERO ===== */}
      <section className="md:hidden bg-[#fdfcfa]">
        {/* Hero Image */}
        <div className="relative h-[38vh] min-h-[260px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
            alt="Chuka Eco Resort"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/60" />

          {/* Location */}
          <div className="absolute top-14 left-5">
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/12 backdrop-blur-md rounded-full border border-white/15">
              <MapPin size={10} className="text-green-400" />
              <span className="text-white/85 text-[9px] font-medium">Pilibhit Tiger Reserve</span>
            </div>
          </div>

          {/* Welcome Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.45 }}
            className="absolute bottom-4 left-5 right-5"
          >
            <div className="glass-dark rounded-[18px] px-4 py-3.5">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-sm">🌿</span>
                <span className="text-green-300 text-[9px] font-semibold uppercase tracking-widest">Welcome to</span>
              </div>
              <h1 className="text-white font-bold text-[17px] leading-tight">Chuka Eco Resort</h1>
              <p className="text-white/50 text-[10px] mt-0.5">Stay • Relax • Explore</p>
            </div>
          </motion.div>
        </div>

        {/* Booking Card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.35 }}
          className="mx-5 -mt-4 relative z-10"
        >
          <div className="bg-white rounded-[18px] p-4 shadow-premium-lg border border-gray-100/60">
            <div className="grid grid-cols-2 gap-2 mb-2.5">
              <div>
                <label className="text-[8px] text-gray-400 font-semibold uppercase tracking-widest block mb-1">Check-in</label>
                <input type="date" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-3 py-2 text-[11px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500/25 transition-all" />
              </div>
              <div>
                <label className="text-[8px] text-gray-400 font-semibold uppercase tracking-widest block mb-1">Check-out</label>
                <input type="date" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-3 py-2 text-[11px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500/25 transition-all" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div>
                <label className="text-[8px] text-gray-400 font-semibold uppercase tracking-widest block mb-1">Guests</label>
                <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-3 py-2 text-[11px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500/25 appearance-none">
                  <option>2 Guests</option><option>1 Guest</option><option>3 Guests</option><option>4+</option>
                </select>
              </div>
              <div>
                <label className="text-[8px] text-gray-400 font-semibold uppercase tracking-widest block mb-1">Rooms</label>
                <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-3 py-2 text-[11px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500/25 appearance-none">
                  <option>1 Room</option><option>2 Rooms</option><option>3 Rooms</option>
                </select>
              </div>
            </div>
            <button className="w-full py-2.5 gradient-green text-white font-semibold rounded-xl flex items-center justify-center gap-1.5 active-scale shadow-sm shadow-green-700/15 text-[12px]">
              <Search size={13} />Search Rooms
            </button>
          </div>
        </motion.div>

        {/* Banners */}
        <div className="mt-5 px-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[13px] font-bold text-gray-900">Special Offers</h3>
            <span className="text-[10px] text-green-700 font-semibold">View All</span>
          </div>
          <div className="flex gap-3 overflow-x-auto scroll-x pb-1 -mx-5 px-5">
            {banners.map((banner) => (
              <div key={banner.id} className="relative min-w-[240px] h-[120px] rounded-[16px] overflow-hidden shrink-0 active-scale">
                <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" loading="lazy" />
                <div className={`absolute inset-0 bg-gradient-to-r ${banner.gradient}`} />
                <div className="absolute inset-0 p-3 flex flex-col justify-between">
                  <span className="self-start px-2 py-0.5 bg-white/18 backdrop-blur-sm rounded-md text-[8px] font-bold text-white uppercase tracking-wider">{banner.offer}</span>
                  <div>
                    <h4 className="text-white font-bold text-[13px] leading-tight">{banner.title}</h4>
                    <p className="text-white/60 text-[9px] mt-0.5">{banner.subtitle}</p>
                    <button className="mt-1.5 px-3 py-1 bg-white/18 backdrop-blur-sm rounded-lg text-[9px] font-semibold text-white border border-white/25 active-scale">{banner.cta}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-5 px-5">
          <div className="flex gap-3 overflow-x-auto scroll-x pb-1 -mx-5 px-5">
            {quickActions.map((action) => (
              <a key={action.label} href={action.href} className="flex flex-col items-center gap-1.5 min-w-[56px] active-scale">
                <div className={`w-10 h-10 rounded-[14px] flex items-center justify-center shadow-sm border border-gray-100/50 ${action.color}`}>
                  <action.icon size={17} />
                </div>
                <span className="text-[9px] font-medium text-gray-500">{action.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Featured Stays */}
        <div className="mt-5 px-5 pb-5">
          <div className="flex items-center justify-between mb-2.5">
            <h3 className="text-[13px] font-bold text-gray-900">Featured Stays</h3>
            <a href="#rooms" className="flex items-center gap-0.5 text-[10px] text-green-700 font-semibold">
              See All <ChevronRight size={11} />
            </a>
          </div>
          <div className="flex gap-3 overflow-x-auto scroll-x pb-1 -mx-5 px-5">
            {rooms.slice(0, 4).map((room) => (
              <div key={room.id} className="min-w-[185px] bg-white rounded-[16px] overflow-hidden shadow-premium border border-gray-100/60 shrink-0 active-scale">
                <div className="relative h-[100px] overflow-hidden">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover" loading="lazy" />
                  <button className="absolute top-2 right-2 w-6 h-6 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center active:scale-90">
                    <Heart size={11} className="text-gray-400" />
                  </button>
                  <div className="absolute bottom-2 left-2 flex items-center gap-1 px-1.5 py-0.5 bg-white/90 backdrop-blur-sm rounded-md">
                    <Star size={8} fill="#f59e0b" className="text-amber-400" />
                    <span className="text-[8px] font-bold text-gray-800">{room.rating}</span>
                  </div>
                </div>
                <div className="p-2.5">
                  <h4 className="font-semibold text-gray-900 text-[11px] leading-tight line-clamp-1">{room.name}</h4>
                  <div className="flex items-center justify-between mt-1.5">
                    <div>
                      <span className="text-[13px] font-bold text-gray-900">₹{room.price.toLocaleString()}</span>
                      <span className="text-[8px] text-gray-400">/night</span>
                    </div>
                    <button className="px-2.5 py-1 gradient-green text-white text-[8px] font-semibold rounded-lg active-scale">Book</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DESKTOP HERO ===== */}
      <section className="relative hidden md:block h-[72vh] min-h-[520px] max-h-[720px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80"
            alt="Chuka Eco Resort Forest"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15" />
        </div>

        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-8 lg:px-12 flex items-center">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-14 items-center w-full">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/8 backdrop-blur-md border border-white/12 rounded-full mb-4">
                <MapPin size={11} className="text-green-400" />
                <span className="text-white/75 text-[11px] font-medium">Near Pilibhit Tiger Reserve, India</span>
              </div>

              <h1 className="text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-[1.08] tracking-tight">
                Experience{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400">Luxury</span>
                <br />in Nature
              </h1>

              <p className="mt-4 text-[14px] lg:text-[15px] text-white/55 max-w-[420px] leading-relaxed">
                Stay, Explore, Celebrate, and Create Memories at Chuka Eco Resort — where the jungle meets five-star comfort.
              </p>

              <div className="mt-5 flex items-center gap-2.5">
                <a href="#rooms" className="px-5 py-2.5 gradient-green text-white text-[12px] font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-green-700/20 active:scale-[0.97]">
                  Book Now
                </a>
                <a href="#about" className="px-5 py-2.5 bg-white/8 hover:bg-white/12 backdrop-blur-sm border border-white/15 text-white text-[12px] font-semibold rounded-xl transition-all">
                  Explore Resort
                </a>
                <button className="flex items-center gap-2 px-4 py-2.5 text-white/60 hover:text-white text-[12px] font-medium transition-colors">
                  <span className="flex items-center justify-center w-7 h-7 bg-white/12 backdrop-blur-sm rounded-full border border-white/15">
                    <Play size={10} fill="white" />
                  </span>
                  Video
                </button>
              </div>

              {/* Stats */}
              <div className="mt-7 flex items-center gap-5">
                {STATS.map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-[17px] font-bold text-white">{stat.value}</div>
                      <div className="text-[9px] text-white/40 uppercase tracking-wider mt-0.5">{stat.label}</div>
                    </div>
                    {i < STATS.length - 1 && <div className="w-px h-7 bg-white/10" />}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Booking + Promo */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:flex flex-col gap-3.5"
            >
              {/* Booking Widget */}
              <div className="bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-[20px] p-4.5 shadow-2xl">
                <h3 className="text-white font-semibold text-[13px] mb-3.5 flex items-center gap-2">
                  <Search size={13} className="text-green-400" />Quick Booking
                </h3>
                <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                  <div>
                    <label className="text-[9px] text-white/40 font-medium uppercase tracking-widest block mb-1">Check In</label>
                    <input type="date" className="w-full bg-white/6 border border-white/10 rounded-xl px-3 py-2 text-white text-[11px] focus:outline-none focus:ring-1 focus:ring-green-500/30 transition-all" />
                  </div>
                  <div>
                    <label className="text-[9px] text-white/40 font-medium uppercase tracking-widest block mb-1">Check Out</label>
                    <input type="date" className="w-full bg-white/6 border border-white/10 rounded-xl px-3 py-2 text-white text-[11px] focus:outline-none focus:ring-1 focus:ring-green-500/30 transition-all" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2.5 mb-3.5">
                  <div>
                    <label className="text-[9px] text-white/40 font-medium uppercase tracking-widest block mb-1">Guests</label>
                    <select className="w-full bg-white/6 border border-white/10 rounded-xl px-3 py-2 text-white text-[11px] focus:outline-none focus:ring-1 focus:ring-green-500/30">
                      <option>2 Guests</option><option>1</option><option>3</option><option>4+</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[9px] text-white/40 font-medium uppercase tracking-widest block mb-1">Rooms</label>
                    <select className="w-full bg-white/6 border border-white/10 rounded-xl px-3 py-2 text-white text-[11px] focus:outline-none focus:ring-1 focus:ring-green-500/30">
                      <option>1 Room</option><option>2</option><option>3</option>
                    </select>
                  </div>
                </div>
                <button className="w-full py-2.5 gradient-green text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-green-500/15 active:scale-[0.97] text-[12px] flex items-center justify-center gap-1.5">
                  <Search size={13} />Search Availability
                </button>
              </div>

              {/* Promo Banner */}
              <div className="relative rounded-[16px] overflow-hidden h-[100px]">
                <img src={banners[activeBanner].image} alt={banners[activeBanner].title} className="w-full h-full object-cover transition-opacity duration-700" loading="lazy" />
                <div className={`absolute inset-0 bg-gradient-to-r ${banners[activeBanner].gradient}`} />
                <div className="absolute inset-0 p-3.5 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <Sparkles size={10} className="text-yellow-300" />
                      <span className="text-[8px] font-bold text-white/80 uppercase tracking-widest">{banners[activeBanner].offer}</span>
                    </div>
                    <h4 className="text-white font-bold text-[14px] leading-tight">{banners[activeBanner].title}</h4>
                    <p className="text-white/50 text-[10px] mt-0.5">{banners[activeBanner].subtitle}</p>
                  </div>
                  <button className="px-3.5 py-1.5 bg-white/15 backdrop-blur-sm rounded-xl text-[10px] font-semibold text-white border border-white/20 hover:bg-white/25 transition-all shrink-0">
                    {banners[activeBanner].cta}
                  </button>
                </div>
                <div className="absolute bottom-2 left-3.5 flex gap-1">
                  {banners.slice(0, 5).map((_, i) => (
                    <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === activeBanner % 5 ? "bg-white w-3.5" : "bg-white/30 w-1"}`} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <ChevronDown size={18} className="text-white/25" />
        </motion.div>
      </section>
    </>
  );
}
