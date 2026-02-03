export async function GET() {
  return Response.json({ message: 'Hello World' })
}

export async function POST(request) {
  const data = await request.json()
  console.log(data)
  return Response.json({ message: 'Data received successfully', data: data })
}