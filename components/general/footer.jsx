import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const SportsFooter = () => {
  return (
    <footer className="w-full font-sans text-white">
      {/* TOP CTA BAR */}
      <div className="bg-red-700 py-6 px-4 text-center">
        <p className="text-sm md:text-base font-semibold tracking-wide">
          Get match updates, breaking news, and exclusive analysis.
        </p>
      </div>

      {/* MAIN FOOTER */}
      <div className="bg-[#0F172A] pt-16 pb-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 border-b border-white/10 pb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-black uppercase tracking-tight mb-4">
              World<span className="text-red-500">Sports</span>
            </h2>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              A modern sports media platform delivering fixtures, results,
              analysis, and stories from the world of sport.
            </p>

            <div className="flex gap-4">
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaXTwitter />} />
              <SocialIcon icon={<FaYoutube />} />
            </div>
          </div>

          {/* Competitions */}
          <FooterColumn
            title="Competitions"
            links={[
              "Premier League",
              "LaLiga",
              "Serie A",
              "Bundesliga",
              "Champions League",
            ]}
          />

          {/* Coverage */}
          <FooterColumn
            title="Coverage"
            links={[
              "Fixtures & Results",
              "Standings",
              "Player Stats",
              "Transfers",
              "Injuries",
            ]}
          />

          {/* Media */}
          <FooterColumn
            title="Media"
            links={[
              "Match Highlights",
              "Interviews",
              "Opinion Pieces",
              "Tactical Analysis",
              "Photo Galleries",
            ]}
          />

          {/* Community */}
          <FooterColumn
            title="Community"
            links={[
              "Fan Polls",
              "Predictions",
              "Newsletter",
              "Work With Us",
              "Contact",
            ]}
          />
        </div>

        {/* SUB FOOTER */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-white/50 uppercase tracking-[2px] font-semibold">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} NextSports. All rights reserved.
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-red-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-400 transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-red-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* Reusable components */

const FooterColumn = ({
  title,
  links,
}) => (
  <div>
    <h4 className="text-sm font-black mb-6 uppercase tracking-[3px] text-red-500">
      {title}
    </h4>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link}>
          <a
            href="#"
            className="text-sm text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcon = ({ icon }) => (
  <a
    href="#"
    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center
               hover:bg-red-600 hover:border-red-600 transition-all text-white"
  >
    {icon}
  </a>
);

export default SportsFooter;
