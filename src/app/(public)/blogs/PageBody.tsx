import { BlogSearchParams, GetBlogsResponse } from '@/types/blogs';
import React from 'react'
import BlogsPage from 'view/page/blogs'

interface PageBodyProps {
  blogsData: GetBlogsResponse;
  searchParams: BlogSearchParams;
}

const PageBody = ({ blogsData, searchParams }: PageBodyProps) => {
  return (
    <div>

      <div className='mx-auto'>
        <BlogsPage blogsData={blogsData} searchParams={searchParams} />
      </div>
    </div>
  )
}

export default PageBody