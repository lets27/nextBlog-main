import { getSinglePost } from "@/app/actions";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";


const PostDetails = async ({ params }) => {
  const blog = await getSinglePost(params.id);

  if (!blog) {
    return notFound();
  }

  const { title, content, image, authorName, authorImage, createdAt, category } = blog;

  return (
    <main className="min-h-screen bg-[#050505] text-white pb-20">
      {/* 1. TOP PROGRESS BAR / ACCENT */}
      <div className="h-1 w-full bg-zinc-900">
        <div className="h-full bg-red-600 w-1/3 shadow-[0_0_10px_#dc2626]" />
      </div>

      <div className="max-w-4xl mx-auto py-10 px-6">
        {/* BACK NAVIGATION */}
        <Link
          href="/"
          className="group mb-10 inline-flex items-center text-xs font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-red-600 transition-colors"
        >
          <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span>
          Back to Feed
        </Link>

        {/* 2. ARTICLE HEADER */}
        <header className="mb-12">
          {category && (
            <span className="inline-block bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 mb-6">
              {category}
            </span>
          )}
          
          <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-[0.9] mb-8">
            {title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-white/10">
            <div className="flex items-center gap-3">
              {authorImage && (
                <div className="relative h-12 w-12 rounded-full border-2 border-red-600 p-0.5">
                  <Image
                    src={authorImage}
                    alt={authorName}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-sm font-black uppercase tracking-tight italic">
                  By {authorName}
                </span>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                  Sports Correspondent
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">Published</span>
              <time className="text-sm font-black italic text-white uppercase tracking-tighter">
                {createdAt ? new Date(createdAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                }) : ""}
              </time>
            </div>
          </div>
        </header>

        {/* 3. HERO IMAGE */}
        <div className="relative mb-12 aspect-video overflow-hidden rounded-sm border border-white/5">
          {image && (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          )}
          {/* Subtle vignette for the "Broadcast" feel */}
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
        </div>

        {/* 4. ARTICLE CONTENT */}
        <article className="max-w-3xl mx-auto">
          {/* Drop cap for that magazine look */}
          <div className="prose prose-invert prose-lg max-w-none 
            first-letter:text-6xl first-letter:font-black first-letter:text-red-600 
            first-letter:mr-3 first-letter:float-left first-letter:mt-2
            text-zinc-300 leading-relaxed font-medium">
            {content}
          </div>

          {/* 5. FOOTER TAGS */}
          <div className="mt-16 pt-8 border-t border-white/10 flex gap-2">
            <span className="text-[10px] font-black uppercase bg-zinc-900 px-3 py-1 text-zinc-400">#SportsNews</span>
            <span className="text-[10px] font-black uppercase bg-zinc-900 px-3 py-1 text-zinc-400">#Breaking</span>
          </div>
        </article>
      </div>
    </main>
  );
};

export default PostDetails;