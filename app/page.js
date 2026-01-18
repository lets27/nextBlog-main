import BlogList from "@/components/blogList";
import { getBlogs } from "./actions";
import SportsPage from "@/components/sportsPage";
export default async function Home() {
  const blogs = await getBlogs();
  return (
    <div className="bg-[#050505]">
      <header className="pt-10 pl-5 lg:pl-20 border-l-4 border-red-600 ml-5 lg:ml-10 mt-10">
        <h1 className="text-5xl md:text-7xl italic font-black uppercase tracking-tighter leading-none">
          <span className="text-white block">World</span>
          <span className="text-blue-600">Sports</span>
          <span className="text-zinc-800 ml-2">Blog</span>
        </h1>
        <p className="text-zinc-500 text-xs font-bold tracking-[5px] uppercase mt-4">
          Gaborone • London • New York • 24/7 Coverage
        </p>
      </header>
      
      <SportsPage blogs={blogs} />
    </div>
  );
}
// TODO:
//set up cloudinary to accept and store images and retrieve images from one cloudinary domain
//setup sidebar in postDetails to show other posts
