import Link from "next/link"
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

    return <div className="w-full h-[105vh] flex flex-col justify-center items-center bg-[#4e8341cb] text-[#d6ed2af1]">
        <div className="w-[80%] h-[77vh] flex flex-col justify-center items-center bg-transparent border-2 border-pink-300 rounded-3xl p-2 px-1.5 gap-2">
            <div className='w-[99%] h-[25%] flex flex-col justify-center items-center'>
                <img src={item.linkImages} alt="img" className="w-[12%] h-[82%] rounded-[40%]" />
                <h1 className='text-2xl font-bold'>{item.handle}</h1>
            </div>
            <div className="w-[99%] h-[90%] flex flex-row justify-center items-center">
                <div className="w-[50%] h-full flex flex-col justify-start items-center gap-2">
                    {item.links.map((item, index)=>{
                    return <Link  key={index} href= {item.url}><div className="bg-purple-100 text-blue-900 py-4 shadow-lg px-2 min-w-96 flex justify-center rounded-md my-3">
                       {item.text} 
                    </div></Link> 
                })}
                </div>
            </div>
        </div>
    </div>
}