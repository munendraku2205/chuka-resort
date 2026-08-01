"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Bell, ChevronRight } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { SITE_NAME, CONTACT } from "@/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
          isScrolled
            ? "bg-white/85 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.04)] border-b border-gray-100/60"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className={cn(
                "w-8 h-8 rounded-xl flex items-center justify-center text-sm transition-all duration-300",
                isScrolled ? "bg-green-700 shadow-sm shadow-green-700/20" : "bg-white/15 backdrop-blur-sm"
              )}>
                🌿
              </div>
              <span className={cn(
                "text-sm font-bold tracking-tight transition-colors duration-300 hidden sm:block",
                isScrolled ? "text-gray-900" : "text-white"
              )}>
                Chuka Resort
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  className={cn(
                    "relative px-3 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-200",
                    isScrolled
                      ? "text-gray-500 hover:text-green-700 hover:bg-green-50/50"
                      : "text-white/70 hover:text-white hover:bg-white/8",
                    activeItem === item.label && (isScrolled ? "text-green-700" : "text-white")
                  )}
                >
                  {item.label}
                  {activeItem === item.label && (
                    <motion.div
                      layoutId="navIndicator"
                      className={cn(
                        "absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full",
                        isScrolled ? "bg-green-700" : "bg-white"
                      )}
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <button
                className={cn(
                  "md:hidden p-2 rounded-xl transition-all",
                  isScrolled ? "text-gray-600 bg-gray-100/80" : "text-white bg-white/12 backdrop-blur-sm"
                )}
                aria-label="Notifications"
              >
                <Bell size={17} />
              </button>

              <a
                href={`tel:${CONTACT.phone}`}
                className={cn(
                  "hidden lg:flex items-center gap-1.5 text-[12px] px-3 py-1.5 rounded-lg transition-all",
                  isScrolled ? "text-gray-400 hover:text-gray-600 hover:bg-gray-50" : "text-white/60 hover:text-white hover:bg-white/8"
                )}
              >
                <Phone size={12} />
                {CONTACT.phone}
              </a>

              <Link
                href="#rooms"
                className={cn(
                  "hidden sm:inline-flex px-4 py-2 text-[12px] font-semibold rounded-xl transition-all duration-200",
                  isScrolled
                    ? "gradient-green text-white shadow-sm shadow-green-700/15 hover:shadow-md hover:shadow-green-700/20"
                    : "bg-white/12 hover:bg-white/20 backdrop-blur-sm text-white border border-white/15"
                )}
              >
                Book Now
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "lg:hidden p-2 rounded-xl transition-all",
                  isScrolled ? "text-gray-700 bg-gray-100/80" : "text-white bg-white/12 backdrop-blur-sm"
                )}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[320px] bg-white z-[70] rounded-l-2xl shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-green-700 flex items-center justify-center text-sm">🌿</div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">{SITE_NAME}</h3>
                      <p className="text-[10px] text-gray-400">Luxury Eco Resort</p>
                    </div>
                  </div>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-xl bg-gray-50 text-gray-500" aria-label="Close menu">
                    <X size={16} />
                  </button>
                </div>

                {/* Nav Items */}
                <div className="flex-1 overflow-y-auto py-3 px-3">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between px-4 py-3.5 rounded-xl text-gray-700 hover:bg-green-50 hover:text-green-700 transition-all active-scale"
                      >
                        <span className="font-medium text-[14px]">{item.label}</span>
                        <ChevronRight size={15} className="text-gray-300" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-5 py-4 border-t border-gray-100 space-y-2.5">
                  <Link
                    href="#rooms"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center py-3 gradient-green text-white font-semibold rounded-xl active-scale shadow-sm shadow-green-700/15 text-[13px]"
                  >
                    Book Your Stay
                  </Link>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="flex items-center justify-center gap-2 w-full py-2.5 border border-gray-200 text-gray-600 font-medium rounded-xl active-scale text-[13px]"
                  >
                    <Phone size={14} />
                    Call Us
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
