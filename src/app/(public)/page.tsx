import { 
    fetchHomePageHeroData, 
    fetchHomePageServicesData,
    fetchHomePageAboutData,
    fetchHomePageTopServicesData,
    fetchHomePageStatsCareerHighlightsData,
    fetchHomePageFavoriteQuoteData,
    fetchHomePageFeaturedMagazinesData,
    fetchHomePageTestimonialsData,
    fetchHomeContactData
} from 'lib/getHomePage';
import PageBody from './PageBody'

export const metadata = {
    title: 'Ahsanul Karim Fayaz - Home',
    description: "Eager to help you with Sales, Marketing, Procurement, & Acquisition",
    keywords: ['Ahsanul Karim Fayaz', 'Sales', 'Marketing', 'Procurement', 'Acquisition'],
    authors: [{ name: 'Ahsanul Karim Fayaz', url: 'https://akfayaz.com.au' }],
    robots: {
        index: true,
        follow: true,
    },
}

const getDataWithErrorHandling = async (fetchFunction: () => Promise<any>) => {
    try {
        const data = await fetchFunction();
        
        if (data && typeof data === "object" && !Array.isArray(data)) {
            return {
                data: data,
                error: null,
            };
        } else {
            return {
                data: [],
                error: true,
            };
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        
        return {
            data: null,
            error: true,
        };
    }
};

export default async function Home() {
    // Fetch all data in parallel for better performance
    const [
        heroResult,
        serviceResult,
        aboutResult,
        topServicesResult,
        timelineResult,
        quoteResult,
        featuredProjectsResult,
        testimonialsResult,
        contactResult
    ] = await Promise.all([
        getDataWithErrorHandling(fetchHomePageHeroData),
        getDataWithErrorHandling(fetchHomePageServicesData),
        getDataWithErrorHandling(fetchHomePageAboutData),
        getDataWithErrorHandling(fetchHomePageTopServicesData),
        getDataWithErrorHandling(fetchHomePageStatsCareerHighlightsData),
        getDataWithErrorHandling(fetchHomePageFavoriteQuoteData),
        getDataWithErrorHandling(fetchHomePageFeaturedMagazinesData),
        getDataWithErrorHandling(fetchHomePageTestimonialsData),
        getDataWithErrorHandling(fetchHomeContactData)
    ]);

    return (
        <main>
            <PageBody
                heroData={heroResult.data}
                serviceData={serviceResult.data}
                aboutData={aboutResult.data}
                topServicesData={topServicesResult.data}
                timelineData={timelineResult.data}
                quoteData={quoteResult.data}
                featuredProjectsData={featuredProjectsResult.data}
                testimonialsData={testimonialsResult.data}
                contactData={contactResult.data}
            />
        </main>
    )
}


