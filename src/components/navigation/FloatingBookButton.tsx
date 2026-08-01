"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck } from "lucide-react";

export default function FloatingBookButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#rooms"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 20 }}
          whileTap={{ scale: 0.88 }}
          className="md:hidden fixed bottom-[88px] right-4 z-40 w-12 h-12 rounded-full gradient-green flex items-center justify-center shadow-luxury"
          aria-label="Book Now"
          style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
          <CalendarCheck size={20} className="text-white" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
