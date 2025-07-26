import Image from 'next/image';
import { blogPosts } from '../../../../../@json-db';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ahsanul Karim Fayaz - Blogs',
  description: "Unlock your business's full potential with A.Fayaz - Blogs"
};

async function generateStaticParams() {
  return blogPosts.map(blog => ({
    slug: blog.slug
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blogPost = blogPosts.find(blog => blog.slug === slug);

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  const relatedPosts = blogPosts
    .filter(
      post =>
        post.slug !== slug &&
        (post.category === blogPost.category || post.tags.some(tag => blogPost.tags.includes(tag)))
    )
    .slice(0, 3);

  const currentURL = typeof window !== 'undefined' ? window.location.href : '';
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`,
    twitter: `https://twitter.com/intent/tweet?url=${currentURL}&text=${blogPost.title}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${currentURL}&title=${blogPost.title}`
  };

  return (
    <div className='mt-16  sm:pt-30   mx-4 bg-slate-100 pt-5 sm:mx-6 md:mx-10 md:pt-32 pb-10'>
      {/* <p className=" text-2xl font-bold text-black">Blogs</p>   */}
      <div className='container-custom  px-4 sm:px-6 lg:px-0'>
        <h1 className={`text-2xl font-bold text-black sm:text-3xl md:text-4xl `}>
          {blogPost.title}
        </h1>
        <div className='mb-6 text-sm sm:text-base flex items-center pt-5 gap-2 sm:mb-8 md:mb-10'>
          <Link href='/' className='text-gray-600  hover:text-black'>
            Home
          </Link>
          <IoIosArrowForward className='text-gray-600' />
          <Link href='/blogs' className='text-gray-600 hover:text-black'>
            Blogs
          </Link>
          <IoIosArrowForward  className='text-gray-600 hidden sm:block' />
          <span className='hidden sm:block text-black'>{blogPost.title}</span>
        </div>

        <div className='grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[2fr_1fr] lg:gap-4'>
          <div className='space-y-6 sm:space-y-8'>
            <div className='overflow-hidden rounded-sm shadow-md'>
              <Image
                src={blogPost.image}
                alt={blogPost.title}
                width={800}
                height={500}
                className='h-[250px] w-full object-cover sm:h-[350px] md:h-[450px]'
              />
            </div>

            <div className='space-y-4 sm:space-y-6'>
              <div className='flex flex-wrap gap-3 text-sm text-gray-600'>
                <span className='font-medium'> Published on: {blogPost.date}</span>
                <span>•</span>
                <span className='font-medium'>Category:</span> <span className='rounded-lg bg-black px-2 py-[1.5px] text-white'>{blogPost.category}</span>
              </div>

              <div className='flex items-center gap-4 py-2'>
                <span className='text-gray-700'>Share:</span>
                <a
                  href={shareUrls.facebook}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 transition-colors hover:text-blue-800'
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href={shareUrls.twitter}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sky-500 transition-colors hover:text-sky-700'
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href={shareUrls.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-800 transition-colors hover:text-blue-900'
                >
                  <FaLinkedin size={24} />
                </a>
              </div>

              <div className='prose prose-lg max-w-none text-gray-600'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: blogPost.content
                      .split('\n')
                      .map(line => {
                        if (line.startsWith('# ')) {
                          return `<h1 class="text-2xl sm:text-3xl font-medium   mt-8 mb-4 ">${line.slice(2)}</h1>`;
                        } else if (line.startsWith('## ')) {
                          return `<h2 class="text-xl sm:text-2xl font-medium mt-8 mb-4 ">${line.slice(3)}</h2>`;
                        } else if (line.startsWith('• ')) {
                          return `<p class="font-bold mt-4 mb-2">${line.slice(2)}</p>`;
                        } else if (line.startsWith('- ')) {
                          return `<p class="ml-4 mb-2">• ${line.slice(2)}</p>`;
                        } else if (line.trim() === '') {
                          return '<div class="my-4"></div>';
                        } else {
                          return `<p class="mb-4">${line}</p>`;
                        }
                      })
                      .join('')
                  }}
                />
              </div>

              <div className='flex flex-wrap gap-2 pt-4'>
                {blogPost.tags.map(tag => (
                  <span key={tag} className='rounded-sm border border-gray-700 px-2 py-1 text-xs'>
                    {tag}
                  </span>
                ))}
              </div>

              {blogPost?.comments && blogPost.comments.length > 0 && (
                <div className='mt-8 rounded bg-white/65 p-3.5 shadow sm:p-6'>
                  <h3 className={`mb-6 text-xl font-bold `}>Comments</h3>
                  {blogPost.comments.map((comment, index) => (
                    <div key={index} className='mb-6 last:mb-0'>
                      <div className='mb-2 flex items-center gap-3'>
                        <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-200'>
                          {comment?.avatar ? (
                            <Image
                              src={comment.avatar}
                              alt={comment.user}
                              width={40}
                              height={40}
                              className='rounded-full'
                            />
                          ) : (
                            <span className='text-lg text-gray-600'>{comment.user[0]}</span>
                          )}
                        </div>
                        
                        <div>
                          <h4 className='font-medium text-black'>{comment.user}</h4>
                    
                          <p className='text-sm text-gray-600'>{comment.date}</p>
                        </div>
                      </div>
                      <p className='text-gray-600'>{comment.comment}</p>
                      <div className={`pt-4 ${index !== blogPost.comments.length - 1 ? 'border-b border-gray-300' : ''}`}></div>
                    </div>
                    
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className='space-y-6 sm:space-y-8'>
            <div className='rounded bg-white/65 p-3.5 shadow sm:p-6'>
              <h3 className={`mb-6 text-xl border-b-2 border-gray-300 pb-2 font-medium `}>Recent Posts</h3>
              <div className='space-y-4'>
                {blogPosts
                  .filter(post => post.slug !== slug)
                  .slice(0, 3)
                  .map(post => (
                    <Link key={post.id} href={`/blogs/${post.slug}`} className='group block'>
                      <div className='flex gap-4'>
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={100}
                          height={100}
                          className='h-20 w-20 rounded-sm object-cover sm:h-24 sm:w-24'
                        />
                        <div>
                          <h4 className={`line-clamp-2 font-normal group-hover:text-black `}>
                            {post.title}
                          </h4>
                          <p className='text-sm text-gray-600'>{post.date}</p>
                          <p className='mt-1 w-fit rounded-lg bg-black px-2 py-[1.5px] text-xs text-white'>
                            {post.category}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            <div className='rounded bg-white/65 p-3.5 shadow sm:p-6'>
              <h3 className={`mb-6 text-xl border-b-2 border-gray-300 pb-2 font-medium `}>Related Posts</h3>
              <div className='space-y-4'>
                {relatedPosts.map(post => (
                  <Link key={post.id} href={`/blogs/${post.slug}`} className='group block'>
                    <div className='flex gap-4'>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={100}
                        height={100}
                        className='h-20 w-20 rounded-sm object-cover sm:h-24 sm:w-24'
                      />
                      <div>
                        <h4 className={`line-clamp-2 font-normal group-hover:text-black `}>
                          {post.title}
                        </h4>
                        <p className='text-sm text-gray-600'>{post.date}</p>
                        <p className='mt-1 w-fit rounded-lg bg-black px-2 py-[1.5px] text-xs text-white'>
                          {post.category}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { generateStaticParams };
