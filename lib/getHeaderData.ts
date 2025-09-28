import { HeaderData, HeaderApiResponse, FetchHeaderDataReturn, MappedHeaderData } from '@/types/header';
import { navbarData as staticNavbarData } from '../@json-db/index';

// Cache for header data
let headerDataCache: HeaderData | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

/**
 * Fetches header data from the API
 * @returns Promise<FetchHeaderDataReturn>
 */
export async function fetchHeaderData(): Promise<FetchHeaderDataReturn> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_SERVER_URL}/api/header`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      next: { revalidate: 1 } // Revalidate every 5 minutes
      // cache: "no-store",
    });

    console.log('API', `${process.env.NEXT_PUBLIC_CMS_SERVER_URL}/api/header`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: HeaderApiResponse = await response.json();

    if (result.success && result.data) {
      return {
        data: result.data,
        error: null
      };
    } else {
      throw new Error(result.message || 'Invalid API response format');
    }
  } catch (error) {
    console.error('Error fetching header data:', error);

    return {
      data: null,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}

/**
 * Gets header data with caching support
 * @returns Promise<HeaderData | null>
 */
export async function getHeaderData(): Promise<HeaderData | null> {
  const now = Date.now();

  // Return cached data if it's still valid
  if (headerDataCache && now - cacheTimestamp < CACHE_DURATION) {
    return headerDataCache;
  }

  const { data, error } = await fetchHeaderData();

  if (data) {
    headerDataCache = data;
    cacheTimestamp = now;

    return data;
  }

  if (error) {
    console.warn('Failed to fetch header data, using cached data if available:', error);

    return headerDataCache; // Return cached data even if expired
  }

  return null;
}

/**
 * Maps API header data to the format expected by navbar components
 * @param headerData - Header data from API
 * @returns MappedHeaderData
 */
export function mapHeaderDataToNavbar(headerData: HeaderData): MappedHeaderData {
  return {
    companyName: headerData.company_name,
    description: headerData.description,
    navbarList: headerData.menu_links.map(link => ({
      title: link.title,
      url: link.url,
      subMenu: undefined // API doesn't provide submenu structure yet
    })),
    portfolioLinks: headerData.portfolio_links.map(link => ({
      title: link.title,
      url: link.url,
      icon: link.icon
    })),
    buttonText: headerData.button_text,
    buttonLink: headerData.button_link,
    emailText: headerData.email_text,
    email: headerData.email,
    logoUrl: headerData.logo_url
  };
}

/**
 * Gets navbar data with API integration and fallback to static data
 * @returns Promise<MappedHeaderData>
 */
export async function getNavbarData(): Promise<MappedHeaderData> {
  try {
    const headerData = await getHeaderData();

    if (headerData) {
      return mapHeaderDataToNavbar(headerData);
    }

    // Fallback to static data
    console.warn('Using static navbar data as fallback');

    return {
      companyName: staticNavbarData.data.company_name,
      description: staticNavbarData.data.description,
      navbarList: staticNavbarData.data.menu_links,
      portfolioLinks: staticNavbarData.data.portfolio_links.map(link => ({
        title: link.title,
        url: link.url,
        icon: link.icon
      })),
      buttonText: staticNavbarData.data.button_text,
      buttonLink: staticNavbarData.data.button_link,
      emailText: staticNavbarData.data.email_text,
      email: staticNavbarData.data.email,
      logoUrl: staticNavbarData.data.logo_url
    };
  } catch (error) {
    console.error('Error getting navbar data:', error);
    // Return static data on any error

    return {
      companyName: staticNavbarData.data.company_name,
      description: staticNavbarData.data.description,
      navbarList: staticNavbarData.data.menu_links,
      portfolioLinks: staticNavbarData.data.portfolio_links.map(link => ({
        title: link.title,
        url: link.url,
        icon: link.icon
      })),
      buttonText: staticNavbarData.data.button_text,
      buttonLink: staticNavbarData.data.button_link,
      emailText: staticNavbarData.data.email_text,
      email: staticNavbarData.data.email,
      logoUrl: staticNavbarData.data.logo_url
    };
  }
}
