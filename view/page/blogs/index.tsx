"use client";
import React, { useEffect, useState, useRef } from "react";
import { blogPosts } from "../../../@json-db";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import BlogCard from "view/ui/shared-component/component/BlogCard";
import { useRouter, useSearchParams } from "next/navigation";
import { BlogSearchParams, GetBlogsResponse, MappedBlogData } from "@/types/blogs";
import BlogDetailsSkeleton from "view/ui/shared-component/component/BlogDetailsSkeleton";
import { CategoriesResponse, Category } from "@/app/(public)/blogs/PageBody";
import { BlogGridSkeleton } from "view/ui/shared-component/component/BlogCardSkeleton";

interface BlogsPageProps {
  blogsData?: GetBlogsResponse;
  searchParams?: BlogSearchParams;
  categoriesData: CategoriesResponse
}


const BlogsPage = ({ categoriesData, blogsData, searchParams }: BlogsPageProps) => {
  const router = useRouter();
  const urlSearchParams = useSearchParams();
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingBlogCard, setIsLoadingBlogCard] = useState(false);

  console.log("blogs blogsData", blogsData, categoriesData)

  // Extract and map API data with fallback to static data
  const apiBlogs = blogsData?.data?.data || [];
  const mappedApiBlogs: MappedBlogData[] = apiBlogs.map((blog) => ({
    id: blog.id,
    slug: blog.slug,
    title: blog.title,
    date: blog.date,
    author: blog.user?.name || "AKM Assets",
    category: blog.blog_category?.name || "General",
    tags: blog.tags || [],
    image: blog.image_url ? blog.image_url : "/image/blogs/default.jpg"
  }));

  // Use API data if available, otherwise fallback to static data
  const allBlogs = mappedApiBlogs.length > 0 ? mappedApiBlogs : blogPosts;

  // Initialize state from URL parameters
  const [search, setSearch] = useState(searchParams?.search || "");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(searchParams?.category || "");
  const [isOpen, setIsOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState(searchParams?.sort || "newest");

  // Pagination data from API
  const currentPage = blogsData?.data?.current_page || 1;
  const totalPages = blogsData?.data?.last_page || 1;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const perPage = blogsData?.data?.per_page || 9;
  const totalBlogs = blogsData?.data?.total || allBlogs.length;

  // For client-side filtering when using static data
  const [filteredBlogs, setFilteredBlogs] = useState(allBlogs);
  const [noBlogsFound, setNoBlogsFound] = useState(false);

  // Sync local state with URL parameters when they change
  useEffect(() => {
    const currentSearch = urlSearchParams.get('search') || '';
    const currentCategory = urlSearchParams.get('category') || '';
    const currentSort = urlSearchParams.get('sort') || 'newest';

    setSearch(currentSearch);
    setSelectedCategory(currentCategory);
    setSortOrder(currentSort as 'newest' | 'oldest');

    // Clear tag selection when category is selected from URL
    if (currentCategory) {
      setSelectedTag('');
    }
  }, [urlSearchParams]);

  // Turn off loading state when API data changes (API call completes)
  useEffect(() => {
    setIsLoadingBlogCard(false);
  }, [blogsData]);

  // Function to update URL parameters
  const updateURL = (newParams: Partial<BlogSearchParams>) => {
    const params = new URLSearchParams(urlSearchParams.toString());

    Object.entries(newParams).forEach(([key, value]) => {
      if (value && value !== '') {
        params.set(key, value.toString());
      } else {
        params.delete(key);
      }
    });

    // Always reset to page 1 when changing filters
    if (newParams.search !== undefined || newParams.category !== undefined || newParams.sort !== undefined) {
      params.set('page', '1');
    }

    router.push(`/blogs?${params.toString()}`);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearch(searchValue);

    // Clear previous timeout if it exists
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Debounce search to avoid too many API calls
    searchTimeoutRef.current = setTimeout(() => {
      setIsLoadingBlogCard(true);
      updateURL({
        search: searchValue,
        category: '',
        page: '1'
      });
    }, 600);
  };

  const handleCategory = (category: Number) => {
    setIsLoadingBlogCard(true);
    setSelectedCategory(category);
    setSelectedTag("");
    updateURL({
      category: category,
      search: '',
      page: '1'
    });
  };


  const handleSort = (newSortOrder: string) => {
    setSortOrder(newSortOrder as 'newest' | 'oldest');
    updateURL({
      sort: newSortOrder as 'newest' | 'oldest'
    });
  };

  const handlePageChange = (page: number) => {
    setIsLoadingBlogCard(true);
    updateURL({
      page: page.toString()
    });
  };

  const handleReset = () => {
    setIsLoadingBlogCard(true);
    setSearch("");
    setSelectedCategory("");
    setSelectedTag("");
    router.push('/blogs');
  };

  // Use API data for display, fallback to filtered static data
  const currentBlogs = mappedApiBlogs.length > 0 ? mappedApiBlogs : filteredBlogs;

  // Client-side filtering for static data fallback
  useEffect(() => {
    if (mappedApiBlogs.length === 0) {
      let filtered = allBlogs;

      if (search) {
        filtered = filtered.filter((blog: any) =>
          blog.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      if (selectedCategory) {
        filtered = filtered.filter((blog: any) => blog.category === selectedCategory);
      }

      if (selectedTag) {
        filtered = filtered.filter((blog: any) => blog.tags.includes(selectedTag));
      }

      // Sort
      if (sortOrder === "newest") {
        filtered = filtered.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
      } else {
        filtered = filtered.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());
      }

      setFilteredBlogs(filtered);
      setNoBlogsFound(filtered.length === 0);
    }
  }, [search, selectedCategory, selectedTag, sortOrder, allBlogs, mappedApiBlogs.length]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 min-h-screen w-full">
      {isLoading ? <BlogDetailsSkeleton /> : (
        <div className="bg-gray-100">
          <div className="container-custom mx-auto">
            <div className="mb-4 sm:mb-5 md:mb-5 px-4 sm:px-0">
              <p className="font-[700] text-black pt-8 sm:pt-12 md:pt-16 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Latest Blog Posts
              </p>
              <p className="mb-3 pt-4 sm:pt-6 md:pt-8 text-sm sm:text-base text-gray-600">
                Insights, trends, and tips from the world of business, tech, and innovation.
              </p>
              <hr className="border border-solid border-gray-400/50" />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 py-4 px-4 sm:px-0">
              <div className="flex items-center gap-2">
                <Link href="/" className="text-black hover:text-[#30665f] cursor-pointer">
                  Home
                </Link>
                <IoIosArrowForward className="text-black transition-transform duration-300 group-hover:translate-x-1" />
                <Link href="/blogs" className="text-black hover:text-[#30665f] cursor-pointer">
                  Blogs
                </Link>
              </div>

              <div className="w-full sm:w-auto space-y-3 sm:space-y-0">
                <div className="relative inline-block text-left w-full sm:w-auto md:mr-4 mr-0">
                  <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full sm:w-[235px] inline-flex justify-between items-center gap-x-1.5 bg-gray-900 px-3 py-2 text-sm text-white shadow-xs ring-1 ring-gray-700  focus:outline-none"
                    id="sort-menu-button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    {sortOrder === "newest" ? "Sort by: Newest First" : "Sort by: Oldest First"}
                    <svg
                      className={`-mr-1 size-5 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="absolute right-0 z-10 mt-2 w-full sm:w-[235px] origin-top-right bg-gray-600 ring-1 ring-black/5 focus:outline-none">
                      <div className="py-1" role="none">
                        <button
                          className="block w-full px-4 py-2 text-sm text-white hover:bg-gray-900 text-left"
                          role="menuitem"
                          tabIndex={-1}
                          onClick={() => {
                            handleSort("newest");
                            setIsOpen(false);
                          }}
                        >
                          Newest First
                        </button>
                        <button
                          className="block w-full px-4 py-2 text-sm text-white hover:bg-gray-900 text-left"
                          role="menuitem"
                          tabIndex={-1}
                          onClick={() => {
                            handleSort("oldest");
                            setIsOpen(false);
                          }}
                        >
                          Oldest First
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <input
                  type="text"
                  placeholder="Search Blogs..."
                  value={search}
                  className="w-full mt-3.5 sm:w-[237px] px-3 py-1.5 bg-gray-900 text-white placeholder:text-gray-300 rounded-sm border border-gray-700 focus:outline-none focus:border-[#f7d26a]"
                  onChange={handleSearch}
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 pb-10 px-4 sm:px-0">
              <div className="w-full lg:w-1/5 lg:order-2 mb-6 lg:mb-0">
                <div className="bg-gray-900 rounded-sm p-4 sticky top-24">
                  <div className="flex flex-col gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-base text-white font-extrabold">Categories</p>
                        <p
                          onClick={handleReset}
                          className="bg-white text-black px-1.5 pb-0.5 rounded-sm cursor-pointer"
                        >
                          Reset
                        </p>
                      </div>
                      <div className="space-y-3">
                        {
                          categoriesData.data.map((category: Category) => (
                            <div
                              onClick={() => handleCategory(category.id)}
                              key={category.id}
                              className={`flex items-center gap-2 cursor-pointer px-1 pb-0.5 rounded-sm
                                ${selectedCategory === category.name
                                  ? "bg-white text-black"
                                  : "text-white hover:bg-white hover:text-black"
                                }`}
                            >
                              <span>{category.name}</span>
                              <span className="text-sm">({category.blogs_count})</span>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {isLoadingBlogCard ? (
                <BlogGridSkeleton count={6} />
              ) : (
                <div className="w-full lg:w-4/5 lg:order-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-3 md:gap-5">
                    {noBlogsFound ? (
                      <div className="col-span-full text-center">
                        <p className="text-xl sm:text-2xl font-bold">No blogs found</p>
                      </div>
                    ) : (
                      currentBlogs.map((blog: any) => (
                        <BlogCard
                          isLoading={isLoading}
                          setIsLoading={setIsLoading}
                          key={blog.id}
                          image={blog.image}
                          title={blog.title}
                          date={blog.date}
                          category={blog.category}
                          slug={blog.slug}
                          id={blog.id}
                          description={typeof blog.content === 'string' ? blog.content.slice(0, 120) + (blog.content.length > 120 ? '...' : '') : ''}
                        />
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center pb-10">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 text-sm border hover:tracking-[3px] transition-all duration-300 border-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed text-black"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`px-3 py-1 text-sm border border-gray-700 rounded-md ${currentPage === pageNum
                        ? "bg-gray-900 text-white"
                        : "text-black"
                        }`}
                    >
                      {pageNum}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 text-sm border border-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:tracking-[3px] transition-all duration-300 hover:bg-white text-black"
                  >
                    Next
                  </button>
                </div>
                <div className="ml-4 text-sm text-gray-600">
                  Showing {blogsData?.data?.from || 1} to {blogsData?.data?.to || currentBlogs.length} of {totalBlogs} results
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
};

export default BlogsPage;