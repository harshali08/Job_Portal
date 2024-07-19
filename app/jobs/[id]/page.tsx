import React from "react";
import { notFound } from "next/navigation";
import SingleJobComp from "@/components/SingleJobComp";

interface Job {
  id: string;
  position: string;
  company: string;
  location: string;
  category: string;
  experience: number;
  description: string;
  salary: string;
  posted: string;
}

const fetchJobData = async (id: string): Promise<Job | null> => {
  try {
    const res = await fetch(`http://localhost:3000/api/jobs/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache" // Add this header to prevent caching
      },
    });

    if (!res.ok) {
      console.error(`Error fetching job data: ${res.status} ${res.statusText}`);
      return null;
    }

    const data = await res.json();
    const jobData = await data.job;
    console.log("Fetched Job Data:", jobData);
    return jobData;
  } catch (error) {
    console.error("Failed to fetch job data:", error);
    return null;
  }
};

const JobPage = async ({ params }: { params: { id: string } }) => {
  const job = await fetchJobData(params.id);

  if (!job) {
    notFound(); // Redirect to 404 page if job not found
  }

  return (
    <div className="flex items-center h-screen justify-center">
    
      <SingleJobComp
        position={job.position}
        company={job.company}
        location={job.location}
        description={job.description}
        posted={job.posted}
        experience={job.experience}
        category={job.category}
        salary={job.salary}
      />
    </div>
  );
};

export default JobPage;
