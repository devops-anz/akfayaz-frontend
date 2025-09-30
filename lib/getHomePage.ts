import {
  getHomePageAboutData,
  getHomePageContactData,
  getHomePageFavoriteQuoteData,
  getHomePageFeaturedMagazinesData,
  getHomePageHeroData,
  getHomePageServicesData,
  getHomePageStatsCareerHighlightsData,
  getHomePageTestimonialsData,
  getHomePageTopServicesData
} from '../@json-db';

export async function fetchHomePageHeroData() {
  try {
    const res = await fetch(`${process.env.CMS_SERVER_URL}/api/hero`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      next: { revalidate: 15 } // after testing it's should be 3600 (1 hours)
      // cache: "no-store",
    });
    console.log('API', `${process.env.CMS_SERVER_URL}/api/hero`);

    // console.log('Hero API Response:', res.status, res.statusText);

    if (!res.ok) {
      console.log('Hero API failed, using fallback data');

      return getHomePageHeroData;
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error('Error fetching hero data:', error);

    return getHomePageHeroData;
  }
}

export async function fetchHomePageServicesData() {
  try {
    const res = await fetch(`${process.env.CMS_SERVER_URL}/api/services`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      next: { revalidate: 15 } // after testing it's should be 3600 (1 hours)
      // cache: "no-store",
    });

    console.log('API', `${process.env.CMS_SERVER_URL}/api/services`);
    
    // console.log('Services API Response:', res.status, res.statusText);

    if (!res.ok) {
      console.log('Services API failed, using fallback data');

      return getHomePageServicesData;
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error('Error fetching services data:', error);

    return getHomePageServicesData;
  }
}

export async function fetchHomePageAboutData() {
  try {
    const res = await fetch(`${process.env.CMS_SERVER_URL}/api/about`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      next: { revalidate: 15 } // after testing it's should be 3600 (1 hours)
      // cache: "no-store",
    });

    console.log('API', `${process.env.CMS_SERVER_URL}/api/about`);

    // console.log('About API Response:', res.status, res.statusText);

    if (!res.ok) {
      console.log('About API failed, using fallback data');

      return getHomePageAboutData;
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error('Error fetching about data:', error);

    return getHomePageAboutData;
  }
}

export async function fetchHomePageTopServicesData() {
  try {
    const res = await fetch(`${process.env.CMS_SERVER_URL}/api/top-services`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      next: { revalidate: 15 } // after testing it's should be 3600 (1 hours)
      // cache: "no-store",
    });
    console.log('API', `${process.env.CMS_SERVER_URL}/api/top-services`);
    
    // console.log('Top Services API Response:', res.status, res.statusText);

    if (!res.ok) {
      console.log('Top Services API failed, using fallback data');

      return getHomePageTopServicesData;
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error('Error fetching top services data:', error);

    return getHomePageTopServicesData;
  }
}

export async function fetchHomePageStatsCareerHighlightsData() {
  try {
    const res = await fetch(`${process.env.CMS_SERVER_URL}/api/career-highlights`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      next: { revalidate: 15 } // after testing it's should be 3600 (1 hours)
      // cache: "no-store",
    });

    console.log('API', `${process.env.CMS_SERVER_URL}/api/career-highlights`);
    
    // console.log('Career Highlights API Response:', res.status, res.statusText);

    if (!res.ok) {
      console.log('Career Highlights API failed, using fallback data');

      return getHomePageStatsCareerHighlightsData;
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error('Error fetching career highlights data:', error);

    return getHomePageStatsCareerHighlightsData;
  }
}

export async function fetchHomePageFavoriteQuoteData() {
  try {
    const res = await fetch(`${process.env.CMS_SERVER_URL}/api/favorite-quote`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      next: { revalidate: 15 } // after testing it's should be 3600 (1 hours)
      // cache: "no-store",
    });

    console.log('API', `${process.env.CMS_SERVER_URL}/api/favorite-quote`);
    
    // console.log('Favorite Quote API Response:', res.status, res.statusText);

    if (!res.ok) {
      console.log('Favorite Quote API failed, using fallback data');

      return getHomePageFavoriteQuoteData;
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error('Error fetching favorite quote data:', error);

    return getHomePageFavoriteQuoteData;
  }
}

export async function fetchHomePageFeaturedMagazinesData() {
  try {
    const res = await fetch(`${process.env.CMS_SERVER_URL}/api/featured-magazines`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      next: { revalidate: 15 } // next: { revalidate: 1 }, // after testing it's should be 3600 (1 hours)
      // cache: "no-store",
    });

    console.log('API', `${process.env.CMS_SERVER_URL}/api/featured-magazines`);
    
    // console.log('Featured Magazines API Response:', res.status, res.statusText);

    if (!res.ok) {
      console.log('Featured Magazines API failed, using fallback data');

      return getHomePageFeaturedMagazinesData;
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error('Error fetching featured magazines data:', error);

    return getHomePageFeaturedMagazinesData;
  }
}

export async function fetchHomePageTestimonialsData() {
  try {
    const res = await fetch(`${process.env.CMS_SERVER_URL}/api/testimonials`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      next: { revalidate: 15 } // after testing it's should be 3600 (1 hours)
      // cache: "no-store",
    });

    console.log('API', `${process.env.CMS_SERVER_URL}/api/testimonials`);
    
    // console.log('Testimonials API Response:', res.status, res.statusText);

    if (!res.ok) {
      console.log('Testimonials API failed, using fallback data');

      return getHomePageTestimonialsData;
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error('Error fetching testimonials data:', error);

    return getHomePageTestimonialsData;
  }
}

export async function fetchHomeContactData() {
  try {
    const res = await fetch(`${process.env.CMS_SERVER_URL}/api/contact`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      next: { revalidate: 15 } // after testing it's should be 3600 (1 hours)
      // cache: "no-store",
    });

    console.log('API', `${process.env.CMS_SERVER_URL}/api/contact`);
    
    // console.log('Contact API Response:', res.status, res.statusText);

    if (!res.ok) {
      console.log('Contact API failed, using fallback data');

      return getHomePageContactData;
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error('Error fetching contact data:', error);

    return getHomePageContactData;
  }
}
