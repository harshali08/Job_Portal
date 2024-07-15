

// "use client"
// import React, { useState, useEffect } from 'react';
// import Footer from '@/components/Footer';
// import { PaginationComp } from '@/components/PaginationComp';

// interface Job {
//     id: string;
//     position: string;
//     mainCategory: string;
//     category: string;
//     company: string;
//     description: string;
//     experience: number;
//     location: string;
//     salary: string;
//     posted: string;
// }

// const Page: React.FC = () => {
//     const [jobList, setJobList] = useState<Job[]>([]);

//     useEffect(() => {
//         async function fetchJobs() {
//             try {
//                 const resp = await fetch('http://localhost:3000/api/jobs');
//                 const data = await resp.json();
//                 const jobData: Job[] = data.jobs;
//                 console.log(jobData);
//                 setJobList(jobData);
//             } catch (error) {
//                 console.error('Error fetching jobs:', error);
//             }
//         }

//         fetchJobs();
//     }, []);

//     return (
//         <div>
//             <section className="py-1 bg-blueGray-50">
//                 <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
//                     <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
//                         <div className="rounded-t mb-0 px-4 py-3 border-0">
//                             <div className="flex flex-wrap items-center">
//                                 <div className="relative w-full px-4 max-w-full flex-grow flex-1">
//                                     <h3 className="font-semibold text-base text-blueGray-700">Job Listings</h3>
//                                 </div>
//                                 <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
//                                     <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="block w-full overflow-x-auto">
//                             <table className="items-center bg-transparent w-full border-collapse">
//                                 <thead>
//                                     <tr>
//                                         <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Position</th>
//                                         <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Company</th>
//                                         <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Location</th>
//                                         <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Salary</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {jobList.map((job) => (
//                                         <tr key={job.id}>
//                                             <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">{job.position}</td>
//                                             <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{job.company}</td>
//                                             <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{job.location}</td>
//                                             <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{job.salary}</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//                 <footer className="relative pt-8 pb-6 mt-16">
//                     <div className="container mx-auto px-4">
//                         <div className="flex flex-wrap items-center md:justify-between justify-center">
//                             <div className="w-full md:w-6/12 px-4 mx-auto text-center">
//                                 <div className="text-sm text-blueGray-500 font-semibold py-1">
//                                     Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800" target="_blank">Creative Tim</a>.
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </footer>
//             </section>
//         </div>
//     );
// }

// export default Page;


// "use client"
// import React, { useState, useEffect } from 'react';
// import Footer from '@/components/Footer';
// import { PaginationComp } from '@/components/PaginationComp';
// import { FilePenLine } from 'lucide-react';
// import { Trash2 } from 'lucide-react';



// interface Job {
//     id: string;
//     position: string;
//     mainCategory: string;
//     category: string;
//     company: string;
//     description: string;
//     experience: number;
//     location: string;
//     salary: string;
//     posted: string;
// }

// const Page: React.FC = () => {
//     const [jobList, setJobList] = useState<Job[]>([]);

//     useEffect(() => {
//         async function fetchJobs() {
//             try {
//                 const resp = await fetch('http://localhost:3000/api/jobs');
//                 const data = await resp.json();
//                 const jobData: Job[] = data.jobs;
//                 console.log(jobData);
//                 setJobList(jobData);
//             } catch (error) {
//                 console.error('Error fetching jobs:', error);
//             }
//         }

//         fetchJobs();
//     }, []);

//     return (
//         <div>
//             <section className="py-1 bg-blueGray-50">
//                 <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
//                     <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
//                         <div className="rounded-t mb-0 px-4 py-3 border-0">
//                             <div className="flex flex-wrap items-center">
//                                 <div className="relative w-full px-4 max-w-full flex-grow flex-1">
//                                     <h3 className="font-semibold text-base text-blueGray-700">Job Listings</h3>
//                                 </div>
//                                 <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
//                                     <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="block w-full overflow-x-auto p-3">
//                             <table className="items-center bg-transparent w-full border-collapse ">
//                                 <thead>
//                                     <tr>
//                                         <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">Position</th>
//                                         <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">Company</th>
//                                         {/* <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">Location</th>
//                                         <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">Salary</th>
//                                         <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">Experience</th> */}
//                                         <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">Posted</th>
//                                         <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">Actions</th>

//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {jobList.map((job) => (
//                                         <tr key={job.id}>
//                                             <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 max-w-xs break-words sm:w-10">{job.position}</td>
//                                             <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 max-w-xs break-words sm:w-10">{job.company}</td>
//                                              {/* <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 max-w-xs break-words sm:w-10">{job.location}</td>
//                                             <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 max-w-xs break-words sm:w-10">{job.salary}</td>
//                                             <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 max-w-xs break-words sm:w-10">{job.experience}</td> */}
//                                             <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 max-w-xs break-words sm:w-10">{job.posted}</td> 
//                                             <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 max-w-xs break-words flex sm:w-10"><button className='p-2 text-blue-600'>  <FilePenLine /></button  > <button className='p-2 text-red-600'> <Trash2 /></button></td>


//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//                 <footer className="relative pt-8 pb-6 mt-16">
//                     <div className="container mx-auto px-4">
//                         <div className="flex flex-wrap items-center md:justify-between justify-center">
//                             <div className="w-full md:w-6/12 px-4 mx-auto text-center">
//                                 <div className="text-sm text-blueGray-500 font-semibold py-1">
//                                     Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800" target="_blank">Creative Tim</a>.
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </footer>
//             </section>
//         </div>
//     );
// }

// export default Page;


// "use client"
// import React, { useState, useEffect } from 'react';
// import Footer from '@/components/Footer';
// import { PaginationComp } from '@/components/PaginationComp';
// import { FilePenLine } from 'lucide-react';
// import { Trash2 } from 'lucide-react';

// interface Job {
//     id: string;
//     position: string;
//     mainCategory: string;
//     category: string;
//     company: string;
//     description: string;
//     experience: number;
//     location: string;
//     salary: string;
//     posted: string;
// }

// const Page: React.FC = () => {
//     const [jobList, setJobList] = useState<Job[]>([]);

//     useEffect(() => {
//         async function fetchJobs() {
//             try {
//                 const resp = await fetch('http://localhost:3000/api/jobs');
//                 const data = await resp.json();
//                 const jobData: Job[] = data.jobs.map((job: Job) => ({
//                     ...job,
//                     posted: calculateDaysAgo(job.posted),
//                 }));
//                 console.log(jobData);
//                 setJobList(jobData);
//             } catch (error) {
//                 console.error('Error fetching jobs:', error);
//             }
//         }

//         fetchJobs();
//     }, []);

//     function calculateDaysAgo(dateString: string): string {
//         const postedDate = new Date(dateString);
//         const currentDate = new Date();
//         const timeDiff = currentDate.getTime() - postedDate.getTime();
//         const daysAgo = Math.floor(timeDiff / (1000 * 3600 * 24));

//         if (daysAgo === 0) {
//             return 'Today';
//         } else if (daysAgo === 1) {
//             return '1 day ago';
//         } else {
//             return `${daysAgo} days ago`;
//         }
//     }

//     return (
//         <div>
//             <section className="py-1 bg-blueGray-50">
//                 <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
//                     <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
//                         <div className="rounded-t mb-0 px-4 py-3 border-0">
//                             <div className="flex flex-wrap items-center">
//                                 <div className="relative w-full px-4 max-w-full flex-grow flex-1">
//                                     <h3 className="font-semibold text-base text-blueGray-700">Job Listings</h3>
//                                 </div>
//                                 <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
//                                     <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="block w-full overflow-x-auto p-3">
//                             <table className="items-center bg-transparent w-full border-collapse ">
//                                 <thead>
//                                     <tr>
//                                         <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">Position</th>
//                                         <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">Company</th>
//                                         <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">Posted</th>
//                                         <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">Actions</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {jobList.map((job) => (
//                                         <tr key={job.id}>
//                                             <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 max-w-xs break-words sm:w-10">{job.position}</td>
//                                             <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 max-w-xs break-words sm:w-10">{job.company}</td>
//                                             <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 max-w-xs break-words sm:w-10">{job.posted}</td>
//                                             <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 max-w-xs break-words flex sm:w-10">
//                                                 <button className='p-2 text-blue-600'><FilePenLine /></button>
//                                                 <button className='p-2 text-red-600'><Trash2 /></button>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//                 <footer className="relative pt-8 pb-6 mt-16">
//                     <div className="container mx-auto px-4">
//                         <div className="flex flex-wrap items-center md:justify-between justify-center">
//                             <div className="w-full md:w-6/12 px-4 mx-auto text-center">
//                                 <div className="text-sm text-blueGray-500 font-semibold py-1">
//                                     Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800" target="_blank">Creative Tim</a>.
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </footer>
//             </section>
//         </div>
//     );
// }

// export default Page;

// "use client"
// import React, { useState, useEffect } from 'react';
// import Footer from '@/components/Footer';
// import { PaginationComp } from '@/components/PaginationComp';
// import { FilePenLine } from 'lucide-react';
// import { Trash2 } from 'lucide-react';

// interface Job {
//     id: string;
//     position: string;
//     mainCategory: string;
//     category: string;
//     company: string;
//     description: string;
//     experience: number;
//     location: string;
//     salary: string;
//     posted: string;
// }

// const Page: React.FC = () => {
//     const [jobList, setJobList] = useState<Job[]>([]);

//     useEffect(() => {
//         async function fetchJobs() {
//             try {
//                 const resp = await fetch('http://localhost:3000/api/jobs');
//                 const data = await resp.json();
//                 const jobData: Job[] = data.jobs.map((job: Job) => ({
//                     ...job,
//                     posted: calculateDaysAgo(job.posted),
//                 }));
//                 console.log(jobData);
//                 setJobList(jobData);
//             } catch (error) {
//                 console.error('Error fetching jobs:', error);
//             }
//         }

//         fetchJobs();
//     }, []);

//     function calculateDaysAgo(dateString: string): string {
//         const postedDate = new Date(dateString);
//         const currentDate = new Date();
//         const timeDiff = currentDate.getTime() - postedDate.getTime();
//         const daysAgo = Math.floor(timeDiff / (1000 * 3600 * 24));

//         if (daysAgo === 0) {
//             return 'Today';
//         } else if (daysAgo === 1) {
//             return '1 day ago';
//         } else {
//             return `${daysAgo} days ago`;
//         }
//     }

//     return (
//         <div>
//             <section className="py-1 bg-blueGray-50">
//                 <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
//                     <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
//                         <div className="rounded-t mb-0 px-4 py-3 border-0">
//                             <div className="flex flex-wrap items-center">
//                                 <div className="relative w-full px-4 max-w-full flex-grow flex-1">
//                                     <h3 className="font-semibold text-base text-blueGray-700">Job Listings</h3>
//                                 </div>
//                                 <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
//                                     <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="block w-full overflow-x-auto p-3">
//                             <table className="items-center bg-transparent w-full border-collapse">
//                                 <thead>
//                                     <tr>
//                                         <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">Position</th>
//                                         <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">Company</th>
//                                         <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">Posted</th>
//                                         <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">Actions</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {jobList.map((job) => (
//                                         <tr key={job.id}>
//                                             <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 max-w-xs break-words sm:w-10" style={{ width: '150px', maxWidth: '150px', wordWrap: 'break-word' }}>{job.position}</td>
//                                             <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 max-w-xs break-words sm:w-10" style={{ width: '150px', maxWidth: '150px', wordWrap: 'break-word' }}>{job.company}</td>
//                                             <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 max-w-xs break-words sm:w-10">{job.posted}</td>
//                                             <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 max-w-xs break-words flex sm:w-10">
//                                                 <button className='p-2 text-blue-600'><FilePenLine /></button>
//                                                 <button className='p-2 text-red-600'><Trash2 /></button>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//                 <footer className="relative pt-8 pb-6 mt-16">
//                     <div className="container mx-auto px-4">
//                         <div className="flex flex-wrap items-center md:justify-between justify-center">
//                             <div className="w-full md:w-6/12 px-4 mx-auto text-center">
//                                 <div className="text-sm text-blueGray-500 font-semibold py-1">
//                                     Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800" target="_blank">Creative Tim</a>.
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </footer>
//             </section>
//         </div>
//     );
// }

// export default Page;

"use client"
import React, { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import { FilePenLine } from 'lucide-react';
import { Trash2 } from 'lucide-react';
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

const Page: React.FC = () => {
    const [jobList, setJobList] = useState<Job[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(8); // Number of jobs per page

    useEffect(() => {
        async function fetchJobs() {
            try {
                const resp = await fetch('http://localhost:3000/api/jobs');
                const data = await resp.json();
                const jobData: Job[] = data.jobs.map((job: Job) => ({
                    ...job,
                    posted: calculateDaysAgo(job.posted),
                }));
                console.log(jobData);
                setJobList(jobData);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        }

        fetchJobs();
    }, []);

    function calculateDaysAgo(dateString: string): string {
        const postedDate = new Date(dateString);
        const currentDate = new Date();
        const timeDiff = currentDate.getTime() - postedDate.getTime();
        const daysAgo = Math.floor(timeDiff / (1000 * 3600 * 24));

        if (daysAgo === 0) {
            return 'Today';
        } else if (daysAgo === 1) {
            return '1 day ago';
        } else {
            return `${daysAgo} days ago`;
        }
    }

    // Pagination logic
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobList.slice(indexOfFirstJob, indexOfLastJob);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div>
            <section className="py-1 bg-blueGray-50 mb-10">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3 className="font-semibold text-base text-blueGray-700">Job Listings</h3>
                                </div>
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
                                </div>
                            </div>
                        </div>

                        <div className="block w-full overflow-x-auto p-3">
                            <table className="items-center bg-transparent w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">Position</th>
                                        <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">Company</th>
                                        <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">Posted</th>
                                        <th className="px-2 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left sm:w-10">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentJobs.map((job) => (
                                        <tr key={job.id}>
                                            <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 max-w-xs break-words sm:w-10" style={{ width: '150px', maxWidth: '150px', wordWrap: 'break-word' }}>{job.position}</td>
                                            <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 max-w-xs break-words sm:w-10" style={{ width: '150px', maxWidth: '150px', wordWrap: 'break-word' }}>{job.company}</td>
                                            <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 max-w-xs break-words sm:w-10">{job.posted}</td>
                                            <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 max-w-xs break-words flex sm:w-10">
                                                <button className='p-2 text-blue-600'><FilePenLine /></button>
                                                <button className='p-2 text-red-600'><Trash2 /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
            <Footer/>
        </div>
    );
}

export default Page;
