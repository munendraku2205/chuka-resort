"use client";

import { motion } from "framer-motion";
import { packages } from "@/data/packages";
import PackageCard from "@/components/cards/PackageCard";

export default function PackagesSection() {
  const popularPackages = packages.filter(p => p.popular);

  return (
    <section id="packages" className="py-12 md:py-14 bg-gray-50/30">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="px-5 md:px-8 lg:px-12 mb-6 md:mb-8 md:text-center"
        >
          <span className="text-green-700 font-semibold text-[10px] md:text-[11px] uppercase tracking-[0.12em]">Special Offers</span>
          <h2 className="mt-1.5 text-[22px] md:text-[26px] lg:text-[30px] font-bold text-gray-900 tracking-tight leading-tight">
            Weekend <span className="text-green-700">Packages</span>
          </h2>
          <p className="mt-2 text-gray-400 text-[13px] md:text-[14px] max-w-md md:mx-auto leading-relaxed">
            Curated experiences at unbeatable value.
          </p>
        </motion.div>

        {/* Mobile */}
        <div className="md:hidden">
          <div className="flex gap-3.5 overflow-x-auto scroll-x pb-3 px-5">
            {popularPackages.map((pkg, index) => (
              <div key={pkg.id} className="min-w-[265px] max-w-[265px]"><PackageCard pkg={pkg} index={index} /></div>
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-8 lg:px-12">
          {popularPackages.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
