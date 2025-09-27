import { fetchHomePageHeroData, fetchHomePageServicesData } from 'lib/getHomePage';
import PageBody from './PageBody'

export const metadata = {
    title: 'Ahsanul Karim Fayaz - Home',
    description: "Eager to help you with Sales, Marketing, Procurement, & Acquisition",
    keywords: ['Ahsanul Karim Fayaz', 'Sales', 'Marketing', 'Procurement', 'Acquisition'],
    authors: [{ name: 'Ahsanul Karim Fayaz', url: 'https://akfayaz.com.au' }],
    robots: {
        index: true,
        follow: true,
    },
}


const getHeroData = async () => {
    const data = await fetchHomePageHeroData();

    if (data && typeof data === "object" && !Array.isArray(data)) {
        // Handle object of data
        return {
            heroData: data,
            error: null,
        };
    } else {
        // Handle other types of responses
        return {
            pageData: [],
            error: true,
        };
    }
};

const getServiceData = async () => {
    const data = await fetchHomePageServicesData();

    if (data && typeof data === "object" && !Array.isArray(data)) {
        // Handle object of data
        return {
            serviceData: data,
            error: null,
        };
    } else {
        // Handle other types of responses
        return {
            pageData: [],
            error: true,
        };
    }
};

export default async function Home() {
    const { heroData } = await getHeroData();
    const { serviceData } = await getServiceData();

    return (
        <main >
            <PageBody
                heroData={heroData}
                serviceData={serviceData}
            />
        </main>
    )
}


