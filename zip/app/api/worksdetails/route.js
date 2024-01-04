import connectDB from "@/back-end/dbConnect";
import WorksDetails from "@/models/worksDetails";

export const GET = async (request) => {
  try {
    await connectDB();

    const workdetails = await WorksDetails.find().exec();
    console.log(workdetails);
    return new Response(JSON.stringify(workdetails), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all works", { status: 500 });
  }
};
