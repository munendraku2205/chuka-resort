"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerSections } from "@/data/footer";
import { SITE_NAME, CONTACT, SOCIAL_LINKS } from "@/constants";

const socialLinks = [
  { href: SOCIAL_LINKS.facebook,  icon: FaFacebookF, label: "Chuka Resort on Facebook" },
  { href: SOCIAL_LINKS.instagram, icon: FaInstagram, label: "Chuka Resort on Instagram" },
  { href: SOCIAL_LINKS.twitter,   icon: FaTwitter,   label: "Chuka Resort on Twitter" },
  { href: SOCIAL_LINKS.youtube,   icon: FaYoutube,   label: "Chuka Resort on YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300" aria-label="Site footer">

      {/* Newsletter */}
      <div className="border-b border-gray-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="text-center md:text-left">
              <h2 className="text-[15px] md:text-[17px] font-bold text-white">Subscribe for Exclusive Offers</h2>
              <p className="text-gray-400 text-[12.5px] mt-1">Get deals, seasonal packages and resort news.</p>
            </div>
            <form className="flex w-full md:w-auto gap-2.5" onSubmit={(e) => e.preventDefault()} aria-label="Newsletter subscription">
              <label htmlFor="footer-email" className="sr-only">Your email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-60 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/40 focus:border-green-500/60 transition-all min-h-[48px]"
                autoComplete="email"
              />
              <button type="submit" className="px-5 py-3 gradient-green text-white font-semibold rounded-xl active-scale text-[13px] whitespace-nowrap shadow-sm shadow-green-700/15 min-h-[48px] hover:shadow-md hover:shadow-green-700/22 transition-shadow">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-8 rounded-xl bg-green-700 flex items-center justify-center text-sm shrink-0" aria-hidden="true">🌿</span>
              <h3 className="text-[15px] font-bold text-white">{SITE_NAME}</h3>
            </div>
            <p className="text-gray-400 text-[12.5px] leading-relaxed max-w-[260px]">
              Your gateway to the Pilibhit Tiger Reserve. Where jungle meets luxury.
            </p>
            <address className="mt-4 space-y-2.5 not-italic">
              <div className="flex items-start gap-2.5">
                <MapPin size={12} className="text-green-500 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-[11.5px] text-gray-400 leading-relaxed">{CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={12} className="text-green-500 shrink-0" aria-hidden="true" />
                <a href={`tel:${CONTACT.phone}`} className="text-[11.5px] text-gray-400 hover:text-green-400 transition-colors">{CONTACT.phone}</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={12} className="text-green-500 shrink-0" aria-hidden="true" />
                <a href={`mailto:${CONTACT.email}`} className="text-[11.5px] text-gray-400 hover:text-green-400 transition-colors">{CONTACT.email}</a>
              </div>
            </address>
          </div>

          {/* Link sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-bold text-[12px] mb-3.5 uppercase tracking-wider">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[11.5px] text-gray-400 hover:text-green-400 transition-colors leading-relaxed">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[11px] text-gray-500 text-center sm:text-left">
              © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors active-scale">
                  <Icon size={12} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
