"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import { GalleryItem } from "@/types";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all",         label: "All" },
  { id: "photos",      label: "Nature" },
  { id: "rooms",       label: "Rooms" },
  { id: "safari",      label: "Safari" },
  { id: "restaurant",  label: "Food" },
  { id: "pool",        label: "Pool" },
  { id: "night-view",  label: "Night" },
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((i) => i.category === activeCategory);

  return (
    <section id="gallery" className="py-10 md:py-14 bg-gray-50/30">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="px-[0.2rem] md:px-8 lg:px-12 mb-4 md:mb-6 md:text-center"
        >
          <span className="text-green-700 font-semibold text-[10px] md:text-[11px] uppercase tracking-[0.12em]">
            Visual Stories
          </span>
          <h2 className="mt-1.5 text-[22px] md:text-[26px] lg:text-[30px] font-bold text-gray-900 tracking-tight leading-tight">
            Our <span className="text-green-700">Gallery</span>
          </h2>
          <p className="mt-1.5 text-gray-400 text-[12px] md:text-[14px] max-w-md md:mx-auto leading-relaxed">
            A glimpse into the beauty awaiting you.
          </p>
        </motion.div>

        {/* Filter pills */}
        <div className="flex gap-2 overflow-x-auto scroll-x pb-3 px-[0.2rem] md:px-8 lg:px-12 md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-3.5 py-2 rounded-xl text-[11px] font-medium transition-all duration-200 shrink-0 active-scale min-h-[36px]",
                activeCategory === cat.id
                  ? "gradient-green text-white shadow-sm"
                  : "bg-white text-gray-500 border border-gray-200/80 hover:bg-gray-50"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="px-[0.2rem] md:px-8 lg:px-12 mt-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2.5 md:gap-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "group cursor-pointer relative rounded-[12px] md:rounded-[14px] overflow-hidden",
                    /* First item spans 2 rows on md+ for visual interest */
                    index === 0 ? "md:row-span-2" : ""
                  )}
                  onClick={() => setLightbox(item)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={cn(
                      "w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]",
                      index === 0
                        ? "h-full min-h-[160px] sm:min-h-[180px] md:min-h-[280px]"
                        : "aspect-[4/3]"
                    )}
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-200 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ZoomIn size={14} className="text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
              aria-label="Close lightbox"
            >
              <X size={18} />
            </button>
            <motion.img
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: "spring", damping: 22, stiffness: 260 }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[82vh] object-contain rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
