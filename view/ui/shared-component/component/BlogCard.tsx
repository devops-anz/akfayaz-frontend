import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { poppins } from 'styles/fonts';

/**
 * BlogCard displays a blog post preview with image, date, title, description, and a Read More link.
 */
interface BlogCardProps {
  image: string;
  date: string;
  title: string;
  description: string;
  slug: string;
  category: string;
  id: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, date, title, description, slug, category, }) => {
  const router = useRouter();
  // console.log('slug', slug)
  // console.log('image', image)

  return (
    <div className="bg-white  overflow-hidden shadow transition-shadow hover:shadow-lg flex flex-col">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          width={1000}
          height={1000}
        />
      </div>
      <div className="flex flex-col flex-1 p-6">
        <div className="mb-2 flex justify-between text-xs text-gray-600">
          <p> {date} </p>
          <p className='bg-black text-white px-2 py-[1.5px] rounded-lg'> {category} </p>
        </div>
        <h3 className={`mb-2 text-lg font-bold text-black ${poppins.className}`}>{title}</h3>
        <p className="mb-4 text-gray-400 text-sm flex-1">{description}</p>
        <a
          onClick={() => router.push(`/blogs/${slug}`)}
          rel="noopener noreferrer"
          className="cursor-pointer relative w-fit text-base font-medium text-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;