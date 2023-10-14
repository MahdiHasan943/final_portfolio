import connectDB from "@/back-end/dbConnect";
import Works from "@/models/works";

export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const product = await Works.findById(params.id);
    if (!product) return new Response("Prompt Not Found", { status: 404 });

    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
