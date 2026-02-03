import clientPromise from "@/lib/mongodb"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET() {
  return Response.json({ message: 'Hello World' })
}

export async function POST(request) {
  try {
    const body = await request.json()
    console.log(body)

    const client = await clientPromise
    if (!client) {
      return Response.json({ success: false, error: "Database not connected" }, { status: 500 })
    }
    const db = client.db("linktree")
    const collection = db.collection("links")

    // Check if the short url exists
    // const doc = await collection.findOne({ shortUrl: body.shortUrl })
    // if (doc) {
    //   return Response.json({ success: false, error: true, message: 'URL already exists!' })
    // }

    const result = await collection.insertOne({
      "handle": body.handle,
      "link-text": body.link-text,
      "link": body.link,
      "link-images": body.link-images
    })

    return Response.json({ success: true, error: false, message: 'Data received successfully', data: body })
  } catch (error) {
    console.error(error)
    return Response.json({ success: false, message: 'Internal Server Error' }, { status: 500 })
  }
}