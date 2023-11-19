export async function POST(request) {
    const { title, row, col } = await request.json();
    await connectMongoDB();
    await Topic.create({ title, row, col })
    return NextResponse.json({ message: "topic created", }, { status: 201 });
}