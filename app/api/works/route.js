import connectDB from "@/back-end/dbConnect";
import Works from "@/models/works";

export const GET = async (request) => {
  try {
    await connectDB();

    const works = await Works.find().exec();
    console.log(works);
    return new Response(JSON.stringify(works), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all works", { status: 500 });
  }
};
