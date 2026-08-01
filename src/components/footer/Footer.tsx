"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerSections } from "@/data/footer";
import { SITE_NAME, CONTACT, SOCIAL_LINKS } from "@/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter */}
      <div className="border-b border-gray-800/40">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 py-8 md:py-9">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-[15px] md:text-[16px] font-semibold text-white">Subscribe for Offers</h3>
              <p className="text-gray-400 text-[11px] mt-0.5">Exclusive deals straight to your inbox.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-52 px-3.5 py-2.5 bg-gray-800/80 border border-gray-700/40 rounded-xl text-white placeholder-gray-500 text-[11px] focus:outline-none focus:ring-2 focus:ring-green-500/30 transition-all"
                aria-label="Email for newsletter"
              />
              <button className="px-4 py-2.5 gradient-green text-white font-semibold rounded-xl active-scale text-[11px] whitespace-nowrap shadow-sm shadow-green-700/10">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 py-10 md:py-11">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-7 lg:gap-6">
          <div className="col-span-2 lg:col-span-2">
            <h2 className="text-[15px] font-bold text-white flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-green-700 flex items-center justify-center text-[11px]">🌿</span>
              {SITE_NAME}
            </h2>
            <p className="mt-3 text-gray-400 text-[11px] leading-relaxed max-w-[260px]">Your gateway to the Pilibhit Tiger Reserve. Where jungle meets luxury.</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-start gap-2"><MapPin size={11} className="text-green-500 shrink-0 mt-0.5" /><span className="text-[10px] text-gray-400 leading-relaxed">{CONTACT.address}</span></div>
              <div className="flex items-center gap-2"><Phone size={11} className="text-green-500 shrink-0" /><span className="text-[10px] text-gray-400">{CONTACT.phone}</span></div>
              <div className="flex items-center gap-2"><Mail size={11} className="text-green-500 shrink-0" /><span className="text-[10px] text-gray-400">{CONTACT.email}</span></div>
            </div>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold text-[11px] mb-2.5">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}><Link href={link.href} className="text-[10px] text-gray-400 hover:text-green-400 transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800/40">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-[9px] text-gray-500">© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
            <div className="flex items-center gap-2">
              {[
                { href: SOCIAL_LINKS.facebook, icon: FaFacebookF, label: "Facebook" },
                { href: SOCIAL_LINKS.instagram, icon: FaInstagram, label: "Instagram" },
                { href: SOCIAL_LINKS.twitter, icon: FaTwitter, label: "Twitter" },
                { href: SOCIAL_LINKS.youtube, icon: FaYoutube, label: "YouTube" },
              ].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-7 h-7 bg-gray-800/80 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors active-scale">
                  <Icon size={11} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
