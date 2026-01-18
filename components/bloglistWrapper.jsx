"use client";

import { Suspense } from "react";
import BlogList from "./blogList";
import SportsPage from "./sportsPage";

const BlogListWrapper = ({ blogsPromise }) => {
  return (
    <Suspense
      fallback={<p className="text-gray-500">Loading your articles...</p>}
    >
      {/* @ts-expect-error Server Component */}
      {/* <BlogList blogs={blogsPromise} /> */}
      <SportsPage blogs={blogsPromise} />

    </Suspense>
  );
};

export default BlogListWrapper;
