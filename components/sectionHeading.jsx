const SectionHeading = ({ children, text }) => {
  return (
    <div className="w-full py-10 my-10 border-y border-white/5 bg-zinc-900/30">
      <div className="container mx-auto px-6">
        {/* Changed tracking from 0.2em to wide/normal for better sentence legibility */}
        <div className="text-blue-600 text-sm md:text-lg font-semibold tracking-wide uppercase text-center max-w-4xl mx-auto leading-relaxed">
          {children || text}
        </div>
      </div>
    </div>
  );
};

export default SectionHeading