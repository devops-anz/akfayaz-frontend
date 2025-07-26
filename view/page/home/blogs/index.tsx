import React from 'react';
import { blogPosts } from '../../../../@json-db';
import BlogCard from 'view/ui/shared-component/component/BlogCard';
import { poppins } from 'styles/fonts';

/**
 * Blog section displaying the latest 3 blog posts with consistent design and spacing.
 */
const Blog = () => {
  return (
    <div className="mx-0  bg-slate-100 px-5 pb-10 sm:mx-0 sm:pb-16 md:mx-10 md:pb-20 mb-12 lg:px-0">
      <div className="container-custom">
        <div className="mb-10 sm:mb-16 md:mb-20">
          <p
            className={`font-[700] text-black ${poppins.className} pt-12 text-3xl sm:pt-16 sm:text-4xl md:pt-24 md:text-5xl lg:text-6xl`}
          >
            Latest Blog Posts
          </p>
          <p className="mb-3 pt-6 sm:mb-4 sm:pt-8 md:mb-5 md:pt-10 text-gray-600">
            Insights, trends, and tips from the world of business, tech, and innovation.
          </p>
          <hr className="border border-solid border-gray-400/50" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((blog: any) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              date={blog.date}
              title={blog.title}
              category={blog.category}
              description={typeof blog.content === 'string' ? blog.content.slice(0, 120) + (blog.content.length > 120 ? '...' : '') : ''}
              slug={blog.slug}
              id={blog.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;