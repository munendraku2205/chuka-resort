"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "@/data/faq";
import { cn } from "@/lib/utils";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("1");

  return (
    <section id="faq" className="py-12 md:py-14 bg-gray-50/30">
      <div className="max-w-[680px] mx-auto px-5 md:px-6">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="mb-6 md:mb-7 md:text-center">
          <span className="text-green-700 font-semibold text-[10px] md:text-[11px] uppercase tracking-[0.12em]">Have Questions?</span>
          <h2 className="mt-1.5 text-[22px] md:text-[26px] font-bold text-gray-900 tracking-tight leading-tight">Frequently Asked <span className="text-green-700">Questions</span></h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="bg-white rounded-[14px] border border-gray-100/60 overflow-hidden shadow-sm hover:shadow-premium transition-shadow duration-200"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center gap-2.5 px-4 py-3 text-left"
              >
                <div className={cn("w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200", openId === faq.id ? "bg-green-100" : "bg-gray-50")}>
                  <HelpCircle size={12} className={cn("transition-colors", openId === faq.id ? "text-green-700" : "text-gray-400")} />
                </div>
                <span className="font-medium text-gray-900 text-[12px] md:text-[13px] flex-1 pr-2 leading-snug">{faq.question}</span>
                <ChevronDown size={14} className={cn("shrink-0 text-gray-300 transition-transform duration-250", openId === faq.id && "rotate-180 text-green-700")} />
              </button>
              <div className={cn("grid transition-all duration-250 ease-in-out", openId === faq.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                <div className="overflow-hidden">
                  <p className="px-4 pb-3 pl-[48px] text-gray-400 text-[11px] md:text-[12px] leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
