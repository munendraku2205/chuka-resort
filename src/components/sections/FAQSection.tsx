"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "@/data/faq";
import { cn } from "@/lib/utils";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("1");

  return (
    <section id="faq" className="py-12 md:py-16 lg:py-20 bg-gray-50/50" aria-labelledby="faq-heading">
      <div className="max-w-[700px] mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.42 }}
          className="mb-6 md:mb-9 md:text-center"
        >
          <span className="text-green-700 font-bold text-[11px] uppercase tracking-[0.12em]">Have Questions?</span>
          <h2 id="faq-heading" className="mt-2 text-[26px] md:text-[2rem] font-bold text-gray-900 tracking-tight leading-tight">
            Frequently Asked <span className="text-green-700">Questions</span>
          </h2>
          <p className="mt-2 text-gray-500 text-[13.5px] leading-relaxed md:max-w-md md:mx-auto">Everything you need to know before your visit.</p>
        </motion.div>

        <dl className="space-y-2.5">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            const answerId = `faq-answer-${faq.id}`;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.035 }}
                className={cn("bg-white rounded-[14px] border overflow-hidden transition-shadow duration-200", isOpen ? "border-green-200 shadow-card" : "border-gray-100 shadow-sm hover:shadow-card")}
              >
                <dt>
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full flex items-center gap-3 px-4 py-4 text-left min-h-[56px]"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                  >
                    <div className={cn("w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200", isOpen ? "bg-green-100" : "bg-gray-100")} aria-hidden="true">
                      <HelpCircle size={13} className={cn("transition-colors", isOpen ? "text-green-700" : "text-gray-400")} />
                    </div>
                    <span className={cn("font-semibold text-[13px] md:text-[13.5px] flex-1 pr-2 leading-snug", isOpen ? "text-green-800" : "text-gray-800")}>
                      {faq.question}
                    </span>
                    <ChevronDown size={15} aria-hidden="true" className={cn("shrink-0 transition-transform duration-300", isOpen ? "rotate-180 text-green-600" : "text-gray-300")} />
                  </button>
                </dt>
                <dd id={answerId} className={cn("grid transition-all duration-300 ease-in-out", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                  <div className="overflow-hidden">
                    <p className="px-4 pb-4 pl-[52px] text-gray-600 text-[12.5px] md:text-[13px] leading-relaxed">{faq.answer}</p>
                  </div>
                </dd>
              </motion.div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
