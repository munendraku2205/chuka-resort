"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Play,
  MapPin,
  Search,
  BedDouble,
  Waves,
  Music,
  Flame,
  UtensilsCrossed,
  TreePine,
  Camera,
  PartyPopper,
  Star,
  Heart,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { STATS } from "@/constants";
import { banners } from "@/data/banners";
import { rooms } from "@/data/rooms";

const quickActions = [
  { icon: BedDouble,       label: "Rooms",    href: "#rooms",      color: "bg-green-50 text-green-700" },
  { icon: Waves,           label: "Pool",     href: "#activities", color: "bg-blue-50 text-blue-700" },
  { icon: Music,           label: "DJ Night", href: "#activities", color: "bg-purple-50 text-purple-700" },
  { icon: Flame,           label: "Bonfire",  href: "#activities", color: "bg-orange-50 text-orange-700" },
  { icon: UtensilsCrossed, label: "Dining",   href: "#restaurant", color: "bg-red-50 text-red-700" },
  { icon: TreePine,        label: "Safari",   href: "#activities", color: "bg-emerald-50 text-emerald-700" },
  { icon: Camera,          label: "Gallery",  href: "#gallery",    color: "bg-pink-50 text-pink-700" },
  { icon: PartyPopper,     label: "Events",   href: "#packages",   color: "bg-amber-50 text-amber-700" },
];

export default function HeroSection() {
  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActiveBanner((p) => (p + 1) % banners.length),
      4500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* ══════════════════════════════════════════
          MOBILE HERO
      ══════════════════════════════════════════ */}
      <section className="md:hidden bg-[#fcfbf7]">

        {/* Hero image */}
        <div className="relative h-[42vh] min-h-[250px] max-h-[360px] overflow-hidden rounded-b-[1.2rem] mx-2 mt-2">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
            alt="Chuka Eco Resort aerial view"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/65" />

          {/* Location pill */}
          <div className="absolute top-[3.75rem] left-[0.2rem]">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white/12 backdrop-blur-md rounded-full border border-white/15">
              <MapPin size={10} className="text-green-400 shrink-0" />
              <span className="text-white/85 text-[9px] font-medium">Pilibhit Tiger Reserve</span>
            </div>
          </div>

          {/* Welcome card overlay */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="absolute bottom-4 left-[0.2rem] right-[0.2rem]"
          >
            <div className="glass-dark rounded-[18px] px-4 py-3.5">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-sm leading-none">🌿</span>
                <span className="text-green-300 text-[9px] font-semibold uppercase tracking-widest">
                  Welcome to
                </span>
              </div>
              <h1 className="text-white font-bold text-[18px] leading-tight tracking-tight">
                Chuka Eco Resort
              </h1>
              <p className="text-white/80 text-[10px] mt-0.5">Stay • Relax • Explore</p>
            </div>
          </motion.div>
        </div>

        {/* ── Booking card ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.35 }}
          className="mx-2 -mt-6 relative z-10"
        >
          <div className="bg-white rounded-[20px] p-4 shadow-premium-lg border border-slate-100/80">
            <div className="grid grid-cols-2 gap-2 mb-2.5">
              <div>
                <label htmlFor="hero-checkin" className="text-[9px] text-gray-400 font-semibold uppercase tracking-widest block mb-1">Check-in</label>
                <input id="hero-checkin" type="date" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500/25 transition-all" aria-label="Check-in date" />
              </div>
              <div>
                <label htmlFor="hero-checkout" className="text-[9px] text-gray-400 font-semibold uppercase tracking-widest block mb-1">Check-out</label>
                <input id="hero-checkout" type="date" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500/25 transition-all" aria-label="Check-out date" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div>
                <label htmlFor="hero-guests" className="text-[9px] text-gray-400 font-semibold uppercase tracking-widest block mb-1">Guests</label>
                <select id="hero-guests" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500/25" aria-label="Number of guests">
                  <option>2 Guests</option><option>1 Guest</option><option>3 Guests</option><option>4+ Guests</option>
                </select>
              </div>
              <div>
                <label htmlFor="hero-rooms" className="text-[9px] text-gray-400 font-semibold uppercase tracking-widest block mb-1">Rooms</label>
                <select id="hero-rooms" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500/25" aria-label="Number of rooms">
                  <option>1 Room</option><option>2 Rooms</option><option>3 Rooms</option>
                </select>
              </div>
            </div>
            <button className="w-full py-3 gradient-green text-white font-semibold rounded-xl flex items-center justify-center gap-2 active-scale shadow-sm shadow-green-700/15 text-[13px] min-h-[48px]">
              <Search size={14} />Search Rooms
            </button>
          </div>
        </motion.div>

        {/* ── Special Offers / Banners ── */}
        <div className="mt-5 px-[0.2rem]">
          <div className="flex items-center justify-between mb-2.5">
            <h3 className="text-[13px] font-bold text-gray-900">Special Offers</h3>
            <span className="text-[11px] text-green-700 font-semibold">View All</span>
          </div>
          <div className="flex gap-3 overflow-x-auto scroll-x pb-1.5 -mx-[0.2rem] px-[0.2rem]">
            {banners.map((banner) => (
              <div key={banner.id} className="relative w-full min-w-[220px] h-[120px] rounded-[16px] overflow-hidden shrink-0 active-scale sm:w-auto">
                <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" loading="lazy" />
                <div className={`absolute inset-0 bg-gradient-to-r ${banner.gradient}`} />
                <div className="absolute inset-0 p-3 flex flex-col justify-between">
                  <span className="self-start px-2 py-0.5 bg-white/18 backdrop-blur-sm rounded-md text-[8px] font-bold text-white uppercase tracking-wider">{banner.offer}</span>
                  <div>
                    <h4 className="text-white font-bold text-[12px] leading-tight">{banner.title}</h4>
                    <p className="text-white/80 text-[9px] mt-0.5">{banner.subtitle}</p>
                    <button className="mt-1.5 px-3 py-1 bg-white/18 backdrop-blur-sm rounded-lg text-[9px] font-semibold text-white border border-white/25 active-scale min-h-[28px]">{banner.cta}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Quick Actions ── */}
        <div className="mt-5 px-[0.2rem]">
          <div className="flex gap-3 overflow-x-auto scroll-x pb-1.5 -mx-[0.2rem] px-[0.2rem]">
            {quickActions.map((action) => (
              <a key={action.label} href={action.href} className="flex flex-col items-center gap-1.5 min-w-[56px] active-scale">
                <div className={`w-11 h-11 rounded-[14px] flex items-center justify-center shadow-sm border border-gray-100/50 ${action.color}`}>
                  <action.icon size={17} />
                </div>
                <span className="text-[9px] font-medium text-gray-500 whitespace-nowrap">{action.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* ── Featured Stays ── */}
        <div className="mt-5 px-[0.2rem] pb-5">
          <div className="flex items-center justify-between mb-2.5">
            <h3 className="text-[13px] font-bold text-gray-900">Featured Stays</h3>
            <a href="#rooms" className="flex items-center gap-0.5 text-[11px] text-green-700 font-semibold">See All <ChevronRight size={11} /></a>
          </div>
          <div className="flex gap-3 overflow-x-auto scroll-x pb-1.5 -mx-[0.2rem] px-[0.2rem]">
            {rooms.slice(0, 4).map((room) => (
              <div key={room.id} className="min-w-[175px] max-w-[200px] bg-white rounded-[14px] overflow-hidden shadow-premium border border-gray-100/60 shrink-0 active-scale">
                <div className="relative h-[96px] overflow-hidden">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover" loading="lazy" />
                  <button className="absolute top-2 right-2 w-6 h-6 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center active:scale-90" aria-label={`Save ${room.name}`}>
                    <Heart size={11} className="text-gray-400" />
                  </button>
                  <div className="absolute bottom-1.5 left-2 flex items-center gap-1 px-1.5 py-0.5 bg-white/90 backdrop-blur-sm rounded-md">
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
                    <button className="px-2.5 py-1 gradient-green text-white text-[9px] font-semibold rounded-lg active-scale min-h-[28px]">Book</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DESKTOP HERO
      ══════════════════════════════════════════ */}
      <section className="relative hidden md:block h-[72vh] min-h-[520px] max-h-[720px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80" alt="Chuka Eco Resort Forest" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15" />
        </div>

        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-8 lg:px-12 flex items-center">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-14 items-center w-full">
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/8 backdrop-blur-md border border-white/12 rounded-full mb-4">
                <MapPin size={11} className="text-green-400" />
                <span className="text-white/75 text-[11px] font-medium">Near Pilibhit Tiger Reserve, India</span>
              </div>
              <h1 className="text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-[1.08] tracking-tight">
                Experience{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400">Luxury</span>
                <br />in Nature
              </h1>
              <p className="mt-4 text-[14px] lg:text-[15px] text-white/80 max-w-[420px] leading-relaxed">
                Stay, Explore, Celebrate, and Create Memories at Chuka Eco Resort — where the jungle meets five-star comfort.
              </p>
              <div className="mt-5 flex items-center gap-2.5 flex-wrap">
                <a href="#rooms" className="px-5 py-2.5 gradient-green text-white text-[12px] font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-green-700/20 active:scale-[0.97] min-h-[40px]">Book Now</a>
                <a href="#about" className="px-5 py-2.5 bg-white/8 hover:bg-white/12 backdrop-blur-sm border border-white/15 text-white text-[12px] font-semibold rounded-xl transition-all min-h-[40px]">Explore Resort</a>
                <button className="flex items-center gap-2 px-4 py-2.5 text-white/85 hover:text-white text-[12px] font-medium transition-colors min-h-[40px]">
                  <span className="flex items-center justify-center w-7 h-7 bg-white/12 backdrop-blur-sm rounded-full border border-white/15"><Play size={10} fill="white" /></span>
                  Video
                </button>
              </div>
              <div className="mt-7 flex items-center gap-5 flex-wrap">
                {STATS.map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-[17px] font-bold text-white">{stat.value}</div>
                      <div className="text-[9px] text-white/70 uppercase tracking-wider mt-0.5">{stat.label}</div>
                    </div>
                    {i < STATS.length - 1 && <div className="w-px h-7 bg-white/10" />}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="hidden lg:flex flex-col gap-3.5">
              <div className="bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-[20px] p-4.5 shadow-2xl">
                <h3 className="text-white font-semibold text-[13px] mb-3.5 flex items-center gap-2"><Search size={13} className="text-green-400" />Quick Booking</h3>
                <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                  <div>
                    <label htmlFor="desktop-checkin" className="text-[9px] text-white/40 font-medium uppercase tracking-widest block mb-1">Check In</label>
                    <input id="desktop-checkin" type="date" className="w-full bg-white/6 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-green-500/30 transition-all" aria-label="Desktop check-in date" />
                  </div>
                  <div>
                    <label htmlFor="desktop-checkout" className="text-[9px] text-white/40 font-medium uppercase tracking-widest block mb-1">Check Out</label>
                    <input id="desktop-checkout" type="date" className="w-full bg-white/6 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-green-500/30 transition-all" aria-label="Desktop check-out date" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2.5 mb-3.5">
                  <div>
                    <label htmlFor="desktop-guests" className="text-[9px] text-white/40 font-medium uppercase tracking-widest block mb-1">Guests</label>
                    <select id="desktop-guests" className="w-full bg-white/6 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-green-500/30" aria-label="Number of guests"><option>2 Guests</option><option>1</option><option>3</option><option>4+</option></select>
                  </div>
                  <div>
                    <label htmlFor="desktop-roomcount" className="text-[9px] text-white/40 font-medium uppercase tracking-widest block mb-1">Rooms</label>
                    <select id="desktop-roomcount" className="w-full bg-white/6 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-green-500/30" aria-label="Number of rooms"><option>1 Room</option><option>2</option><option>3</option></select>
                  </div>
                </div>
                <button className="w-full py-2.5 gradient-green text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-green-500/15 active:scale-[0.97] text-[12px] flex items-center justify-center gap-1.5 min-h-[40px]"><Search size={13} />Search Availability</button>
              </div>
              <div className="relative rounded-[16px] overflow-hidden h-[100px]">
                <img src={banners[activeBanner].image} alt={banners[activeBanner].title} className="w-full h-full object-cover transition-opacity duration-700" loading="lazy" />
                <div className={`absolute inset-0 bg-gradient-to-r ${banners[activeBanner].gradient}`} />
                <div className="absolute inset-0 p-3.5 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5"><Sparkles size={10} className="text-yellow-300" /><span className="text-[8px] font-bold text-white/80 uppercase tracking-widest">{banners[activeBanner].offer}</span></div>
                    <h4 className="text-white font-bold text-[13px] leading-tight">{banners[activeBanner].title}</h4>
                    <p className="text-white/60 text-[9px] mt-0.5">{banners[activeBanner].subtitle}</p>
                  </div>
                  <button className="px-3 py-1.5 bg-white/18 backdrop-blur-sm rounded-xl text-[10px] font-semibold text-white border border-white/25 whitespace-nowrap hover:bg-white/25 transition-colors min-h-[32px]">{banners[activeBanner].cta}</button>
                </div>
              </div>
              <div className="flex justify-center gap-1.5">
                {banners.map((_, i) => (
                  <button key={i} onClick={() => setActiveBanner(i)} aria-label={`Go to offer ${i + 1}`} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeBanner ? "bg-white w-4" : "bg-white/30 w-1.5"}`} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-white/35">
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </section>
    </>
  );
}
