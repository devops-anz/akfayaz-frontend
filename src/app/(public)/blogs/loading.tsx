export default function Loading() {
  return (
    <div className="bg-neutral-200 pt-20 min-h-screen w-full px-4 sm:px-6 lg:px-8 pb-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="pb-10 pt-10 sm:pt-16 lg:pt-20">
          <div className="mb-4">
            <div className="h-8 w-1/2 mb-10 bg-gray-300 rounded" />
            <div className="h-4 w-1/3 bg-gray-300 rounded" />
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            {/* Sidebar skeleton */}
            <div className="w-full lg:w-1/5 lg:order-2">
              <div className="bg-white rounded-lg p-4 sticky top-24">
                <div className="flex flex-col sm:flex-row lg:flex-col gap-4 animate-pulse">
                  {/* Search input skeleton */}
                  <div className="flex-1">
                    <div className="h-10 w-full rounded-xl bg-gray-300" />
                  </div>

                  {/* Categories skeleton */}
                  <div className="flex-1 lg:mt-3">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-4 w-24 bg-gray-300 rounded" />
                      <div className="h-4 w-12 bg-gray-300 rounded" />
                    </div>
                    <div className="space-y-3">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="h-4 w-32 bg-gray-300 rounded" />
                          <div className="h-4 w-10 bg-gray-300 rounded" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Job listings skeleton */}
            <div className="w-full lg:w-full lg:order-1">
              <div className="w-full lg:w-full lg:order-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-3 md:gap-5">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="rounded-md bg-white overflow-hidden shadow transition-shadow hover:shadow-lg flex flex-col animate-pulse">
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}