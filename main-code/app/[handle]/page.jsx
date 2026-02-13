// import { redirect } from "next/navigation"
// import clientPromise from "@/lib/mongodb"


export default async function Page({ params }) {
    const handle = params.handle
    const item = {
        "_id": {
            "$oid": "698ebed4d3e4f56704c7a1c3"
        },
        "handle": "texting 3",
        "links": [
            {
                "text": "github",
                "url": "https://github.com/Shashikantgiri-web/LinkTree-Clone"
            },
            {
                "text": "vercel",
                "url": "https://github.com/Shashikantgiri-web/LinkTree-Clone"
            }
        ],
        "linkImages": "https://avatars.githubusercontent.com/u/188772850?v=4&size=64"
    }

    // const client = await clientPromise
    // if (!client) {
    //     return Response.json({ success: false, error: "Database not connected" }, { status: 500 })
    // }
    // const db = client.db("linktree")
    // const collection = db.collection("links")

    return <div className="w-full h-[105vh] flex justify-start items-center bg-[#4e8341cb] text-[#d6ed2af1]">
        <div className="w-[80%] h-[77vh] flex flex-row justify-center items-center bg-transparent border-2 border-pink-300 rounded-3xl p-1 px-1.5 gap-2">
            <div className='w-[99%] h-[10%] flex justify-center items-start'>
                <img src={item.linkImages} alt="img" className="w-[40%] h-[95%] rounded-2xl" />
            </div>
            <div className="w-[99%] h-[90%] flex flex-row justify-center items-center"></div>
        </div>
    </div>
}