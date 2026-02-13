import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";


export default async function Page({ params }) {
    const { handle } = await params
    const client = await clientPromise
    if (!client) {
        return Response.json({ success: false, error: "Database not connected" }, { status: 500 })
    }
    const db = client.db("linktree")
    const collection = db.collection("links")
    // If the handle is already claimed, you cannot create the bittree
    const item = await collection.findOne({ handle: handle })
    if (!item) {
        return notFound()
    }

    // const i = {
    //     "_id": {
    //         "$oid": "698ebed4d3e4f56704c7a1c3"
    //     },
    //     "handle": "texting 3",
    //     "links": [
    //         {
    //             "text": "github",
    //             "url": "https://github.com/Shashikantgiri-web/LinkTree-Clone"
    //         },
    //         {
    //             "text": "vercel",
    //             "url": "https://vercel.com/shashikantgiri-webs-projects/linktree/deployments"
    //         }
    //     ],
    //     "linkImages": "https://avatars.githubusercontent.com/u/188772850?v=4&size=64"
    // }

    return (
        <div className="w-full min-h-screen bg-background flex flex-col justify-center items-center p-4 py-20 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px]"></div>

            <div className="w-full max-w-2xl glass rounded-[3rem] p-8 lg:p-12 flex flex-col items-center gap-10 animate-slide-up relative z-10">
                <header className="flex flex-col items-center gap-6 text-center">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-linear-to-r from-primary to-accent rounded-full blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                        <img
                            src={item.linkImages}
                            alt={item.handle}
                            className="relative w-32 h-32 rounded-full object-cover border-4 border-background/50 shadow-2xl"
                        />
                    </div>
                    <div className="space-y-1">
                        <h1 className="text-3xl font-bold text-foreground">@{item.handle}</h1>
                        <p className="text-muted-foreground flex items-center justify-center gap-2">
                            linktr.ee/{item.handle}
                        </p>
                    </div>
                </header>

                <div className="w-full space-y-4 max-h-[50vh] overflow-y-auto pr-2 scrollbar-hide">
                    {item.links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block w-full stagger-1"
                        >
                            <div className="w-full py-5 px-6 rounded-2xl bg-muted/30 border border-glass-border glass shadow-lg flex justify-between items-center transition-all duration-300 hover:scale-[1.03] hover:bg-muted/50 hover:border-primary/50 text-foreground font-semibold">
                                <span>{link.text}</span>
                                <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>

                <footer className="mt-4">
                    <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        Create your own LinkTree
                    </Link>
                </footer>
            </div>
        </div>
    );
}