import Link from "next/link";
import { FaHome, FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="bg-neutral-100 pt-24 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center py-16">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-gray-400 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-black mb-4">Blog Post Not Found</h2>
            <p className="text-gray-600 text-lg mb-8">
              Sorry, the blog post you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blogs"
              className="flex items-center gap-2 bg-[#30665f] text-white px-6 py-3 rounded-lg hover:bg-[#2a5a54] transition-colors"
            >
              <FaArrowLeft />
              Back to Blogs
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <FaHome />
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}