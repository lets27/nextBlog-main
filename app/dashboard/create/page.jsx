"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createBlog } from "@/app/actions";
import SubmitButton from "@/components/submitButton";
import { useState } from "react";


const CreateBlog = () => {
  const [category, setCategory] = useState("");

  return (
    <div className="min-h-screen bg-[#050505] py-12 px-4">
      <Card className="max-w-2xl m-auto bg-[#0a0a0a] border-white/5 shadow-2xl overflow-hidden">
        {/* Accent Bar */}
        <div className="h-1.5 w-full bg-red-600" />
        
        <CardHeader className="space-y-1 pt-8">
          <CardTitle className="text-3xl font-black italic uppercase tracking-tighter text-white">
            Create <span className="text-red-600">Post</span>
          </CardTitle>
          <CardDescription className="text-zinc-500 font-bold uppercase text-[10px] tracking-widest">
            Broadcast your story to the World Sports Network
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="flex flex-col gap-6" action={createBlog}>
            
            {/* TITLE INPUT */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black uppercase tracking-widest text-zinc-400">Headline</label>
              <input 
                type="text" 
                required 
                placeholder="ENTER CATCHY HEADLINE..." 
                name="title" 
                className="bg-black border border-white/10 rounded-sm p-3 text-white placeholder:text-zinc-700 focus:outline-none focus:border-red-600 transition-colors font-bold uppercase italic"
              />
            </div>

            {/* CATEGORY SELECT */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black uppercase tracking-widest text-zinc-400">Sport Category</label>
              <select
                name="category"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-black border border-white/10 rounded-sm p-3 text-white focus:outline-none focus:border-red-600 transition-colors font-bold uppercase italic appearance-none cursor-pointer"
              >
                <option value="" disabled className="text-zinc-700">SELECT A SPORT</option>
                <option value="football">Football Central</option>
                <option value="fighting">Ultimate Fighting</option>
                <option value="racing">Racing League</option>
                <option value="basketball">Hoops Universe</option>
              </select>
            </div>

            {/* CONTENT TEXTAREA */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black uppercase tracking-widest text-zinc-400">Article Body</label>
              <textarea 
                required 
                placeholder="WRITE YOUR COVERAGE HERE..." 
                name="content" 
                rows={6}
                className="bg-black border border-white/10 rounded-sm p-3 text-white placeholder:text-zinc-700 focus:outline-none focus:border-red-600 transition-colors font-medium min-h-[150px]"
              />
            </div>

            {/* IMAGE INPUT SECTION */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-black uppercase tracking-widest text-zinc-400">Featured Media</label>
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="text"
                  placeholder="PASTE IMAGE URL..."
                  name="image"
                  className="flex-1 bg-black border border-white/10 rounded-sm p-3 text-white placeholder:text-zinc-700 focus:outline-none focus:border-red-600 transition-colors font-bold uppercase italic text-xs"
                />

                <div className="flex items-center">
                  <input
                    type="file"
                    accept="image/*"
                    name="file"
                    id="fileInput"
                    className="hidden"
                  />
                  <label
                    htmlFor="fileInput"
                    className="w-full md:w-auto cursor-pointer px-6 py-3 bg-zinc-900 border border-white/10 text-white font-black uppercase tracking-tighter text-xs italic hover:bg-zinc-800 transition-all text-center"
                  >
                    UPLOAD FILE
                  </label>
                </div>
              </div>
            </div>

            {/* SUBMIT SECTION */}
            <div className="pt-4 border-t border-white/5 mt-4">
              <SubmitButton className="w-full bg-red-600 hover:bg-red-700 text-white font-black italic uppercase py-4 tracking-widest transition-all rounded-sm shadow-[0_0_20px_rgba(220,38,38,0.2)]" />
            </div>
            
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateBlog;