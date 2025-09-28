'use server';
import { blogSingleData } from '../@json-db/blog';

// Generic fetch function for individual blog data
export const fetchBlogDetailData = async (slug: string, dataType: string) => {
  try {
    const res = await fetch(`${process.env.CMS_SERVER_URL}/api/blogs/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      // cache: "no-store",
      next: { revalidate: 15 } // after testing it should be 3600 (1 hour)
    });

    console.log('API', `${process.env.CMS_SERVER_URL}/api/blogs/${slug}`);

    // console.log(`${dataType} API Response:`, res.status, res.statusText);

    if (!res.ok) {
      console.log(`${dataType} API failed, using fallback data`);

      return {
        success: true,
        data: blogSingleData.data
      };
    }

    const data = await res.json();

    return {
      success: true,
      data: data.data
    };
  } catch (error) {
    console.error(`Error fetching ${dataType.toLowerCase()} data:`, error);

    return {
      success: true,
      data: blogSingleData.data
    };
  }
};
