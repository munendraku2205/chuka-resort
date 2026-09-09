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

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* ─────────────────────────────────────────
          STICKY HEADER
          When not scrolled: bg-transparent (the user's requirement)
          When scrolled: frosted-white with subtle shadow
          ───────────────────────────────────────── */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/92 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06),0_4px_20px_rgba(0,0,0,0.05)] border-b border-gray-100/80"
            : "bg-transparent"   /* ← purely transparent, no tint */
        )}
      >
        {/* 16px minimum gutter on mobile, 32px tablet, 48px desktop */}
        <nav
          className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
          aria-label="Primary navigation"
        >
          <div className="flex items-center justify-between h-14 md:h-16">

            {/* Logo — always rendered, not hidden on xs */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0"
              aria-label={`${SITE_NAME} — go to homepage`}
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-xl flex items-center justify-center text-sm transition-all duration-300 shrink-0",
                  isScrolled
                    ? "bg-green-700 shadow-sm shadow-green-700/25"
                    : "bg-white/20 backdrop-blur-sm"
                )}
                aria-hidden="true"
              >
                🌿
              </div>
              <span
                className={cn(
                  "text-[15px] font-bold tracking-tight transition-colors duration-300",
                  isScrolled ? "text-gray-900" : "text-white"
                )}
              >
                {SITE_NAME}
              </span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1" role="menubar">
              {navigationItems.map((item) => {
                const isActive = activeItem === item.label;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    role="menuitem"
                    onClick={() => setActiveItem(item.label)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative px-3.5 py-2 rounded-lg text-[13.5px] font-medium transition-all duration-200",
                      isScrolled
                        ? cn("hover:bg-green-50 hover:text-green-700", isActive ? "text-green-700" : "text-gray-500")
                        : cn("hover:bg-white/10 hover:text-white", isActive ? "text-white" : "text-white/70")
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="navUnderline"
                        className={cn(
                          "absolute bottom-1 left-3.5 right-3.5 h-[2.5px] rounded-full",
                          isScrolled ? "bg-green-700" : "bg-white"
                        )}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Phone — desktop only */}
              <a
                href={`tel:${CONTACT.phone}`}
                className={cn(
                  "hidden lg:flex items-center gap-1.5 text-[12.5px] font-medium px-3 py-2 rounded-lg min-h-[40px] transition-all duration-200",
                  isScrolled
                    ? "text-gray-500 hover:text-gray-800 hover:bg-gray-100/70"
                    : "text-white/65 hover:text-white hover:bg-white/10"
                )}
                aria-label={`Call us at ${CONTACT.phone}`}
              >
                <Phone size={13} aria-hidden="true" />
                {CONTACT.phone}
              </a>

              {/* Book Now */}
              <Link
                href="#rooms"
                className={cn(
                  "hidden sm:inline-flex items-center justify-center px-4 py-2 text-[13px] font-semibold rounded-xl min-h-[40px] transition-all duration-200",
                  isScrolled
                    ? "gradient-green text-white shadow-sm shadow-green-700/20 hover:shadow-md hover:shadow-green-700/25 hover:-translate-y-px"
                    : "bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white border border-white/20"
                )}
              >
                Book Now
              </Link>

              {/* Hamburger — below lg */}
              <button
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                className={cn(
                  "lg:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200",
                  isScrolled
                    ? "text-gray-700 bg-gray-100/80 hover:bg-gray-200/70"
                    : "text-white bg-white/15 backdrop-blur-sm hover:bg-white/25"
                )}
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-drawer"
              >
                {isMobileMenuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ─────────────────────────────────────────
          MOBILE DRAWER
          ───────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
              onClick={closeMenu}
              aria-hidden="true"
            />

            <motion.div
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-[82%] max-w-[320px] bg-white z-[70] rounded-l-2xl shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-green-700 flex items-center justify-center text-sm shadow-sm shadow-green-700/20" aria-hidden="true">
                    🌿
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm leading-tight">{SITE_NAME}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">Luxury Eco Resort</p>
                  </div>
                </div>
                <button
                  onClick={closeMenu}
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X size={16} aria-hidden="true" />
                </button>
              </div>

              {/* Nav items */}
              <nav className="flex-1 overflow-y-auto py-2 px-3" aria-label="Mobile navigation">
                {navigationItems.map((item, index) => {
                  const isActive = activeItem === item.label;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => { setActiveItem(item.label); closeMenu(); }}
                        className={cn(
                          "flex items-center justify-between px-4 py-3.5 rounded-xl mb-0.5 transition-all",
                          isActive
                            ? "bg-green-50 text-green-700"
                            : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        )}
                      >
                        <span className="font-medium text-[14.5px]">{item.label}</span>
                        <ChevronRight
                          size={15}
                          aria-hidden="true"
                          className={cn("transition-colors", isActive ? "text-green-500" : "text-gray-300")}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Footer CTAs */}
              <div
                className="px-5 py-4 border-t border-gray-100 space-y-2.5 shrink-0"
                style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
              >
                <Link
                  href="#rooms"
                  onClick={closeMenu}
                  className="flex items-center justify-center w-full py-3 gradient-green text-white font-semibold rounded-xl text-[13.5px] min-h-[48px] shadow-sm shadow-green-700/20 active-scale"
                >
                  Book Your Stay
                </Link>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-3 border border-gray-200 text-gray-600 font-medium rounded-xl text-[13px] min-h-[48px] hover:border-gray-300 hover:bg-gray-50 transition-all active-scale"
                >
                  <Phone size={14} aria-hidden="true" />
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
