"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, BedDouble, Compass, CalendarDays, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "home",       icon: Home,         label: "Home",     href: "#" },
  { id: "rooms",      icon: BedDouble,    label: "Rooms",    href: "#rooms" },
  { id: "activities", icon: Compass,      label: "Explore",  href: "#activities" },
  { id: "packages",   icon: CalendarDays, label: "Packages", href: "#packages" },
  { id: "contact",    icon: Phone,        label: "Call",     href: "tel:+919876543210" },
];

export default function BottomNav() {
  const [active, setActive] = useState("home");

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50"
      aria-label="Mobile bottom navigation"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="mx-3 mb-2 rounded-2xl bg-white/94 backdrop-blur-2xl shadow-premium-lg border border-gray-200/50">
        <div className="flex items-center justify-around px-1 py-1">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActive(item.id)}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
                className="relative flex flex-col items-center justify-center min-w-[52px] min-h-[52px] py-1 gap-0.5"
              >
                {/* Active bg pill */}
                {isActive && (
                  <motion.span
                    layoutId="bottomNavPill"
                    className="absolute inset-0 bg-green-50 rounded-[14px]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <motion.div
                  animate={isActive ? { scale: 1.08, y: -1 } : { scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 420, damping: 24 }}
                  className="relative z-10"
                >
                  <item.icon
                    size={21}
                    aria-hidden="true"
                    className={cn("transition-colors duration-200", isActive ? "text-green-700" : "text-gray-400")}
                    strokeWidth={isActive ? 2.5 : 1.8}
                  />
                </motion.div>
                <span className={cn("relative z-10 text-[9.5px] font-semibold transition-colors leading-none", isActive ? "text-green-700" : "text-gray-400")}>
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
