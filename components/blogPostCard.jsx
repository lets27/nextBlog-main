import Image from "next/image";
import Link from "next/link";


const BlogPostCard = ({ post }) => {
  const { _id, title, content, image, authorName, authorImage, createdAt, category } = post;

  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-white/5 bg-[#0a0a0a] shadow-2xl transition-all duration-300 hover:border-white/20 hover:shadow-purple/5 max-w-sm w-full"
    >
      <Link href={`/post/${_id}`} className="block w-full h-full">
        <div className="relative h-48 w-full overflow-hidden">
          {/* 1. Added a Dynamic Category Badge (Sports Style) */}
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-sm shadow-lg">
              {category || "Latest"}
            </span>
          </div>

          {image && (
            <Image
              src={image}
              alt={`Image for ${title}`}
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
          )}
          
          {/* Subtle Gradient Overlay for readability on the image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
        </div>

        <div className="p-5">
          {/* 2. Headline: Bold, Condensed feel, White text */}
          <h3 className="mb-2 text-xl font-bold italic uppercase tracking-tight text-white line-clamp-2 leading-tight group-hover:text-blue-500 transition-colors">
            {title}
          </h3>
          
          {/* 3. Description: Zinc/Gray for better contrast against dark background */}
          <p className="mb-6 text-sm text-zinc-400 line-clamp-2 font-medium">
            {content}
          </p>

          <div className="flex items-center justify-between border-t border-white/5 pt-4">
            {/* Author info */}
            <div className="flex items-center space-x-2">
              {authorImage && (
                <div className="relative h-7 w-7 overflow-hidden rounded-full border border-white/10">
                  <Image
                    src={authorImage}
                    alt={authorName}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
              )}
              <p className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                {authorName}
              </p>
            </div>

            {/* Post date */}
            <time className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter">
              {new Date(createdAt).toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </time>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPostCard;