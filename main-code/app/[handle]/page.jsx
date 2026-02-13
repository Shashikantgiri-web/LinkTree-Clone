// import { redirect } from "next/navigation"
// import clientPromise from "@/lib/mongodb"


export default async function Page({ params }) {
    const handle = params.handle
    // const client = await clientPromise
    // if (!client) {
    //     return Response.json({ success: false, error: "Database not connected" }, { status: 500 })
    // }
    // const db = client.db("linktree")
    // const collection = db.collection("links")

    return <div>my post : {handle}</div>
}