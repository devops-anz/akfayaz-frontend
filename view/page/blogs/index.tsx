 "use client";
import React, { useEffect, useState } from "react";
import { blogPosts } from "../../../@json-db";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import BlogCard from "view/ui/shared-component/component/BlogCard";

const BlogsPage = () => {
  const [search, setSearch] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogPosts);
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [noBlogsFound, setNoBlogsFound] = useState(false);
  const blogsPerPage = 9;

  const handleSearch = (e: any) => {
    setNoBlogsFound(false);
    setSearch(e.target.value);
    setSelectedTag("");
    setSelectedCategory("");
    setCurrentPage(1);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const filteredBlogs = blogPosts.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
      );

      if(filteredBlogs.length === 0){
        setNoBlogsFound(true);
      } else {
        setFilteredBlogs(filteredBlogs);
      }
    }, 600);

    return () => clearTimeout(timeout);
  }, [search]);

  const handleCategory = (category: string) => {
    setSelectedCategory(category);
    setSelectedTag("");
    setCurrentPage(1);
    const filteredBlogs = blogPosts.filter(
      (blog) => blog.category === category
    );
    setFilteredBlogs(filteredBlogs);
  };

  const handleTag = (tag: string) => {
    setSelectedTag(tag);
    setSelectedCategory("");
    setCurrentPage(1);
    const filteredBlogs = blogPosts.filter((blog) => blog.tags.includes(tag));
    setFilteredBlogs(filteredBlogs);
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <div className="px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 min-h-screen w-full">
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
                          const sortedBlogs = [...filteredBlogs].sort(
                            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
                          );
                          setFilteredBlogs(sortedBlogs);
                          setSortOrder("newest");
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
                          const sortedBlogs = [...filteredBlogs].sort(
                            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
                          );
                          setFilteredBlogs(sortedBlogs);
                          setSortOrder("oldest");
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
                        onClick={() => {
                          setFilteredBlogs(blogPosts);
                          setSelectedCategory("");
                          setSelectedTag("");
                          setCurrentPage(1);
                        }}
                        className="bg-white text-black px-1.5 pb-0.5 rounded-sm cursor-pointer"
                      >
                        Reset
                      </p>
                    </div>
                    <div className="space-y-3">
                      {Array.from(new Set(blogPosts.map((blog) => blog.category))).map(
                        (category) => {
                          const count = blogPosts.filter(
                            (blog) => blog.category === category
                          ).length;
                          
                          return (
                            <div
                              onClick={() => handleCategory(category)}
                              key={category}
                              className={`flex items-center gap-2 cursor-pointer px-1 pb-0.5 rounded-sm
                                ${selectedCategory === category
                                  ? "bg-white text-black"
                                  : "text-white hover:bg-white hover:text-black"
                                }`}
                            >
                              <span>{category}</span>
                              <span className="text-sm">({count})</span>
                            </div>
                          );
                        }
                      )}
                      <div className="">
                        <p className="font-bold text-white text-base pt-4 pb-2">
                          Tags:
                        </p>
                        <div className="flex flex-wrap items-center gap-2">
                          {Array.from(new Set(blogPosts.map((blog) => blog.tags).flat())).map((tag) => (
                            <p
                              onClick={() => handleTag(tag)}
                              key={tag}
                              className={`text-xs border border-gray-700 rounded-sm px-2 py-1 cursor-pointer ${
                                selectedTag === tag
                                  ? "bg-white text-black"
                                  : "text-white hover:bg-white hover:text-black"
                              }`}
                            >
                              {tag}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-4/5 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-3 md:gap-5">
                {noBlogsFound ? (
                  <div className="col-span-full text-center">
                    <p className="text-xl sm:text-2xl font-bold">No blogs found</p>
                  </div>
                ) : (
                  currentBlogs.map((blog) => (
                    <BlogCard
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
          </div>

          <div className="flex justify-center pb-10 px-4 sm:px-0">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 text-sm border hover:tracking-[3px] transition-all duration-300 border-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed text-black"
              >
                Previous
              </button>
              {Array.from({ length: Math.ceil(filteredBlogs.length / blogsPerPage) }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-3 py-1 text-sm border border-gray-700 rounded-md ${
                    currentPage === pageNum 
                      ? "bg-gray-900 text-white"
                      : "text-black"
                  }`}
                >
                  {pageNum}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(Math.min(Math.ceil(filteredBlogs.length / blogsPerPage), currentPage + 1))}
                disabled={currentPage === Math.ceil(filteredBlogs.length / blogsPerPage)}
                className="px-3 py-1 text-sm border border-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:tracking-[3px] transition-all duration-300 hover:bg-white text-black"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
