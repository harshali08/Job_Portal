// "use client";
// import React, { useState, useEffect } from 'react';
// import Footer from '@/components/Footer';
// import { FilePenLine } from 'lucide-react';
// import { Trash2 } from 'lucide-react';
// import PaginationComp from '@/components/PaginationComp';
// import DeleteJobBtn from '@/components/DeleteJobBtn';
// import SidebarComp from '@/components/SidebarComp';

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

// const JobsPage: React.FC = () => {
//   const [jobList, setJobList] = useState<Job[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [jobsPerPage] = useState(6); // Number of jobs per page
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchJobs() {
//       try {
//         const resp = await fetch('http://localhost:3000/api/jobs');
//         const data = await resp.json();
//         const jobData: Job[] = data.jobs.map((job: Job) => ({
//           ...job,
//           posted: calculateDaysAgo(job.posted),
//         }));
//         setJobList(jobData);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching jobs:', error);
//         setLoading(false);
//       }
//     }

//     fetchJobs();
//   }, []);

//   function calculateDaysAgo(dateString: string): string {
//     // ... (code for calculating days ago)
//     const postedDate = new Date(dateString);
//     const currentDate = new Date();
//     const timeDiff = currentDate.getTime() - postedDate.getTime();
//     const daysAgo = Math.floor(timeDiff / (1000 * 3600 * 24));

//     if (daysAgo === 0) {
//       return 'Today';
//     } else if (daysAgo === 1) {
//       return '1 day ago';
//     } else {
//       return `${daysAgo} days ago`;
//     }
//   }

//   // Pagination logic
//   const indexOfLastJob = currentPage * jobsPerPage;
//   const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//   const currentJobs = jobList.slice(indexOfFirstJob, indexOfLastJob);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   const deleteJob = async (id: string) => {
//     try {
//       await fetch(`http://localhost:3000/api/jobs/${id}`, {
//         method: 'DELETE',
//       });
//       // Update the jobList state to remove the deleted job
//       setJobList(jobList.filter((job) => job.id !== id));
//     } catch (error) {
//       console.error('Error deleting job:', error);
//     }
//   };

//   const editJob = (id: string) => {
//     // Implement the logic to edit the job
//     console.log(`Editing job with ID: ${id}`);
//   };

//   useEffect(() => {
//     async function fetchUpdatedJobs() {
//       try {
//         const resp = await fetch('http://localhost:3000/api/jobs');
//         const data = await resp.json();
//         const jobData: Job[] = data.jobs.map((job: Job) => ({
//           ...job,
//           posted: calculateDaysAgo(job.posted),
//         }));
//         setJobList(jobData);
//       } catch (error) {
//         console.error('Error fetching updated jobs:', error);
//       }
//     }

//     fetchUpdatedJobs();
//   }, [jobList]);

//   if (loading) {
//     return (
//       <div className='flex justify-center items-center h-screen'>
//         <div className="flex gap-2">
//           <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
//           <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
//           <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div className='flex'>
//         <div className='sm:w-1/6'><SidebarComp/></div>
//         <div className='sm:w-5/6'>
//         <section className="py-1 bg-blueGray-50 mb-8">
//         <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-10">
//           <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
//             <div className="rounded-t mb-0 px-4 py-3 border-0">
//               <div className="flex flex-wrap items-center">
//                 <div className="relative w-full px-4 max-w-full flex-grow flex-1">
//                   <h3 className="font-semibold text-base text-blueGray-700">Job Listings</h3>
//                 </div>
//                 <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
//                   <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
//                 </div>
//               </div>
//             </div>

//             <div className="block w-full overflow-x-auto p-3">
//               <table className="items-center bg-transparent w-full border-collapse">
//                 <thead>
//                   <tr>
//                     <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">Position</th>
//                     <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">Company</th>
//                     <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">Posted</th>
//                     <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {currentJobs.map((job) => (
//                     <tr key={job.id}>
//                       <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 text-left text-blueGray-700 max-w-xs break-words sm:w-10 overflow-hidden" style={{ width: '150px', maxWidth: '150px', wordWrap: 'break-word' }}>{job.position}</td>
//                       <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 max-w-xs break-words sm:w-10 overflow-hidden" style={{ width: '150px', maxWidth: '150px', wordWrap: 'break-word' }}>{job.company}</td>
//                       <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 max-w-xs break-words sm:w-10">{job.posted}</td>
//                       <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 max-w-xs break-words flex sm:w-10">
//                         <button className='p-2 text-blue-600' onClick={() => editJob(job.id)}><FilePenLine /></button>
//                         <DeleteJobBtn id={job.id} onDelete={deleteJob} />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//         {/* Pagination Component */}
//         <PaginationComp
//           itemsPerPage={jobsPerPage}
//           totalItems={jobList.length}
//           paginate={paginate}
//           currentPage={currentPage}
//         />
//       </section>
//       </div></div>

//       <Footer />
//     </div>
//   );
// };

// export default JobsPage;

"use client";
import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { FilePenLine } from "lucide-react";
import { Trash2 } from "lucide-react";
import PaginationComp from "@/components/PaginationComp";
import DeleteJobBtn from "@/components/DeleteJobBtn";
import SidebarComp from "@/components/SidebarComp";

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

const JobsPage: React.FC = () => {
  const [jobList, setJobList] = useState<Job[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(6); // Number of jobs per page
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const resp = await fetch("http://localhost:3000/api/jobs");
        const data = await resp.json();
        const jobData: Job[] = data.jobs.map((job: Job) => ({
          ...job,
          posted: calculateDaysAgo(job.posted),
        }));
        setJobList(jobData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  function calculateDaysAgo(dateString: string): string {
    // ... (code for calculating days ago)
    const postedDate = new Date(dateString);
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - postedDate.getTime();
    const daysAgo = Math.floor(timeDiff / (1000 * 3600 * 24));

    if (daysAgo === 0) {
      return "Today";
    } else if (daysAgo === 1) {
      return "1 day ago";
    } else {
      return `${daysAgo} days ago`;
    }
  }

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobList.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const deleteJob = async (id: string) => {
    try {
      await fetch(`http://localhost:3000/api/jobs/${id}`, {
        method: "DELETE",
      });
      // Update the jobList state to remove the deleted job
      setJobList(jobList.filter((job) => job.id !== id));
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  const editJob = (id: string) => {
    // Implement the logic to edit the job
    console.log(`Editing job with ID: ${id}`);
  };

  useEffect(() => {
    async function fetchUpdatedJobs() {
      try {
        const resp = await fetch("http://localhost:3000/api/jobs");
        const data = await resp.json();
        const jobData: Job[] = data.jobs.map((job: Job) => ({
          ...job,
          posted: calculateDaysAgo(job.posted),
        }));
        setJobList(jobData);
      } catch (error) {
        console.error("Error fetching updated jobs:", error);
      }
    }

    fetchUpdatedJobs();
  }, [jobList]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <div className="w-1/6">
          <SidebarComp />
        </div>
        <div className="w-5/6">
          <section className="py-1 bg-blueGray-50 mb-6">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-8">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                      <h3 className="font-semibold text-base text-blueGray-700">
                        Job Listings
                      </h3>
                    </div>
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                      <button
                        className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        See all
                      </button>
                    </div>
                  </div>
                </div>

                <div className="block w-full overflow-x-auto p-3">
                  {loading ? (
                    <div className="flex justify-center items-center h-60">
                      <div className="flex gap-2">
                        <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
                        <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
                        <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
                      </div>
                    </div>
                  ) : (
                    <table className="items-center bg-transparent w-full border-collapse">
                      <thead>
                        <tr>
                          <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">
                            Position
                          </th>
                          <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">
                            Company
                          </th>
                          <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">
                            Posted
                          </th>
                          <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentJobs.map((job) => (
                          <tr key={job.id}>
                            <td
                              className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 text-left text-blueGray-700 max-w-xs break-words sm:w-10 overflow-hidden"
                              style={{
                                width: "150px",
                                maxWidth: "150px",
                                wordWrap: "break-word",
                              }}
                            >
                              {job.position}
                            </td>
                            <td
                              className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 max-w-xs break-words sm:w-10 overflow-hidden"
                              style={{
                                width: "150px",
                                maxWidth: "150px",
                                wordWrap: "break-word",
                              }}
                            >
                              {job.company}
                            </td>
                            <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 max-w-xs break-words sm:w-10">
                              {job.posted}
                            </td>
                            <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 max-w-xs break-words flex sm:w-10">
                              <button
                                className="p-2 text-blue-600"
                                onClick={() => editJob(job.id)}
                              >
                                <FilePenLine />
                              </button>
                              <DeleteJobBtn id={job.id} onDelete={deleteJob} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
            {/* Pagination Component */}
            <PaginationComp
              itemsPerPage={jobsPerPage}
              totalItems={jobList.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobsPage;
