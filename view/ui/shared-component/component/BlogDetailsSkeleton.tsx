import React from 'react';

/**
 * BlogDetailsSkeleton component that mimics the structure of the blog details page
 */
const BlogDetailsSkeleton: React.FC = () => {
  return (
    <div className='mt-16 sm:pt-30 mx-4 bg-slate-100 pt-5 sm:mx-6 md:mx-10 md:pt-20 pb-10 animate-pulse'>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Title Skeleton */}
        <div className="mb-4 space-y-3">
          <div className="h-8 sm:h-10 md:h-12 bg-gray-300 rounded w-3/4"></div>
          <div className="h-6 sm:h-8 md:h-10 bg-gray-300 rounded w-1/2"></div>
        </div>

        {/* Breadcrumb Skeleton */}
        <div className="flex items-center gap-2 mb-6">
          <div className="h-4 bg-gray-300 rounded w-12"></div>
          <div className="h-4 bg-gray-300 rounded w-4"></div>
          <div className="h-4 bg-gray-300 rounded w-12"></div>
          <div className="h-4 bg-gray-300 rounded w-4"></div>
          <div className="h-4 bg-gray-300 rounded w-20"></div>
        </div>

        {/* Blog Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-8">
          {/* Main Content Skeleton */}
          <div className="space-y-6">
            {/* Featured Image Skeleton */}
            <div className="rounded-lg overflow-hidden">
              <div className="w-full h-64 sm:h-80 bg-gray-300"></div>
            </div>

            {/* Blog Meta Information Skeleton */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              {/* Meta info skeleton */}
              <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded w-24"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded w-20"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded w-16"></div>
                </div>
              </div>

              {/* Blog Title Skeleton */}
              <div className="mb-6 space-y-3">
                <div className="h-6 sm:h-8 md:h-10 bg-gray-300 rounded w-full"></div>
                <div className="h-6 sm:h-8 md:h-10 bg-gray-300 rounded w-4/5"></div>
              </div>

              {/* Blog Content Skeleton */}
              <div className="space-y-4 mb-8">
                {/* Paragraph skeletons */}
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  </div>
                ))}
                
                {/* Heading skeletons */}
                <div className="pt-4">
                  <div className="h-6 bg-gray-300 rounded w-2/3 mb-3"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-4/5"></div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="h-6 bg-gray-300 rounded w-1/2 mb-3"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>
              </div>

              {/* Tags Skeleton */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="h-5 bg-gray-300 rounded w-16 mb-3"></div>
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="h-7 bg-gray-300 rounded-full w-16"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="space-y-6">
            {/* Related Blogs Skeleton */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="h-6 bg-gray-300 rounded w-32 mb-4"></div>
              <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="flex gap-3 p-3">
                    <div className="w-20 h-15 bg-gray-300 rounded flex-shrink-0"></div>
                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="h-4 bg-gray-300 rounded w-full"></div>
                      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsSkeleton;