
"use client";
import BlogList from "./blogList";
import { FlipWords } from "./Flipwords";
import SectionHeading from "./sectionHeading";
import { useState } from "react";



export default function SportsPage({ blogs }) {
  const [filter, setFilter] = useState("all");
  const categories = ["all", "football", "fighting", "basketball", "racing"];

  return (
    <main className="min-h-screen pb-20 px-5 bg-[#050505] text-zinc-100">
      {/* 1. SPORTS NAVIGATION BAR (Modern & Industrial) */}
      <div className="flex flex-wrap justify-center gap-2 py-8 sticky top-0 z-40 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-8 py-2 text-[10px] font-black uppercase tracking-[3px] transition-all relative group ${
              filter === cat ? "text-white" : "text-zinc-500 hover:text-white"
            }`}
          >
            {cat}
            {filter === cat && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 animate-pulse" />
            )}
          </button>
        ))}
      </div>

      {filter === "all" ? (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-1000">
          
          {/* SECTION 1: FOOTBALL (The "Headline" Sport) */}
          <div className="pt-12">
            <div className="flex items-center gap-4 mb-8 justify-center lg:justify-start container mx-auto">
              <span className="h-[20px] w-[4px] bg-blue-600" /> {/* Sky Sports Accent */}
              <h2 className="text-3xl italic font-black uppercase tracking-tighter text-white">
                Football <span className="text-blue-600">Central</span>
              </h2>
            </div>
            <BlogList blogs={blogs} category="football" limit={3} />
          </div>

          <SectionHeading>
            <FlipWords words={[
              "From the pitch to the octagon",
              "Beyond the goals, the fight begins",
              "The World of Champions"
            ]} />
          </SectionHeading>

          {/* SECTION 2: FIGHTING (High Contrast/Red) */}
          <div>
            <div className="flex items-center gap-4 mb-8 justify-center lg:justify-start container mx-auto">
              <span className="h-[20px] w-[4px] bg-red-600" /> {/* UFC/ESPN Accent */}
              <h2 className="text-3xl italic font-black uppercase tracking-tighter text-white">
                Ultimate <span className="text-red-600">Fighting</span>
              </h2>
            </div>
            <BlogList blogs={blogs} category="fighting" limit={3} />
          </div>

          <SectionHeading>
            <FlipWords words={[
              "Trading the gloves for the hardwood",
              "Full court press and high-flying dunks",
              "Courtside Access"
            ]} />
          </SectionHeading>

          {/* SECTION 3: BASKETBALL */}
          <div className="pb-20">
            <div className="flex items-center gap-4 mb-8 justify-center lg:justify-start container mx-auto">
              <span className="h-[20px] w-[4px] bg-orange-500" />
              <h2 className="text-3xl italic font-black uppercase tracking-tighter text-white">
                Hoops <span className="text-orange-500">Universe</span>
              </h2>
            </div>
            <BlogList blogs={blogs} category="basketball" limit={3} />
          </div>
        </div>
      ) : (
        <div className="pt-12 container mx-auto">
           <div className="flex items-center gap-4 mb-12">
              <div className="px-3 py-1 bg-red-600 text-[10px] font-bold text-white uppercase animate-pulse">Live Feed</div>
              <h2 className="text-5xl italic font-black uppercase tracking-tighter text-white">
                All <span className="text-blue-600">{filter}</span>
              </h2>
           </div>
          <BlogList blogs={blogs} category={filter} />
        </div>
      )}
    </main>
  );
}