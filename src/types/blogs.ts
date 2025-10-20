export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface BlogUser {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  is_super_admin: boolean;
  created_at: string;
  updated_at: string;
}

export interface Blog {
  id: number;
  slug: string;
  title: string;
  date: string;
  user_id: number;
  blog_category_id: number;
  image: string;
  content: string;
  tags: string[];
  status: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string[];
  is_featured: number; // could be boolean if API returns 0/1
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  image_url: string;
  blog_category: BlogCategory;
  user: BlogUser;
}

export interface PaginationLink {
  url: string | null;
  label: string;
  page: number | null;
  active: boolean;
}

export interface BlogsPagination {
  current_page: number;
  blogs: Blog[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PaginationLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface GetBlogsResponse {
  data: BlogsPagination;
  message: string;
  status: number;
}

export interface BlogSearchParams {
  search?: string;
  sort?: 'newest' | 'oldest';
  category?: string;
  per_page?: string;
  page?: string;
}

export interface MappedBlogData {
  id: number;
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
}
