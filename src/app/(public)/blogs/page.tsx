import PageBody from "./PageBody"


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

export default function Home() {
    return (
        <main >
            <PageBody  />
        </main>
    )
}
