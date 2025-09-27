import PageBody from "./PageBody"
import { fetchBlogsPageData } from "../../../../lib/getBlogsPage"

export const metadata = {
    title: 'Ahsanul Karim Fayaz - Blogs',
    description: "Eager to help you with Sales, Marketing, Procurement, & Acquisition",
    keywords: ['Ahsanul Karim Fayaz', 'Sales', 'Marketing', 'Procurement', 'Acquisition'],
    authors: [{ name: 'Ahsanul Karim Fayaz', url: 'https://akfayaz.com.au' }],
    robots: {
        index: true,
        follow: true,
    },
}

interface BlogsPageProps {
    searchParams: Promise<any>;
}

async function getPageBlogsData(searchParams: any) {
    const params = {
        search: searchParams.search,
        sort: searchParams.sort,
        category: searchParams.category,
        per_page: searchParams.per_page ? parseInt(searchParams.per_page) : 9,
        page: searchParams.page ? parseInt(searchParams.page) : 1,
    };

    const blogsData = await fetchBlogsPageData(params);

    return blogsData;
}

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
    const resolvedSearchParams = await searchParams;
    const blogsData = await getPageBlogsData(resolvedSearchParams);

    return (
        <main >
            <PageBody blogsData={blogsData} searchParams={resolvedSearchParams} />
        </main>
    )
}