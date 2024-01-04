import connectDB from "@/back-end/dbConnect";
import Works from "@/models/works";

export default async function sitemap() {
  try {
    await connectDB();

    const works = await Works.find().exec();

    const pages = [
      {
        url: 'https://final-portfolio-one-rho.vercel.app/',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://final-portfolio-one-rho.vercel.app/works',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      // Add dynamic works pages to the sitemap
      ...works.map((work) => ({
        url: `https://final-portfolio-one-rho.vercel.app/works/${work.title}`, // Assuming _id is the unique identifier for each work
        lastModified: work.updatedAt || work.createdAt, // Use updatedAt if available, otherwise use createdAt
        changeFrequency: 'daily', // Adjust as needed
        priority: 0.5, // Adjust as needed
      })),
    ];

    return pages;
  } catch (error) {
    console.error("Failed to fetch works for sitemap:", error);
    return [];
  }
}
