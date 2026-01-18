import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
// we can use suspense to load skeletons but for specific areas not like now where we doing it for the whole page
const LoadingDashBoard = ({ count = 6 }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="p-4 border-accent rounded-lg space-y-3 w-80 bg-slate-600"
        >
          <Skeleton className="h-48 w-full rounded-lg bg-slate-800" /> {/* image skeleton */}
          <Skeleton className="h-6 w-2/3 rounded-md bg-slate-800 " /> {/* title skeleton */}
          <Skeleton className="h-4 w-1/2 rounded-md bg-slate-800" />{" "}
          {/* subtitle skeleton */}
        </div>
      ))}
    </div>
  );
};

export default LoadingDashBoard;
