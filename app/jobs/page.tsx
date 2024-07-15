// 'use client';

// import React, { useState, useEffect } from 'react';
// import JobComp from "@/components/JobComp";
// import Footer from '@/components/Footer';

// interface Job {
//   id: string;
//   position: string;
//   mainCategory: string;
//   category: string;
//   company: string;
//   description: string;
//   experience: number;
//   location: string;
//   salary: string;
//   posted: string;
// }

// const Page: React.FC = () => {
//   const [jobList, setJobList] = useState<Job[]>([]);

//   useEffect(() => {
//     async function fetchJobs() {
//       try {
//         const resp = await fetch('http://localhost:3000/api/jobs');
//         const data=await resp.json()
//         const jobData: Job[] = await data.jobs;
//         console.log(jobData);
//         setJobList(jobData);
//       } catch (error) {
//         console.error('Error fetching jobs:', error);
//       }
//     }

//     fetchJobs();
//   }, []);

//   return (
//     <>
//     <div className='p-2 sm:p-16'>
//       {jobList.map((job) => (
//         <JobComp
//           key={job.id}
          
//           position={job.position}
          
//           category={job.category}
//           company={job.company}
//           description={job.description}
//           experience={job.experience}
//           location={job.location}
//           salary={job.salary}
//           posted={job.posted}
//         />
//       ))}
    
//     </div>
//    {/* <PaginationComp/> */}
//     <Footer/>
//     </>
//   );
// };

// export default Page;


'use client';

import React, { useState, useEffect } from 'react';
import JobComp from "@/components/JobComp";
import Footer from '@/components/Footer';

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
  posted: string;
}

const shuffleArray = (array: any[]) => {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Page: React.FC = () => {
  const [jobList, setJobList] = useState<Job[]>([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const resp = await fetch('http://localhost:3000/api/jobs');
        const data = await resp.json();
        const jobData: Job[] = data.jobs;
        
        // Shuffle jobData array
        const shuffledJobs = shuffleArray(jobData);
        
        console.log(shuffledJobs);
        setJobList(shuffledJobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    }

    fetchJobs();
  }, []);

  return (
    <>
      <div className='p-2 sm:p-16'>
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
      </div>
      <Footer />
    </>
  );
};

export default Page;
