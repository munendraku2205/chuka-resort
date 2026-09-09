"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck } from "lucide-react";

export default function FloatingBookButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="md:hidden fixed right-4 z-40"
          style={{ bottom: "calc(90px + env(safe-area-inset-bottom, 0px))" }}
        >
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full gradient-green animate-ping opacity-25" aria-hidden="true" />
          <motion.a
            href="#rooms"
            whileTap={{ scale: 0.88 }}
            className="relative w-[52px] h-[52px] rounded-full gradient-green flex items-center justify-center shadow-luxury"
            aria-label="Book a room now"
          >
            <CalendarCheck size={21} className="text-white" aria-hidden="true" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
