"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import { GalleryItem } from "@/types";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all",        label: "All" },
  { id: "photos",     label: "Nature" },
  { id: "rooms",      label: "Rooms" },
  { id: "safari",     label: "Safari" },
  { id: "restaurant", label: "Food" },
  { id: "pool",       label: "Pool" },
  { id: "night-view", label: "Night" },
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const filtered = activeCategory === "all" ? galleryItems : galleryItems.filter((i) => i.category === activeCategory);

  return (
    <section id="gallery" className="py-12 md:py-16 lg:py-20 bg-gray-50/50" aria-labelledby="gallery-heading">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.42 }}
          className="px-4 sm:px-6 md:px-8 lg:px-12 mb-5 md:mb-7 md:text-center"
        >
          <span className="text-green-700 font-bold text-[11px] uppercase tracking-[0.12em]">Visual Stories</span>
          <h2 id="gallery-heading" className="mt-2 text-[26px] md:text-[2rem] lg:text-[2.25rem] font-bold text-gray-900 tracking-tight leading-tight">
            Our <span className="text-green-700">Gallery</span>
          </h2>
          <p className="mt-2 text-gray-500 text-[13.5px] md:text-[15px] max-w-md md:mx-auto leading-relaxed">
            A glimpse into the beauty awaiting you at Chuka.
          </p>
        </motion.div>

        {/* Filter pills */}
        <div className="flex gap-2 overflow-x-auto scroll-x pb-3 px-4 sm:px-6 md:px-8 lg:px-12 md:justify-center mb-5" role="tablist" aria-label="Filter gallery by category">
          {categories.map((cat) => (
            <button key={cat.id} role="tab" aria-selected={activeCategory === cat.id} onClick={() => setActiveCategory(cat.id)} className={cn("pill shrink-0", activeCategory === cat.id ? "pill-active" : "pill-inactive")}>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 md:gap-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <motion.button
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.22 }}
                  className={cn("group relative rounded-[14px] overflow-hidden focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2", index === 0 ? "md:row-span-2" : "")}
                  onClick={() => setLightbox(item)}
                  aria-label={`View ${item.alt} in lightbox`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={cn("w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]", index === 0 ? "h-full min-h-[160px] md:min-h-[280px]" : "aspect-[4/3]")}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ZoomIn size={15} className="text-white" aria-hidden="true" />
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Lightbox: ${lightbox.alt}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/96 flex items-center justify-center p-4 md:p-8"
            onClick={() => setLightbox(null)}
          >
            <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 w-11 h-11 bg-white/12 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/22 transition-all" aria-label="Close lightbox">
              <X size={19} aria-hidden="true" />
            </button>
            <motion.img
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: "spring", damping: 22, stiffness: 260 }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[84vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
