import React from 'react';

/**
 * BlogCardSkeleton component that mimics the structure of BlogCard for loading states
 */
const BlogCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden shadow transition-shadow hover:shadow-lg flex flex-col animate-pulse">
      {/* Image skeleton */}
      <div className="relative h-56 w-full overflow-hidden">
        <div className="h-full w-full bg-gray-300"></div>
      </div>
      
      {/* Content skeleton */}
      <div className="flex flex-col flex-1 p-6">
        {/* Date and category skeleton */}
        <div className="mb-2 flex justify-between text-xs">
          <div className="h-4 bg-gray-300 rounded w-20"></div>
          <div className="h-6 bg-gray-300 rounded w-16"></div>
        </div>
        
        {/* Title skeleton */}
        <div className="mb-2 space-y-2">
          <div className="h-5 bg-gray-300 rounded w-full"></div>
          <div className="h-5 bg-gray-300 rounded w-3/4"></div>
        </div>
        
        {/* Description skeleton */}
        <div className="mb-4 flex-1 space-y-2">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        </div>
        
        {/* Read More button skeleton */}
        <div className="h-6 bg-gray-300 rounded w-20"></div>
      </div>
    </div>
  );
};

/**
 * BlogGridSkeleton component that renders multiple BlogCardSkeleton components
 */
interface BlogGridSkeletonProps {
  count?: number;
}

const BlogGridSkeleton: React.FC<BlogGridSkeletonProps> = ({ count = 6 }) => {
  return (
    <div className="w-full lg:w-4/5 lg:order-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-3 md:gap-5">
        {Array.from({ length: count }).map((_, index) => (
          <BlogCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export { BlogCardSkeleton, BlogGridSkeleton };