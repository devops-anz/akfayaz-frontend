'use client'
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegCalendarAlt, FaUser, FaTag } from "react-icons/fa";

// Format date
const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};

// TypeScript interfaces
interface BlogData {
    id: number;
    slug: string;
    title: string;
    content: string;
    date: string;
    image?: string;
    meta_title?: string;
    meta_description?: string;
    meta_keywords?: string[];
    tags: string[];
    user?: {
        id: number;
        name: string;
        email: string;
    };
    blog_category?: {
        id: number;
        name: string;
        slug: string;
        description: string;
    };
    status: string;
    is_featured: number;
    created_at: string;
    updated_at: string;
    image_url: string;
}


type Blogs = {
    id: number;
    slug: string;
    title: string;
    date: string; // YYYY-MM-DD
    user_id: number;
    blog_category_id: number;
    image: string;
    content: string; // HTML string
    tags: string[];
    status: "published" | "draft" | "archived"; // can extend if needed
    meta_title: string;
    meta_description: string;
    meta_keywords: string[];
    is_featured: number; // 0 | 1, could also be boolean
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    image_url: string;
    blog_category: {
        id: number;
        name: string;
        slug: string;
        description: string | null;
        deleted_at: string | null;
        created_at: string;
        updated_at: string;
    };
    user: {
        id: number;
        name: string;
        email: string;
        email_verified_at: string | null;
        created_at: string;
        updated_at: string;
    };
};



const PageBody = ({ blog, relatedBlogs }: { blog: BlogData, relatedBlogs: Blogs[] }) => {


    return (
        <div className='mt-16 sm:pt-30 mx-4 bg-slate-100 pt-5 sm:mx-6 md:mx-10 md:pt-20 pb-10'>
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
                {/* Breadcrumb */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
                    {blog?.title}
                </h1>
                <div className="flex items-center gap-2 mb-6">
                    <Link href="/" className="text-black hover:text-[#30665f]">
                        Home
                    </Link>
                    <IoIosArrowForward className="text-black" />
                    <Link href="/blogs" className="text-black hover:text-[#30665f]">
                        Blogs
                    </Link>
                    <IoIosArrowForward className="text-black" />
                    <span className="text-[#30665f]">{blog.title}</span>
                </div>

                {/* Blog Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-8">
                    {/* Main Content */}
                    <div className="space-y-6">
                        {/* Featured Image */}
                        <div className="rounded-lg overflow-hidden">
                            <Image
                                src={blog.image_url}
                                alt={blog.title}
                                width={800}
                                height={400}
                                className="w-full h-64 sm:h-full object-cover"
                                loading="lazy"
                            />
                        </div>

                        {/* Blog Meta Information */}
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                                <div className="flex items-center gap-2">
                                    <FaRegCalendarAlt className="text-[#30665f]" />
                                    <span>{formatDate(blog.date || blog.created_at)}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaUser className="text-[#30665f]" />
                                    <span>{blog.user?.name || "AKM Assets"}</span>
                                </div>
                                {blog.blog_category && (
                                    <div className="flex items-center gap-2">
                                        <FaTag className="text-[#30665f]" />
                                        <span>{blog.blog_category.name}</span>
                                    </div>
                                )}
                            </div>

                            {/* Blog Title */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
                                {blog.title}
                            </h1>

                            {/* Blog Content */}
                            <div
                                className="prose max-w-none [&>h2]:pt-3 [&>h3]:pt-3 [&>h3]:pb-3 [&>h2]:text-2xl [&>h3]:text-xl [&>p]:mb-2 last:[&>p]:mb-0"
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                            />

                            {/* Tags */}
                            {blog.tags && blog.tags.length > 0 && (
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <h3 className="text-lg font-semibold text-black mb-3">Tags:</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {blog.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-[#30665f] text-white px-3 py-1 rounded-full text-sm hover:bg-[#2a5a54] transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Related Blogs */}
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-bold text-black mb-4">Recent Posts</h3>
                            {relatedBlogs.length > 0 ? (
                                <div className="space-y-4">
                                    {relatedBlogs.map((relatedBlog) => {
                                        const relatedImageUrl = relatedBlog.image
                                            ? `${process.env.NEXT_PUBLIC_STORAGE_URL}/${relatedBlog.image}`
                                            : "/image/blogs/default.jpg";

                                        return (
                                            <Link
                                                key={relatedBlog.id}
                                                href={`/blogs/${relatedBlog.slug}`}
                                                className="block group"
                                            >
                                                <div className="flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                                    <Image
                                                        src={relatedImageUrl}
                                                        alt={relatedBlog.title}
                                                        width={80}
                                                        height={60}
                                                        className="w-20 h-15 object-cover rounded flex-shrink-0"
                                                    />
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="text-sm font-semibold text-black group-hover:text-[#30665f] transition-colors line-clamp-2">
                                                            {relatedBlog.title}
                                                        </h4>
                                                        <p className="text-xs text-gray-500 mt-1">
                                                            {formatDate(relatedBlog.date || relatedBlog.created_at)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            ) :
                                <p>No Data Found</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageBody;