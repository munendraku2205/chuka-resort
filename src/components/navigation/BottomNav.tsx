"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, BedDouble, Compass, CalendarDays, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "home",      icon: Home,          label: "Home",    href: "#" },
  { id: "rooms",     icon: BedDouble,     label: "Rooms",   href: "#rooms" },
  { id: "activities",icon: Compass,       label: "Explore", href: "#activities" },
  { id: "packages",  icon: CalendarDays,  label: "Packages",href: "#packages" },
  { id: "contact",   icon: Phone,         label: "Call",    href: "tel:+919876543210" },
];

export default function BottomNav() {
  const [active, setActive] = useState("home");

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50"
      aria-label="Bottom navigation"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="mx-3 mb-2 rounded-2xl bg-white/88 backdrop-blur-xl shadow-premium-lg border border-gray-200/40">
        <div className="flex items-center justify-around py-1.5">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActive(item.id)}
                className="relative flex flex-col items-center py-1.5 px-2 min-w-[52px] min-h-[52px] justify-center"
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
              >
                <motion.div
                  animate={isActive ? { scale: 1.05, y: -1 } : { scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 380, damping: 22 }}
                >
                  <item.icon
                    size={20}
                    className={cn(
                      "transition-colors duration-200",
                      isActive ? "text-green-700" : "text-gray-400"
                    )}
                    strokeWidth={isActive ? 2.4 : 1.7}
                  />
                </motion.div>
                <span
                  className={cn(
                    "text-[9px] mt-0.5 font-medium transition-colors leading-none",
                    isActive ? "text-green-700" : "text-gray-400"
                  )}
                >
                  {item.label}
                </span>
                {/* Active indicator dot */}
                {isActive && (
                  <motion.div
                    layoutId="bottomNavDot"
                    className="absolute -top-0.5 w-1 h-1 bg-green-700 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
