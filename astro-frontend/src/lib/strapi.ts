// Strapi API Helper
// Fetches data from Strapi CMS

const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL || 'http://localhost:1337';

interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface StrapiError {
  status: number;
  name: string;
  message: string;
}

// Generic fetch function
async function fetchAPI<T>(
  endpoint: string,
  options: {
    populate?: string | string[];
    filters?: Record<string, any>;
    sort?: string | string[];
    pagination?: { page?: number; pageSize?: number };
  } = {}
): Promise<T | null> {
  const { populate, filters, sort, pagination } = options;
  
  const params = new URLSearchParams();
  
  // Handle populate
  if (populate) {
    if (Array.isArray(populate)) {
      populate.forEach((p) => params.append('populate', p));
    } else {
      params.append('populate', populate);
    }
  }
  
  // Handle filters
  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      params.append(`filters[${key}]`, value);
    });
  }
  
  // Handle sort
  if (sort) {
    if (Array.isArray(sort)) {
      sort.forEach((s) => params.append('sort', s));
    } else {
      params.append('sort', sort);
    }
  }
  
  // Handle pagination
  if (pagination) {
    if (pagination.page) params.append('pagination[page]', String(pagination.page));
    if (pagination.pageSize) params.append('pagination[pageSize]', String(pagination.pageSize));
  }

  const url = `${STRAPI_URL}/api/${endpoint}?${params.toString()}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      console.error(`Strapi API Error: ${response.status} ${response.statusText}`);
      return null;
    }
    
    const result: StrapiResponse<T> = await response.json();
    return result.data;
  } catch (error) {
    console.error('Strapi fetch error:', error);
    return null;
  }
}

// Helper to get full image URL
export function getStrapiMediaUrl(url: string | undefined): string {
  if (!url) return '/placeholder.jpg';
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}

// ============================================
// API Functions for each content type
// ============================================

// Homepage
export async function getHomepage() {
  return fetchAPI<any>('homepage', { populate: '*' });
}

// Site Settings
export async function getSiteSettings() {
  return fetchAPI<any>('site-setting', { populate: '*' });
}

// About Page
export async function getAboutPage() {
  return fetchAPI<any>('about-page', { populate: '*' });
}

// Services
export async function getServices() {
  return fetchAPI<any[]>('services', { 
    populate: '*',
    sort: 'order:asc'
  });
}

export async function getService(slug: string) {
  const services = await fetchAPI<any[]>('services', {
    populate: '*',
    filters: { slug }
  });
  return services?.[0] || null;
}

// Projects
export async function getProjects() {
  return fetchAPI<any[]>('projects', {
    populate: ['thumbnail', 'images', 'category'],
    sort: 'createdAt:desc'
  });
}

export async function getFeaturedProjects() {
  return fetchAPI<any[]>('projects', {
    populate: ['thumbnail', 'category'],
    filters: { featured: true },
    pagination: { pageSize: 6 }
  });
}

export async function getProject(slug: string) {
  const projects = await fetchAPI<any[]>('projects', {
    populate: '*',
    filters: { slug }
  });
  return projects?.[0] || null;
}

// Blog Posts
export async function getBlogPosts() {
  return fetchAPI<any[]>('blog-posts', {
    populate: ['thumbnail', 'author', 'category'],
    sort: 'publishedAt:desc'
  });
}

export async function getRecentBlogPosts(limit: number = 3) {
  return fetchAPI<any[]>('blog-posts', {
    populate: ['thumbnail', 'author', 'category'],
    sort: 'publishedAt:desc',
    pagination: { pageSize: limit }
  });
}

export async function getBlogPost(slug: string) {
  const posts = await fetchAPI<any[]>('blog-posts', {
    populate: '*',
    filters: { slug }
  });
  return posts?.[0] || null;
}

// Categories
export async function getCategories() {
  return fetchAPI<any[]>('categories', { populate: '*' });
}

// Testimonials
export async function getTestimonials() {
  return fetchAPI<any[]>('testimonials', { 
    populate: '*',
    filters: { featured: true }
  });
}

// Team Members
export async function getTeamMembers() {
  return fetchAPI<any[]>('team-members', {
    populate: '*',
    sort: 'order:asc'
  });
}

// Client Logos
export async function getClientLogos() {
  return fetchAPI<any[]>('client-logos', {
    populate: '*',
    sort: 'order:asc'
  });
}

// Export STRAPI_URL for components that need it
export { STRAPI_URL };
