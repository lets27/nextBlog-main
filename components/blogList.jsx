"use client";



import BlogPostCard from "./blogPostCard";


const BlogList = ({ blogs, category, limit }) => {
  // 1. Filter by category
  let filtered = blogs.filter(blog => blog.category === category);
  
  // 2. Apply limit if it exists (for the Magazine Look)
  if (limit) {
    filtered = filtered.slice(0, limit);
  }

  return (
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {filtered.length > 0 ? (
        filtered.map((blog) => <BlogPostCard key={blog._id} post={blog} />)
      ) : (
        <p className="text-zinc-600 col-span-full py-10">No {category} news available.</p>
      )}
    </div>
  );
};

export default BlogList;
