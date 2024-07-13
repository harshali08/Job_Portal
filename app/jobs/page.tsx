'use client';

import React, { useState, useEffect } from 'react';
import JobComp from "@/components/JobComp";

interface Job {
  id: string;
  position: string;
  mainCategory: string;
  category: string;
  company: string;
  description: string;
  experience: number;
  location: string;
  salary: string;
  posted: number;
}

const Page: React.FC = () => {
  const [jobList, setJobList] = useState<Job[]>([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const resp = await fetch('http://localhost:3000/api/jobs');
        const data=await resp.json()
        const jobData: Job[] = await data.jobs;
        console.log(jobData);
        setJobList(jobData);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    }

    fetchJobs();
  }, []);

  return (
    <>
      {jobList.map((job) => (
        <JobComp
          key={job.id}
          
          position={job.position}
          
          category={job.category}
          company={job.company}
          description={job.description}
          experience={job.experience}
          location={job.location}
          salary={job.salary}
          posted={job.posted}
        />
      ))}
    </>
  );
};

export default Page;
