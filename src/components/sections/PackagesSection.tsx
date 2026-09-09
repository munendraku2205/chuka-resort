"use client";

import { motion } from "framer-motion";
import { packages } from "@/data/packages";
import PackageCard from "@/components/cards/PackageCard";

export default function PackagesSection() {
  const popularPackages = packages.filter((p) => p.popular);

  return (
    <section id="packages" className="py-12 md:py-16 lg:py-20 bg-gray-50/50" aria-labelledby="packages-heading">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.42 }}
          className="px-4 sm:px-6 md:px-8 lg:px-12 mb-6 md:mb-10 md:text-center"
        >
          <span className="text-green-700 font-bold text-[11px] uppercase tracking-[0.12em]">Special Offers</span>
          <h2 id="packages-heading" className="mt-2 text-[26px] md:text-[2rem] lg:text-[2.25rem] font-bold text-gray-900 tracking-tight leading-tight">
            Weekend <span className="text-green-700">Packages</span>
          </h2>
          <p className="mt-2 text-gray-500 text-[13.5px] md:text-[15px] max-w-md md:mx-auto leading-relaxed">
            Curated experiences at unbeatable value.
          </p>
        </motion.div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto scroll-x pb-4 px-4 sm:px-6">
            {popularPackages.map((pkg, index) => (
              <div key={pkg.id} className="min-w-[280px] max-w-[300px] shrink-0">
                <PackageCard pkg={pkg} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 lg:px-12">
          {popularPackages.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
