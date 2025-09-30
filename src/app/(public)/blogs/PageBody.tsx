import { BlogSearchParams, GetBlogsResponse } from '@/types/blogs';
import React from 'react'
import BlogsPage from 'view/page/blogs'

export interface Category {
  id: number;
  slug: string;
  description: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  blogs_count: number;
}

export interface CategoriesResponse {
  data: Category[];
}

interface PageBodyProps {
  blogsData: GetBlogsResponse;
  searchParams: BlogSearchParams;
  categoriesData: CategoriesResponse;
}

const PageBody = ({ categoriesData, blogsData, searchParams }: PageBodyProps) => {
  return (
    <div>

      <div className='mx-auto'>
        <BlogsPage categoriesData={categoriesData} blogsData={blogsData} searchParams={searchParams} />
      </div>
    </div>
  )
}

export default PageBody