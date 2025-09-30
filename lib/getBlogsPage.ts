import { blogCategoriesData, getBlogsPageData } from '../@json-db/blog';

export async function fetchBlogsPageData(params: any): Promise<any> {
  try {
    // Build query parameters
    const searchParams = new URLSearchParams();

    if (params?.search) {
      searchParams.append('search', params.search);
    }
    if (params?.sort) {
      searchParams.append('sort', params.sort);
    }
    if (params?.category) {
      searchParams.append('category', params.category);
    }
    if (params?.per_page) {
      searchParams.append('per_page', params.per_page.toString());
    }
    if (params?.page) {
      searchParams.append('page', params.page.toString());
    }

    const queryString = searchParams.toString();
    const url = `${process.env.CMS_SERVER_URL}/api/blogs${queryString ? `?${queryString}` : ''}`;

    console.log('blogs url:', url);

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      next: { revalidate: 15 } // after testing it's should be 3600 (1 hours)
      // cache: "no-store",
    });

    console.log('blogs API Response:', res.status, res.statusText);
    console.log('blogs API URL:', url);

    if (!res.ok) {
      console.log('blogs API failed, using fallback data');

      return {
        data: {
          data: getBlogsPageData.data.data,
          current_page: 1,
          last_page: 1,
          per_page: params?.per_page || 9,
          total: getBlogsPageData.data.data.length,
          from: 1,
          to: getBlogsPageData.data.data.length
        }
      };
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error('Error fetching blogs data:', error);

    return {
      data: {
        data: getBlogsPageData.data.data,
        current_page: 1,
        last_page: 1,
        per_page: params?.per_page || 9,
        total: getBlogsPageData.data.data.length,
        from: 1,
        to: getBlogsPageData.data.data.length
      }
    };
  }
}

export async function fetchCategoriesPageData(): Promise<any> {
  try {
    const url = `${process.env.CMS_SERVER_URL}/api/blog-categories`;

    console.log('categories url:', url);

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      // next: { revalidate: 15 } // after testing it's should be 3600 (1 hours)
      cache: "no-store",
    });

    console.log('categories API Response:', res.status, res.statusText);
    console.log('categories API URL:', url);

    if (!res.ok) {
      console.log(`categories API failed, using fallback data`);

      return {
        success: true,
        data: blogCategoriesData.categories
      };
    }

    const data = await res.json();

    return {
      success: true,
      data: data.categories
    };
  } catch (error) {
    console.error(`Error fetching data:`, error);

    return {
      success: true,
      data: blogCategoriesData.categories
    };
  }
}
