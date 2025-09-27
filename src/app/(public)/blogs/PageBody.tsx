import React from 'react'
import BlogsPage from 'view/page/blogs'

const PageBody = ({ blogsData, searchParams }: any) => {
  return (
    <div>

      <div className='mx-auto'>
        <BlogsPage blogsData={blogsData} searchParams={searchParams} />
      </div>
    </div>
  )
}

export default PageBody