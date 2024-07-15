


// 'use client';

// import React, { useState, useEffect } from 'react';
// import JobComp from "@/components/JobComp";
// import Footer from '@/components/Footer';
// // import { Pagination } from '@/components/ui/pagination';
// import PaginationComp from '@/components/PaginationComp';

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

// const shuffleArray = (array: any[]) => {
//   // Fisher-Yates shuffle algorithm
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// };

// const Page: React.FC = () => {
//   const [jobList, setJobList] = useState<Job[]>([]);
//   const [currentPage,setCurrentPage]=useState(1);
//   const [jobsPerPage]=useState(5);

//   useEffect(() => {
//     async function fetchJobs() {
//       try {
//         const resp = await fetch('http://localhost:3000/api/jobs');
//         const data = await resp.json();
//         const jobData: Job[] = data.jobs;
        
//         // Shuffle jobData array
//         const shuffledJobs = shuffleArray(jobData);
        
//         console.log(shuffledJobs);
//         setJobList(shuffledJobs);
//       } catch (error) {
//         console.error('Error fetching jobs:', error);
//       }
//     }

//     fetchJobs();
//   }, []);


//   const indexOfLastJob = currentPage * jobsPerPage;
//     const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//     const currentJobs = jobList.slice(indexOfFirstJob, indexOfLastJob);

//     const paginate = (pageNumber: number) => {
//       setCurrentPage(pageNumber);
//       window.scrollTo(0, 0); // Scroll to the top of the page
//     };

//   return (
//     <>
//       <div className='p-2 sm:p-16'>
//         {currentJobs.map((job) => (
//           <JobComp
//             key={job.id}
//             position={job.position}
//             category={job.category}
//             company={job.company}
//             description={job.description}
//             experience={job.experience}
//             location={job.location}
//             salary={job.salary}
//             posted={job.posted}
//           />
//         ))}
//       </div>
//       <PaginationComp
//        itemsPerPage={jobsPerPage}
//        totalItems={jobList.length}
//        paginate={paginate}
//        currentPage={currentPage}
//       />
//       <Footer />
//     </>
//   );
// };

// export default Page;


'use client';

import React, { useState, useEffect } from 'react';
import JobComp from "@/components/JobComp";
import Footer from '@/components/Footer';
import PaginationComp from '@/components/PaginationComp';

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
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);

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
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setLoading(false); // Set loading to false even if there's an error
      }
    }

    fetchJobs();
  }, []);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobList.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  if (loading) {
    return <div className='flex justify-center items-center h-screen'>
    
    <div className="flex gap-2">
    <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
    <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
    <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
</div>

  </div>
  }

  return (
    <>
      <div className='p-2 sm:p-16'>
        {currentJobs.map((job) => (
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
      <PaginationComp
        itemsPerPage={jobsPerPage}
        totalItems={jobList.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <Footer />
    </>
  );
};

export default Page;
