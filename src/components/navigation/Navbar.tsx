"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
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

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* ── Sticky Header ── */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.06)] border-b border-gray-100/70"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-[1400px] mx-auto px-[0.2rem] md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-14 md:h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 min-w-0 shrink-0">
              <div
                className={cn(
                  "w-8 h-8 rounded-xl flex items-center justify-center text-sm transition-all duration-300",
                  isScrolled
                    ? "bg-green-700 shadow-sm shadow-green-700/20"
                    : "bg-white/15 backdrop-blur-sm"
                )}
              >
                🌿
              </div>
              <span
                className={cn(
                  "text-sm font-bold tracking-tight transition-colors duration-300 hidden xs:block sm:block",
                  isScrolled ? "text-gray-900" : "text-white"
                )}
              >
                {SITE_NAME}
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
                    activeItem === item.label &&
                      (isScrolled ? "text-green-700" : "text-white")
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
              {/* Phone link — desktop only */}
              <a
                href={`tel:${CONTACT.phone}`}
                className={cn(
                  "hidden lg:flex items-center gap-1.5 text-[12px] px-3 py-1.5 rounded-lg transition-all min-h-[36px]",
                  isScrolled
                    ? "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                    : "text-white/60 hover:text-white hover:bg-white/8"
                )}
              >
                <Phone size={12} />
                {CONTACT.phone}
              </a>

              {/* Book Now — sm and up, hidden on lg (handled by drawer CTA) */}
              <Link
                href="#rooms"
                className={cn(
                  "hidden sm:inline-flex items-center justify-center px-4 py-2 text-[12px] font-semibold rounded-xl transition-all duration-200 min-h-[40px]",
                  isScrolled
                    ? "gradient-green text-white shadow-sm shadow-green-700/15 hover:shadow-md hover:shadow-green-700/20"
                    : "bg-white/12 hover:bg-white/20 backdrop-blur-sm text-white border border-white/15"
                )}
              >
                Book Now
              </Link>

              {/* Hamburger — visible below lg */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "lg:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-all",
                  isScrolled
                    ? "text-gray-700 bg-gray-100/80"
                    : "text-white bg-white/12 backdrop-blur-sm"
                )}
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/45 backdrop-blur-sm z-[60]"
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-[82%] max-w-[320px] bg-white z-[70] rounded-l-2xl shadow-2xl flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100/80 shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-green-700 flex items-center justify-center text-sm shadow-sm shadow-green-700/20">
                    🌿
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm leading-tight">{SITE_NAME}</h3>
                    <p className="text-[10px] text-gray-400 mt-0.5">Luxury Eco Resort</p>
                  </div>
                </div>
                <button
                  onClick={closeMenu}
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Nav Items — scrollable middle */}
              <nav className="flex-1 overflow-y-auto py-2 px-3">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.035 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => {
                        setActiveItem(item.label);
                        closeMenu();
                      }}
                      className={cn(
                        "flex items-center justify-between px-4 py-3.5 rounded-xl transition-all active-scale",
                        activeItem === item.label
                          ? "bg-green-50 text-green-700"
                          : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                      )}
                    >
                      <span className="font-medium text-[14px]">{item.label}</span>
                      <ChevronRight
                        size={15}
                        className={cn(
                          "transition-colors",
                          activeItem === item.label ? "text-green-500" : "text-gray-300"
                        )}
                      />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer Footer — CTA buttons */}
              <div
                className="px-5 py-4 border-t border-gray-100/80 space-y-2.5 shrink-0"
                style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
              >
                <Link
                  href="#rooms"
                  onClick={closeMenu}
                  className="flex items-center justify-center w-full py-3 gradient-green text-white font-semibold rounded-xl active-scale shadow-sm shadow-green-700/15 text-[13px] min-h-[48px]"
                >
                  Book Your Stay
                </Link>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-3 border border-gray-200 text-gray-600 font-medium rounded-xl active-scale text-[13px] min-h-[48px]"
                >
                  <Phone size={14} />
                  {CONTACT.phone}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
