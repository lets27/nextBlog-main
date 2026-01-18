const SectionRibbon = ({ text }) => (
  <div className="w-full bg-[#0c0e23] border-y border-white/10 py-4 my-12 relative overflow-hidden">
    {/* Background glow effect to match Aceternity style */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-purple/10 blur-[80px]" />
    
    <div className="container mx-auto px-4 relative z-10">
      <p className="text-center text-zinc-400 text-sm md:text-base font-medium tracking-[0.3em] uppercase">
        {text}
      </p>
    </div>
  </div>
);
export default SectionRibbon