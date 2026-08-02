"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "@/data/faq";
import { cn } from "@/lib/utils";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("1");

  return (
    <section id="faq" className="py-10 md:py-14 bg-gray-50/30">
      <div className="max-w-[680px] mx-auto px-[0.2rem] md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-5 md:mb-7 md:text-center"
        >
          <span className="text-green-700 font-semibold text-[10px] md:text-[11px] uppercase tracking-[0.12em]">
            Have Questions?
          </span>
          <h2 className="mt-1.5 text-[22px] md:text-[26px] font-bold text-gray-900 tracking-tight leading-tight">
            Frequently Asked <span className="text-green-700">Questions</span>
          </h2>
        </motion.div>

        {/* Accordion list */}
        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="bg-white rounded-[13px] border border-gray-100/60 overflow-hidden shadow-sm hover:shadow-premium transition-shadow duration-200"
              >
                {/* Question trigger */}
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center gap-2.5 px-4 py-3.5 text-left min-h-[52px]"
                  aria-expanded={isOpen}
                >
                  <div
                    className={cn(
                      "w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200",
                      isOpen ? "bg-green-100" : "bg-gray-50"
                    )}
                  >
                    <HelpCircle
                      size={12}
                      className={cn(
                        "transition-colors",
                        isOpen ? "text-green-700" : "text-gray-400"
                      )}
                    />
                  </div>
                  <span className="font-medium text-gray-900 text-[12px] md:text-[13px] flex-1 pr-2 leading-snug text-left">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={14}
                    className={cn(
                      "shrink-0 text-gray-300 transition-transform duration-250",
                      isOpen && "rotate-180 text-green-700"
                    )}
                  />
                </button>

                {/* Answer — CSS grid expand */}
                <div
                  className={cn(
                    "grid transition-all duration-250 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-3.5 pl-[48px] text-gray-500 text-[11px] md:text-[12px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
