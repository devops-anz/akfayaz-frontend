import { Metadata } from "next";
import { fetchBlogDetailData } from "../../../../../lib/getBlogDetail";
import { getBlogsPageData } from "../../../../../@json-db/blog";
import { notFound } from "next/navigation";
import PageBody from "./PageBody";

type Blogs = {
  id: number;
  slug: string;
  title: string;
  date: string;
  user_id: number;
  blog_category_id: number;
  image: string;
  content: string;
  tags: string[];
  status: "published" | "draft" | "archived";
  meta_title: string;
  meta_description: string;
  meta_keywords: string[];
  is_featured: number;
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

interface BlogDetailResponse {
  success: boolean;
  data: BlogData | null;
  message?: string;
}

// Generate metadata dynamically
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blogResponse: BlogDetailResponse = await fetchBlogDetailData(slug, "Blog Detail");

  if (!blogResponse.success || !blogResponse.data) {
    return {
      title: "Blog Not Found - AKM Assets",
      description: "The requested blog post could not be found.",
    };
  }

  const blog = blogResponse.data;

  return {
    title: blog.meta_title || blog.title || "AKM Assets Blog",
    description: blog.meta_description || blog.content?.substring(0, 160) || "Read our latest insights and industry updates.",
    keywords: blog.meta_keywords || blog.tags,
    openGraph: {
      title: blog.title,
      description: blog.meta_description || blog.content?.substring(0, 160),
      images: blog.image ? [`${process.env.NEXT_PUBLIC_STORAGE_URL}/${blog.image}`] : [],
      type: "article",
      publishedTime: blog.created_at,
      modifiedTime: blog.updated_at,
      authors: [blog.user?.name || "AKFayaz"],
      tags: blog.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.meta_description || blog.content?.substring(0, 160),
      images: [blog.image_url],

    },
  };
}

// Generate static params for static generation
export async function generateStaticParams() {
  const blogs = getBlogsPageData.data.data;

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blogResponse: BlogDetailResponse = await fetchBlogDetailData(slug, "Blog Detail");
  console.log("blogResponse:", blogResponse)
  // Handle blog not found
  if (!blogResponse.success || !blogResponse.data) {
    notFound();
  }

  const blog = blogResponse.data;

  // Get related blogs based on category and tags
  const allBlogs = getBlogsPageData.data.data;
  const relatedBlogs = allBlogs
    .filter(
      (post) =>
        post.slug !== slug &&
        (post.blog_category?.name === blog.blog_category?.name ||
          post.tags.some((tag) => blog.tags.includes(tag)))
    )
    .slice(0, 3);



  return (
    <div className="bg-neutral-100 pt-24">

      {/* Main Content */}
      <PageBody
        blog={blog as BlogData}
        relatedBlogs={relatedBlogs as Blogs[]}
      />
    </div>
  );
}

